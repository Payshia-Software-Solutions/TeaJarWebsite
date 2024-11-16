<?php

require_once './models/Payment.php';
class PaymentController
{
    private $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    // Method to initiate the payment and redirect to PayHere Checkout
    public function initiatePayment()
    {
        // Validate and sanitize POST data
        $required_fields = ['order_id', 'amount', 'currency', 'return_url', 'cancel_url', 'notify_url', 'first_name', 'last_name', 'email', 'phone', 'address', 'city', 'country'];

        foreach ($required_fields as $field) {
            if (!isset($_POST[$field])) {
                // Log error or handle missing data
                die("Error: Missing required field " . htmlspecialchars($field));
            }
        }

        $order_id = htmlspecialchars($_POST['order_id']);
        $amount = number_format($_POST['amount'], 2, '.', '');
        $currency = htmlspecialchars($_POST['currency']);
        $return_url = htmlspecialchars($_POST['return_url']);
        $cancel_url = htmlspecialchars($_POST['cancel_url']);
        $notify_url = htmlspecialchars($_POST['notify_url']);

        $customer_details = [
            'first_name' => htmlspecialchars($_POST['first_name']),
            'last_name' => htmlspecialchars($_POST['last_name']),
            'email' => htmlspecialchars($_POST['email']),
            'phone' => htmlspecialchars($_POST['phone']),
            'address' => htmlspecialchars($_POST['address']),
            'city' => htmlspecialchars($_POST['city']),
            'country' => htmlspecialchars($_POST['country'])
        ];

        // Use environment variables or secure storage for sensitive credentials
        $merchant_id = '1227940';
        $merchant_secret = "NzA3NzA5OTA3MzExNDQwNTA0OTQyMDAyNjEyMDEyMzYzNDI1Mzcz";
        $hash = strtoupper(
            md5(
                $merchant_id .
                    $order_id .
                    number_format($amount, 2, '.', '') .
                    $currency .
                    strtoupper(md5($merchant_secret))
            )
        );

        // Prepare the form data
        $form_data = array_merge([
            'merchant_id' => $merchant_id,
            'order_id' => $order_id,
            'currency' => $currency,
            'amount' => $amount,
            'return_url' => $return_url,
            'cancel_url' => $cancel_url,
            'notify_url' => $notify_url,
            'hash' => $hash
        ], $customer_details);

        // Set content type and render the HTML form for auto-submission
        header('Content-Type: text/html; charset=UTF-8');
        echo '<html><body onload="">';
        echo '<form method="post" action="https://sandbox.payhere.lk/pay/checkout">';
        foreach ($form_data as $key => $value) {
            echo '<input type="text" name="' . htmlspecialchars($key) . '" value="' . htmlspecialchars($value) . '">';
        }

        echo '<button type="submit">Submit</button>';
        echo '</form></body></html>';
    }

    // Method to handle payment notifications from PayHere
    public function paymentNotification()
    {
        // Extract parameters from the PayHere callback
        $merchant_id = $_POST['merchant_id'];
        $order_id = $_POST['order_id'];
        $payhere_amount = $_POST['payhere_amount'];
        $payhere_currency = $_POST['payhere_currency'];
        $status_code = $_POST['status_code'];
        $md5sig = $_POST['md5sig'];

        // Your PayHere secret key
        $merchant_secret = 'NzA3NzA5OTA3MzExNDQwNTA0OTQyMDAyNjEyMDEyMzYzNDI1Mzcz';

        // Verify the signature from PayHere
        $local_md5sig = strtoupper(md5(
            $merchant_id .
                $order_id .
                $payhere_amount .
                $payhere_currency .
                $status_code .
                strtoupper(md5($merchant_secret))
        ));

        if ($local_md5sig === $md5sig && $status_code == 2) {
            // Payment was successful
            $this->updateOrderStatus($order_id, 'success');
            echo json_encode(['status' => 'Payment successful']);
        } else {
            // Payment failed or something went wrong
            $this->updateOrderStatus($order_id, 'failed');
            echo json_encode(['status' => 'Payment failed']);
        }
    }

    // Method to handle the return URL (after user is redirected from PayHere)
    public function paymentReturn()
    {
        // The return URL is handled after the user is redirected back to your website
        // You can query your database to check the status of the payment and display the result to the user

        $order_id = $_GET['order_id'];
        $payment_status = $this->getOrderStatus($order_id);

        if ($payment_status == 'success') {
            echo 'Payment was successful!';
        } else {
            echo 'Payment failed or was canceled!';
        }
    }

    // Helper method to update the order status in your database
    private function updateOrderStatus($order_id, $status)
    {
        $stmt = $this->pdo->prepare("UPDATE orders SET status = :status WHERE order_id = :order_id");
        $stmt->bindParam(':status', $status);
        $stmt->bindParam(':order_id', $order_id);
        $stmt->execute();
    }

    // Helper method to get the order status
    private function getOrderStatus($order_id)
    {
        $stmt = $this->pdo->prepare("SELECT status FROM orders WHERE order_id = :order_id");
        $stmt->bindParam(':order_id', $order_id);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        return $result ? $result['status'] : 'not found';
    }
}

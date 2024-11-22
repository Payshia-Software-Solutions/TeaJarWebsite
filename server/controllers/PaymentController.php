<?php

require_once './models/Payment.php';
require_once './models/Transaction/TransactionInvoice.php'; // Ensure the model file is named correctly


class PaymentController
{
    private $pdo;
    private $model;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
        $this->model = new TransactionInvoice($pdo);
    }

    // Method to initiate the payment and redirect to PayHere Checkout
    // public function initiatePayment()
    // {
    //     // Check if all necessary POST parameters are set
    //     if (!isset(
    //         $data['order_id'],
    //         $data['amount'],
    //         $data['currency'],
    //         $data['return_url'],
    //         $data['cancel_url'],
    //         $data['notify_url'],
    //         $data['first_name'],
    //         $data['last_name'],
    //         $data['email'],
    //         $data['phone'],
    //         $data['address'],
    //         $data['city'],
    //         $data['country']
    //     )) {
    //         // If any required field is missing, return an error
    //         echo json_encode(['error' => 'Missing required parameters']);
    //         exit;
    //     }

    //     // Get the payment details from the POST request
    //     $order_id = $data['order_id'];
    //     $amount = number_format($data['amount'], 2, '.', '');
    //     $currency = $data['currency'];
    //     $return_url = $data['return_url'];
    //     $cancel_url = $data['cancel_url'];
    //     $notify_url = $data['notify_url'];

    //     // Customer details
    //     $customer_details = [
    //         'first_name' => $data['first_name'],
    //         'last_name' => $data['last_name'],
    //         'email' => $data['email'],
    //         'phone' => $data['phone'],
    //         'address' => $data['address'],
    //         'city' => $data['city'],
    //         'country' => $data['country']
    //     ];

    //     // Validate amount
    //     if (!is_numeric($amount) || $amount <= 0) {
    //         echo json_encode(['error' => 'Invalid amount']);
    //         exit;
    //     }

    //     // Your PayHere credentials
    //     $merchant_id = '1227940';
    //     $merchant_secret = 'NzA3NzA5OTA3MzExNDQwNTA0OTQyMDAyNjEyMDEyMzYzNDI1Mzcz';

    //     // Generate the hash for security
    //     $hash = strtoupper(
    //         md5(
    //             $merchant_id .
    //                 $order_id .
    //                 number_format($amount, 2, '.', '') .
    //                 $currency .
    //                 strtoupper(md5($merchant_secret))
    //         )
    //     );

    //     // Prepare the form data for submission
    //     $form_data = array_merge([
    //         'merchant_id' => $merchant_id,
    //         'return_url' => $return_url,
    //         'cancel_url' => $cancel_url,
    //         'notify_url' => $notify_url,
    //         'order_id' => $order_id,
    //         'items' => "Tea Order",
    //         'currency' => $currency,
    //         'amount' => $amount,
    //         'hash' => $hash
    //     ], $customer_details);

    //     // Generate the HTML form that will auto-submit to PayHere checkout
    //     echo '<html><body onload="document.forms[0].submit();">';
    //     echo '<form method="post" action="https://sandbox.payhere.lk/pay/checkout">';
    //     foreach ($form_data as $key => $value) {
    //         echo '<input type="hidden" name="' . htmlspecialchars($key) . '" value="' . htmlspecialchars($value) . '">';
    //     }
    //     echo "Redirecting...";
    //     echo '</form></body></html>';
    // }

    public function initiatePayment()
    {
        $data = json_decode(file_get_contents("php://input"), true);

        // Check if all necessary POST parameters are set
        if (!isset(
            $data['totalAmount'],
            $data['paymentMethod'],
            $data['contactDetails'],
            $data['shippingAddress'],
            $data['sameAddressStatus'],
            $data['items'],
        )) {
            // If any required field is missing, return an error
            echo json_encode(['error' => 'Missing required parameters']);
            exit;
        }

        // Get the payment details from the POST request
        $order_id = 12345;
        $totalAmount = number_format($data['totalAmount'], 2, '.', ''); // Ensure amount is formatted
        $currency = "LKR";
        $return_url = "http://teajarceylon.payshia.com/order-confirmation";
        $cancel_url = "http://teajarceylon.payshia.com/checkout";
        $notify_url = "https://kduserver.payshia.com/payment/notify";
        $promoCode = $data['promoCode'];  // The promo code applied to the order
        $paymentMethod = $data['paymentMethod']; // Payment method (e.g., "card")

        // Get the contact details
        $contactDetails = $data['contactDetails'];
        $email = $contactDetails['email'];
        $subscribe = $contactDetails['subscribe'];

        // Get shipping address
        $shippingAddress = $data['shippingAddress'];

        // Get billing address (will be used only if sameAddressStatus is 0)
        $billingAddress = $data['billingAddress'];

        // Check if the shipping address and billing address are the same
        $sameAddressStatus = $data['sameAddressStatus'];

        if ($sameAddressStatus == 1) {
            // If the addresses are the same, use the shipping address as the billing address
            $billingAddress = $shippingAddress;
        }

        // Customer details (shipping details)
        $customer_details = [
            'first_name' => $shippingAddress['firstName'],
            'last_name' => $shippingAddress['lastName'],
            'email' => $email,
            'phone' => $shippingAddress['phone'],
            'address' => $shippingAddress['address'],
            'city' => $shippingAddress['city'],
            'country' => $shippingAddress['country'],
            'postal_code' => $shippingAddress['postalCode']
        ];

        // var_dump($totalAmount);

        // Validate totalAmount
        if (!is_numeric($totalAmount) || $totalAmount <= 0) {
            echo json_encode(['error' => 'Invalid amount']);
            exit;
        }

        // Prepare the order items as a string
        $items = "";
        foreach ($data['items'] as $item) {
            $items .= $item['productName'] . " (ID: " . $item['id'] . ") x " . $item['quantity'] . ", ";
        }
        $items = rtrim($items, ", "); // Remove trailing comma

        // Extract order items and calculate total
        $itemsList = isset($data['items']) ? $data['items'] : [];
        $total_amount = 0;
        foreach ($itemsList as $item) {
            $total_amount += $item['price'] * $item['quantity'];  // Calculate total based on price and quantity
        }

        $invoiceNumber = uniqid();
        // Prepare the invoice data
        $invoice_data = [
            'invoice_number' => $invoiceNumber,
            'invoice_date' => date('Y-m-d'), // Current date
            'inv_amount' => $total_amount, // Total amount before discount
            'grand_total' => $data['totalAmount'], // Final amount after discount, shipping, etc.
            'discount_amount' => isset($_POST['discountAmount']) ? $_POST['discountAmount'] : 0,
            'discount_percentage' => isset($_POST['discountPercentage']) ? $_POST['discountPercentage'] : 0,
            'customer_code' => $customer_details['email'], // Assuming customer_code can be the email
            'service_charge' => 0, // If applicable
            'tendered_amount' => $data['totalAmount'], // Amount paid
            'close_type' => 'Pending', // Assuming paid status
            'invoice_status' => 'pending', // Initial status
            'current_time' => date('Y-m-d H:i:s'),
            'location_id' => 1, // Adjust as needed
            'table_id' => 1, // Adjust as needed
            'order_ready_status' => 0, // Order is not ready initially
            'created_by' => 'Online', // Change to the actual user or system responsible
            'is_active' => 1,
            'steward_id' => 1, // Adjust as needed
            'cost_value' => $total_amount, // Assuming cost value is the same as inv_amount
            'remark' => 'Payment initiated', // Optional remark
            'ref_hold' => null, // Optional reference hold, if needed
        ];

        // Call the createInvoice method to insert the data
        $invoiceId = $this->model->createInvoice($invoice_data);

        // $invoiceId = 1;
        // echo $invoiceId;
        // If invoice was created successfully, proceed with payment gateway
        if ($invoiceId) {

            // Your PayHere credentials
            $merchant_id = '1227940';
            $merchant_secret = 'NzA3NzA5OTA3MzExNDQwNTA0OTQyMDAyNjEyMDEyMzYzNDI1Mzcz';

            // Generate the hash for security
            $hash = strtoupper(
                md5(
                    $merchant_id .
                        $invoiceNumber .
                        $totalAmount .
                        $currency .
                        strtoupper(md5($merchant_secret))
                )
            );

            // Prepare the form data for submission
            $form_data = array_merge([
                'merchant_id' => $merchant_id,
                'return_url' => $return_url,
                'cancel_url' => $cancel_url,
                'notify_url' => $notify_url,
                'order_id' => $invoiceNumber,
                'items' => $items, // Order items in a readable string format
                'currency' => $currency,
                'amount' => $totalAmount,
                'paymentMethod' => $paymentMethod, // Selected payment method
                'hash' => $hash
            ], $customer_details);

            // Generate the HTML form that will auto-submit to PayHere checkout
            echo '<html><body onload="document.forms[0].submit();">';
            echo '<form method="post" action="https://sandbox.payhere.lk/pay/checkout">';
            foreach ($form_data as $key => $value) {
                echo '<input type="hidden" name="' . htmlspecialchars($key) . '" value="' . htmlspecialchars($value) . '">';
            }
            echo "Redirecting...";
            echo '</form></body></html>';
        } else {
            echo json_encode(['error' => 'Failed to create invoice']);
        }
    }



    // Create a new transaction invoice
    public function createInvoice($data)
    {

        // Validate required fields
        if (
            $data && isset($data['invoice_number']) && isset($data['invoice_date']) &&
            isset($data['inv_amount']) && isset($data['grand_total']) &&
            isset($data['discount_amount']) && isset($data['discount_percentage']) &&
            isset($data['customer_code']) && isset($data['service_charge']) &&
            isset($data['tendered_amount']) && isset($data['close_type']) &&
            isset($data['invoice_status']) && isset($data['current_time']) &&
            isset($data['location_id']) && isset($data['table_id']) &&
            isset($data['created_by']) && isset($data['is_active']) &&
            isset($data['steward_id']) && isset($data['cost_value'])
        ) {

            $data['current_time'] = date('Y-m-d H:i:s'); // Set current timestamp
            $this->model->createInvoice($data);
            http_response_code(201);
            echo json_encode(['message' => 'Transaction invoice created successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }



    // Method to handle payment notifications from PayHere
    // public function paymentNotification()
    // {
    //     // Extract parameters from the PayHere callback
    //     $merchant_id = $data['merchant_id'];
    //     $order_id = $data['order_id'];
    //     $payhere_amount = $data['payhere_amount'];
    //     $payhere_currency = $data['payhere_currency'];
    //     $status_code = $data['status_code'];
    //     $md5sig = $data['md5sig'];

    //     // Your PayHere secret key
    //     $merchant_secret = 'NzA3NzA5OTA3MzExNDQwNTA0OTQyMDAyNjEyMDEyMzYzNDI1Mzcz';

    //     // Verify the signature from PayHere
    //     $local_md5sig = strtoupper(md5(
    //         $merchant_id .
    //             $order_id .
    //             $payhere_amount .
    //             $payhere_currency .
    //             $status_code .
    //             strtoupper(md5($merchant_secret))
    //     ));

    //     if ($local_md5sig === $md5sig && $status_code == 2) {
    //         // Payment was successful
    //         $this->updateOrderStatus($order_id, 'success');
    //         echo json_encode(['status' => 'Payment successful']);
    //     } else {
    //         // Payment failed or something went wrong
    //         $this->updateOrderStatus($order_id, 'failed');
    //         echo json_encode(['status' => 'Payment failed']);
    //     }
    // }

    // Method to handle the return URL (after user is redirected from PayHere)
    public function paymentReturn()
    {
        // The return URL is handled after the user is redirected back to your website
        // You can query your database to check the status of the payment and display the result to the user

        $order_id = $_GET['order_id'];
        // $payment_status = $this->getOrderStatus($order_id);

        if ($order_id) {
            echo $order_id . ' Payment was successful!';
        } else {
            echo 'Payment failed or was canceled!';
        }
    }

    // public function paymentNotify()
    // {
    //     // Fetch the incoming payment notification data
    //     $data = json_decode(file_get_contents("php://input"), true);

    //     // Retrieve the necessary fields from the POST request
    //     $merchant_id = $data['merchant_id'];
    //     $order_id = $data['order_id'];
    //     $payhere_amount = $data['payhere_amount'];
    //     $payhere_currency = $data['payhere_currency'];
    //     $status_code = $data['status_code'];
    //     $md5sig = $data['md5sig'];

    //     // Your PayHere Merchant Secret
    //     $merchant_secret = 'Mzc2NTYyMjM3MzQwNjY0NDAxNDcyNDU4Nzc5NjE1MzAwNTczNjA4Nw=='; // Replace with your Merchant Secret

    //     // Recreate the MD5 signature using the received data and your secret key
    //     $local_md5sig = strtoupper(
    //         md5(
    //             $merchant_id .
    //                 $order_id .
    //                 $payhere_amount .
    //                 $payhere_currency .
    //                 $status_code .
    //                 strtoupper(md5($merchant_secret))
    //         )
    //     );

    //     $log_data = [
    //         'local_md5sig' => $local_md5sig,
    //         'received_md5sig' => $md5sig,
    //         'merchant_id' => $merchant_id,
    //         'order_id' => $order_id,
    //         'payhere_amount' => $payhere_amount,
    //         'payhere_currency' => $payhere_currency,
    //         'status_code' => $status_code,
    //     ];
    //     file_put_contents('md5_signature_log.txt', json_encode($log_data) . PHP_EOL, FILE_APPEND);

    //     // Verify if the MD5 signature is correct and the payment status is success (status_code = 2)
    //     if ($local_md5sig === $md5sig && $status_code == 2) {
    //         // Prepare the data for updating the invoice status in the database

    //         // Call the model to update the invoice status based on the order_id
    //         $rowCount = $this->model->updateInvoiceStatus($order_id);

    //         // Check if the update was successful
    //         if ($rowCount > 0) {
    //             // Respond with a success message
    //             http_response_code(201);
    //             echo json_encode(['message' => 'Transaction invoice updated successfully']);
    //         } else {
    //             // If no rows were affected, it means the invoice was not found or updated
    //             http_response_code(500);
    //             echo json_encode(['error' => 'Invoice update failed']);
    //         }
    //     } else {
    //         // If the checksum or payment status doesn't match, return an error response
    //         http_response_code(400);
    //         echo json_encode(['error' => 'Invalid payment notification or payment failed']);
    //     }
    // }

    public function paymentNotify()
    {
        // Step 1: Retrieve the incoming payment notification data (x-www-form-urlencoded)
        $data = $_POST;

        // Debug: Log raw incoming data
        // file_put_contents('logs/payment_notify_log.txt', json_encode($data) . PHP_EOL, FILE_APPEND);

        // Step 2: Validate required fields
        if (!isset($data['merchant_id'], $data['order_id'], $data['payhere_amount'], $data['payhere_currency'], $data['status_code'], $data['md5sig'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Missing required fields']);
            return;
        }

        // Step 3: Retrieve and assign fields
        $merchant_id = $data['merchant_id'];
        $order_id = $data['order_id'];
        $payhere_amount = $data['payhere_amount'];
        $payhere_currency = $data['payhere_currency'];
        $status_code = $data['status_code'];
        $md5sig = $data['md5sig'];

        // Step 4: Your PayHere Merchant Secret
        $merchant_secret = 'NzA3NzA5OTA3MzExNDQwNTA0OTQyMDAyNjEyMDEyMzYzNDI1Mzcz'; // Replace with your Merchant Secret

        // Step 5: Recreate the MD5 signature using received data and your secret key
        $local_md5sig = strtoupper(
            md5(
                $merchant_id .
                    $order_id .
                    $payhere_amount .
                    $payhere_currency .
                    $status_code .
                    strtoupper(md5($merchant_secret))
            )
        );

        // Debug: Log signature comparison
        $log_data = [
            'local_md5sig' => $local_md5sig,
            'received_md5sig' => $md5sig,
            'status_code' => $status_code,
            'order_id' => $order_id,
            'payhere_amount' => $payhere_amount,
            'payhere_currency' => $payhere_currency,
        ];
        // file_put_contents('logs/md5_signature_log.txt', json_encode($log_data) . PHP_EOL, FILE_APPEND);

        // Step 6: Verify the MD5 signature and payment status
        if ($local_md5sig === $md5sig && $status_code == 2) {
            // Step 7: Update the invoice status
            $invoice_data = [
                'invoice_status' => 'Paid', // Mark the invoice as paid
            ];

            // Call the model to update the invoice status
            try {
                $rowCount = $this->model->updateInvoiceStatus($order_id, $invoice_data);

                // Debug: Log database update result
                // file_put_contents('logs/db_update_log.txt', "Order ID: $order_id, Rows Updated: $rowCount" . PHP_EOL, FILE_APPEND);

                // Check if the update was successful
                if ($rowCount > 0) {
                    // Respond with a success message
                    http_response_code(201);
                    echo json_encode(['message' => 'Transaction invoice updated successfully']);
                } else {
                    // If no rows were affected, it means the invoice was not found or updated
                    http_response_code(500);
                    echo json_encode(['error' => 'Invoice update failed']);
                }
            } catch (Exception $e) {
                // Debug: Log database errors
                // file_put_contents('logs/db_error_log.txt', $e->getMessage() . PHP_EOL, FILE_APPEND);

                // Respond with an internal server error
                http_response_code(500);
                echo json_encode(['error' => 'Internal server error during database operation']);
            }
        } else {
            // Step 8: Handle invalid checksum or payment failure
            http_response_code(400);
            echo json_encode(['error' => 'Invalid payment notification or payment failed']);

            // Debug: Log checksum mismatch or failure status
            // file_put_contents('logs/invalid_payment_log.txt', json_encode($log_data) . PHP_EOL, FILE_APPEND);
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

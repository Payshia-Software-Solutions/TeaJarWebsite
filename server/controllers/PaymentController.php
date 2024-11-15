<?php

require_once './models/Payment.php';

class PaymentController
{
    private $paymentModel;

    public function __construct()
    {
        $this->paymentModel = new PaymentModel('1227940', 'NzA3NzA5OTA3MzExNDQwNTA0OTQyMDAyNjEyMDEyMzYzNDI1Mzcz');
    }

    public function initiatePayment()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $formData = [
                'order_id' => $_POST['order_id'],
                'amount' => number_format($_POST['amount'], 2, '.', ''),
                'currency' => $_POST['currency'],
                'return_url' => $_POST['return_url'],
                'cancel_url' => $_POST['cancel_url'],
                'notify_url' => $_POST['notify_url'],
                'first_name' => $_POST['first_name'],
                'last_name' => $_POST['last_name'],
                'email' => $_POST['email'],
                'phone' => $_POST['phone'],
                'address' => $_POST['address'],
                'city' => $_POST['city'],
                'country' => $_POST['country']
            ];

            $preparedData = $this->paymentModel->prepareFormData($formData);
            $this->renderForm($preparedData);
        } else {
            echo 'Invalid Request';
        }
    }

    private function renderForm($data)
    {
        echo '<html><body onload="document.forms[0].submit();">';
        echo '<form id="paymentForm" method="post" action="https://sandbox.payhere.lk/pay/checkout">';
        foreach ($data as $key => $value) {
            echo '<input type="hidden" name="' . htmlspecialchars($key) . '" value="' . htmlspecialchars($value) . '">';
        }
        // Add a submit button (optional, as we're auto-submitting)
        echo '<input type="submit" value="Submit Payment" style="display:none;">';


        echo '</form>';
        // End the form

        // Submit the form automatically via JavaScript
        echo '<script type="text/javascript">
            document.getElementById("paymentForm").submit();
          </script>';
        echo "Please Wait...";
        echo '</body></html>';
    }
}

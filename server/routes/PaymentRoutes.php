<?php

require_once './controllers/PaymentController.php';  // Include the controller

// Instantiate the controller with PDO instance
$pdo = $GLOBALS['pdo'];
$paymentController = new PaymentController($pdo);

// Define payment-related routes
return [
    // Route to initiate payment and redirect to PayHere checkout
    'POST /payment/initiate-payment' => function () use ($paymentController) {
        $paymentController->initiatePayment();
    },

    // Route to handle payment notification callback from PayHere
    'GET /payment/success' => function () use ($paymentController) {
        $paymentController->paymentReturn();
    },

    // Route to handle payment notification callback from PayHere
    'POST /payment/notify' => function () use ($paymentController) {
        $paymentController->paymentNotify();
    },

    // Route to handle return after payment (success or failure)
    'GET /payment/return' => function () use ($paymentController) {
        $paymentController->paymentReturn();
    }
];

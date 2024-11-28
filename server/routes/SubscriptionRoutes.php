<?php
require_once 'controllers/SubscriptionController.php';

// Instantiate the controller
// Instantiate the controller
$pdo = $GLOBALS['pdo'];
$subscriptionController = new SubscriptionController($pdo);

// Parse request method and URI
$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');

// Route handling
switch ($requestMethod) {
    case 'POST':
        if ($requestUri === 'subscribe') {
            $subscriptionController->subscribeUser();
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Route not found']);
        }
        break;

    case 'GET':
        if ($requestUri === 'subscribers') {
            $subscriptionController->getSubscribers();
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Route not found']);
        }
        break;

    default:
        http_response_code(405); // Method Not Allowed
        echo json_encode(['error' => 'Method not allowed']);
}

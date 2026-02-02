<?php
require_once './controllers/WebContentController.php'; // Include the WebContentController

// Instantiate the controller
$pdo = $GLOBALS['pdo'];
$webContentController = new WebContentController($pdo); // Instantiate the WebContentController

// Define routes for web-content
return [
    'GET /web-content/' => function () use ($webContentController) {
        $webContentController->getAllRecords();
    },
    'GET /web-content/id/{id}/' => function ($id) use ($webContentController) {
        $webContentController->getRecordById($id);
    },
    'GET /web-content/key/{key}/' => function ($key) use ($webContentController) {
        $webContentController->getRecordByKey($key);
    },
    'POST /web-content/' => function () use ($webContentController) {
        $webContentController->createRecord();
    },
    'PUT /web-content/{id}/' => function ($id) use ($webContentController) {
        $webContentController->updateRecord($id);
    },
    'DELETE /web-content/{id}/' => function ($id) use ($webContentController) {
        $webContentController->deleteRecord($id);
    }
];

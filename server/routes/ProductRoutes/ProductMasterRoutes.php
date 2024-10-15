<?php

require_once './controllers/MasterProductController.php';

// Instantiate the controller
$pdo = $GLOBALS['pdo'];
$masterProductController = new MasterProductController($pdo);

// Define routes for master products
return [
    'GET /products/' => [$masterProductController, 'getAllRecords'],
    'GET /products/{product_id}/' => [$masterProductController, 'getRecordById'],
    'POST /products/' => [$masterProductController, 'createRecord'],
    'PUT /products/{product_id}/' => [$masterProductController, 'updateRecord'],
    'DELETE /products/{product_id}/' => [$masterProductController, 'deleteRecord']
];

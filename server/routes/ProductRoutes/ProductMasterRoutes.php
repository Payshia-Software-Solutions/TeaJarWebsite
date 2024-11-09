<?php

require_once './controllers/MasterProductController.php'; // Include the ProductController

// Instantiate the controller
$pdo = $GLOBALS['pdo'];
$productController = new ProductController($pdo); // Instantiate the ProductController

// Define routes for products
return [
    'GET /products/' => function () use ($productController) {
        $productController->getAllRecords();
    },
    'GET /products/{product_id}/' => function ($product_id) use ($productController) { // Pass product_id directly
        $productController->getRecordById($product_id); // Pass product_id to the method
    },
    'GET /products/get-by-slug/{slug}/' => function ($slug) use ($productController) { // Pass product_id directly
        $productController->getRecordBySlug($slug); // Pass product_id to the method
    },
    'POST /products/' => function () use ($productController) {
        $productController->createRecord();
    },
    'PUT /products/{product_id}/' => function ($product_id) use ($productController) {
        $productController->updateRecord($product_id); // Pass product_id directly
    },
    'DELETE /products/{product_id}/' => function ($product_id) use ($productController) {
        $productController->deleteRecord($product_id); // Pass product_id directly
    }
];

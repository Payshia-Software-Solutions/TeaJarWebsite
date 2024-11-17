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

    'GET /products/filter-by' => function () use ($productController) {
        $productController->getFilteredRecords();
    },
    'GET /products/{product_id}/' => function ($product_id) use ($productController) { // Pass product_id directly
        $productController->getRecordById($product_id); // Pass product_id to the method
    },
    'GET /products/get-by-slug/{slug}/' => function ($slug) use ($productController) { // Pass product_id directly
        $productController->getRecordBySlug($slug); // Pass product_slug to the method
    },
    'GET /products/get-by-department/{department}/' => function ($department) use ($productController) { // Pass product_id directly
        $productController->getRecordByDepartment($department); // Pass product_slug to the method
    },
    'GET /products/get-by-category/{category}/' => function ($category) use ($productController) { // Pass product_id directly
        $productController->getRecordByCategory($category); // Pass product_slug to the method
    },
    'GET /products/get-by-section/{section}/' => function ($section) use ($productController) { // Pass product_id directly
        $productController->getRecordBySection($section); // Pass product_slug to the method
    },
    'POST /products/' => function () use ($productController) {
        $productController->createRecord();
    },
    'PUT /products/{product_id}/' => function ($product_id) use ($productController) {
        $productController->updateRecord($product_id); // Pass product_id directly
    },
    'DELETE /products/{product_id}/' => function ($product_id) use ($productController) {
        $productController->deleteRecord($product_id); // Pass product_id directly
    },
    // New route for generating a slug if not present
    'POST /products/generate-slug/{product_id}/' => function ($product_id) use ($productController) {
        $productController->generateSlug($product_id); // Call method to create a slug
    }
];

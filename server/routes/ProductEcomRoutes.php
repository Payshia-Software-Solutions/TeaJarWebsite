<?php
require_once './controllers/ProductEcomValuesController.php'; // Include the ProductEcomValuesController

// Instantiate the controller
$pdo = $GLOBALS['pdo'];
$productEcomValuesController = new ProductEcomValuesController($pdo);

// Define routes for product e-commerce values
return [
    'GET /product-ecom-values/' => function () use ($productEcomValuesController) {
        $productEcomValuesController->getAllRecords();
    },
    'GET /product-ecom-values/{product_ecom_value_id}/' => function ($product_ecom_value_id) use ($productEcomValuesController) {
        $productEcomValuesController->getRecordById($product_ecom_value_id);
    },
    'GET /product-ecom-values/by-product/{product_ecom_value_id}/' => function ($product_ecom_value_id) use ($productEcomValuesController) {
        $productEcomValuesController->getRecordByProductId($product_ecom_value_id);
    },

    'POST /product-ecom-values/' => function () use ($productEcomValuesController) {
        $productEcomValuesController->createRecord();
    },
    'PUT /product-ecom-values/{product_ecom_value_id}/' => function ($product_ecom_value_id) use ($productEcomValuesController) {
        $productEcomValuesController->updateRecord($product_ecom_value_id);
    },

    'PUT /product-ecom-values/by-product/{product_ecom_value_id}/' => function ($product_ecom_value_id) use ($productEcomValuesController) {
        $productEcomValuesController->updateRecordProductId($product_ecom_value_id);
    },
    'DELETE /product-ecom-values/{product_ecom_value_id}/' => function ($product_ecom_value_id) use ($productEcomValuesController) {
        $productEcomValuesController->deleteRecord($product_ecom_value_id);
    }
];

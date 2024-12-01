<?php
require_once './models/ProductEcomValue.php'; // Include the ProductEcomValue model

class ProductEcomValuesController
{
    private $model;

    // Constructor to initialize the ProductEcomValue model
    public function __construct($pdo)
    {
        $this->model = new ProductEcomValue($pdo);
    }

    // Get all product e-commerce value records
    public function getAllRecords()
    {
        $records = $this->model->getAllProductEcomValues();
        echo json_encode($records);
    }

    // Get a single product e-commerce value record by ID
    public function getRecordById($id)
    {
        $record = $this->model->getProductEcomValueById($id);
        if ($record) {
            echo json_encode($record);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Product Ecom Value not found']);
        }
    }

    public function getRecordByProductId($id)
    {
        $record = $this->model->getProductEcomValueByProductId($id);
        if ($record) {
            echo json_encode($record);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Product Ecom Value not found']);
        }
    }

    // Create a new product e-commerce value record
    public function createRecord()
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if (
            $data && isset($data['gross_weight']) && isset($data['net_weight']) &&
            isset($data['tasting_notes']) && isset($data['ingredients']) &&
            isset($data['tea_grades']) && isset($data['caffain_level']) &&
            isset($data['breaw_temp']) && isset($data['usage_type']) &&
            isset($data['water_type']) && isset($data['water']) &&
            isset($data['brew_duration']) && isset($data['detailed_description']) &&
            isset($data['how_to_use']) && isset($data['created_by']) && isset($data['created_at'])
        ) {
            $this->model->createProductEcomValue($data);
            http_response_code(201);
            echo json_encode(['message' => 'Product Ecom Value created successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }

    // Update an existing product e-commerce value record
    public function updateRecord($product_ecom_value_id)
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if (
            $data && isset($data['gross_weight']) && isset($data['net_weight']) &&
            isset($data['tasting_notes']) && isset($data['ingredients']) &&
            isset($data['tea_grades']) && isset($data['caffain_level']) &&
            isset($data['breaw_temp']) && isset($data['usage_type']) &&
            isset($data['water_type']) && isset($data['water']) &&
            isset($data['brew_duration']) && isset($data['detailed_description']) &&
            isset($data['how_to_use']) && isset($data['created_by']) && isset($data['created_at'])
        ) {
            $this->model->updateProductEcomValue($product_ecom_value_id, $data);
            echo json_encode(['message' => 'Product Ecom Value updated successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }

    public function updateRecordProductId($product_ecom_value_id)
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if (
            $data && isset($data['gross_weight']) && isset($data['net_weight']) &&
            isset($data['tasting_notes']) && isset($data['ingredients']) &&
            isset($data['tea_grades']) && isset($data['caffain_level']) &&
            isset($data['breaw_temp']) && isset($data['usage_type']) &&
            isset($data['water_type']) && isset($data['water']) &&
            isset($data['brew_duration']) && isset($data['detailed_description']) &&
            isset($data['how_to_use']) && isset($data['created_by']) && isset($data['created_at'])
        ) {
            $this->model->updateRecordProductId($product_ecom_value_id, $data);
            echo json_encode(['message' => 'Product Ecom Value updated successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }

    // Delete a product e-commerce value record by ID
    public function deleteRecord($product_ecom_value_id)
    {
        $this->model->deleteProductEcomValue($product_ecom_value_id);
        echo json_encode(['message' => 'Product Ecom Value deleted successfully']);
    }
}

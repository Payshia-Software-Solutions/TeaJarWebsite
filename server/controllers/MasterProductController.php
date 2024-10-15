<?php
require_once './models/MasterProduct.php';

class MasterProductController
{
    private $model;

    public function __construct($pdo)
    {
        $this->model = new MasterProduct($pdo);
    }

    // Get all product records
    public function getAllRecords()
    {
        $records = $this->model->getAllProducts();
        echo json_encode($records);
    }

    // Get a single product record by ID
    public function getRecordById($product_id)
    {
        $record = $this->model->getProductById($product_id);
        if ($record) {
            echo json_encode($record);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Product not found']);
        }
    }

    // Create a new product record
    public function createRecord()
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if ($data && isset($data['product_code']) && isset($data['product_name']) && isset($data['display_name']) && isset($data['measurement']) && isset($data['cost_price']) && isset($data['selling_price']) && isset($data['active_status'])) {
            $data['created_at'] = date('Y-m-d H:i:s');
            $this->model->createProduct($data);
            http_response_code(201);
            echo json_encode(['message' => 'Product created successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }

    // Update an existing product record
    public function updateRecord($product_id)
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if ($data && isset($data['product_code']) && isset($data['product_name']) && isset($data['display_name']) && isset($data['measurement']) && isset($data['cost_price']) && isset($data['selling_price']) && isset($data['active_status'])) {
            $this->model->updateProduct($product_id, $data);
            echo json_encode(['message' => 'Product updated successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }

    // Delete a product record by ID
    public function deleteRecord($product_id)
    {
        $this->model->deleteProduct($product_id);
        echo json_encode(['message' => 'Product deleted successfully']);
    }
}

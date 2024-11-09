<?php

require_once './models/MasterProduct.php'; // Ensure the model file is named correctly

class ProductController {

    private $model;

    public function __construct($pdo) {
        $this->model = new Product($pdo);
    }

    // Get all product records
    public function getAllRecords() {
        $records = $this->model->getAllProducts();
        echo json_encode($records);
    }

    // Get a single product record by ID
    public function getRecordById($product_id) {
        $record = $this->model->getProductById($product_id);
        if ($record) {
            echo json_encode($record);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Product not found']);
        }
    }

    // Create a new product record
    public function createRecord() {
        $data = json_decode(file_get_contents("php://input"), true);
        
        // Validate required fields
        if ($data && isset($data['product_code']) && isset($data['product_name']) && 
            isset($data['display_name']) && isset($data['section_id']) && 
            isset($data['department_id']) && isset($data['category_id']) && 
            isset($data['measurement']) && isset($data['reorder_level']) && 
            isset($data['lead_days']) && isset($data['cost_price']) && 
            isset($data['selling_price']) && isset($data['minimum_price']) && 
            isset($data['wholesale_price']) && isset($data['item_type']) && 
            isset($data['item_location']) && isset($data['image_path']) && 
            isset($data['created_by'])) {

            $data['created_at'] = date('Y-m-d H:i:s'); // Set created_at timestamp
            $this->model->createProduct($data);
            http_response_code(201);
            echo json_encode(['message' => 'Product created successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }

    // Update an existing product record
    public function updateRecord($product_id) {
        $data = json_decode(file_get_contents("php://input"), true);

        // Validate required fields
        if ($data && isset($data['product_code']) && isset($data['product_name']) && 
            isset($data['display_name']) && isset($data['section_id']) && 
            isset($data['department_id']) && isset($data['category_id']) && 
            isset($data['measurement']) && isset($data['reorder_level']) && 
            isset($data['lead_days']) && isset($data['cost_price']) && 
            isset($data['selling_price']) && isset($data['minimum_price']) && 
            isset($data['wholesale_price']) && isset($data['item_type']) && 
            isset($data['item_location']) && isset($data['image_path']) && 
            isset($data['created_by'])) {

            $this->model->updateProduct($product_id, $data);
            echo json_encode(['message' => 'Product updated successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }

    // Delete a product record by ID
    public function deleteRecord($product_id) {
        $this->model->deleteProduct($product_id);
        echo json_encode(['message' => 'Product deleted successfully']);
    }
}
?>

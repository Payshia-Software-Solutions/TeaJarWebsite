<?php
require_once './models/WebContent.php'; // Include the WebContent model

class WebContentController
{
    private $model;

    // Constructor to initialize the WebContent model
    public function __construct($pdo)
    {
        $this->model = new WebContent($pdo);
    }

    // Get all web content records
    public function getAllRecords()
    {
        $records = $this->model->getAll();  // Fetch all records
        echo json_encode($records);
    }

    // Get a single record by ID
    public function getRecordById($id)
    {
        $record = $this->model->getById($id);  // Fetch by ID
        if ($record) {
            echo json_encode($record);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Record not found']);
        }
    }

    // Get a single record by key
    public function getRecordByKey($key)
    {
        $record = $this->model->getByKey($key);  // Fetch by key
        if ($record) {
            echo json_encode($record);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Record not found']);
        }
    }

    // Create a new web content record
    public function createRecord()
    {
        $data = json_decode(file_get_contents("php://input"), true);

        if (
            $data && isset($data['key']) && isset($data['value']) &&
            isset($data['created_by']) && isset($data['created_at']) &&
            isset($data['is_active'])
        ) {
            $this->model->create($data);
            http_response_code(201);
            echo json_encode(['message' => 'Web content created successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }

    // Update an existing web content record
    public function updateRecord($id)
    {
        $data = json_decode(file_get_contents("php://input"), true);

        if (
            $data && isset($data['key']) && isset($data['value']) &&
            isset($data['updated_at']) && isset($data['is_active']) &&
            isset($data['created_by'])
        ) {
            $this->model->update($id, $data);
            echo json_encode(['message' => 'Web content updated successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }

    // Delete a web content record by ID
    public function deleteRecord($id)
    {
        $this->model->delete($id);
        echo json_encode(['message' => 'Web content deleted successfully']);
    }
}

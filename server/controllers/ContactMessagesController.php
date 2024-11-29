<?php
require_once './models/ContactMessage.php';

class ContactMessagesController
{
    private $model;

    public function __construct($pdo)
    {
        $this->model = new ContactMessage($pdo);
    }

    // Handle creating a new message
    public function createRecord()
    {
        $data = json_decode(file_get_contents("php://input"), true);

        if (
            isset($data['full_name'], $data['email'], $data['message'], $data['policy']) &&
            filter_var($data['email'], FILTER_VALIDATE_EMAIL) &&
            $data['policy'] === true
        ) {
            $this->model->createMessage($data);
            http_response_code(201);
            echo json_encode(['message' => 'Contact message submitted successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }

    // Get all messages
    public function getAllRecords()
    {
        $messages = $this->model->getAllMessages();
        echo json_encode($messages);
    }

    // Get a message by ID
    public function getRecordById($id)
    {
        $message = $this->model->getMessageById($id);
        if ($message) {
            echo json_encode($message);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Message not found']);
        }
    }

    // Delete a message by ID
    public function deleteRecord($id)
    {
        $deleted = $this->model->deleteMessage($id);
        if ($deleted) {
            echo json_encode(['message' => 'Contact message deleted successfully']);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Message not found']);
        }
    }
}

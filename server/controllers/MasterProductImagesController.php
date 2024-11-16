<?php
require_once './models/MasterProductImages.php';

class MasterProductImagesController
{
    private $model;

    public function __construct($pdo)
    {
        $this->model = new MasterProductImages($pdo);
    }

    // Get all images
    public function getAllImages()
    {
        $images = $this->model->getAllImages();
        echo json_encode($images);
    }

    // Get a single image by ID
    public function getImageById($id)
    {
        $image = $this->model->getImageById($id);
        if ($image) {
            echo json_encode($image);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Image not found']);
        }
    }

    public function getImageByProductId($id)
    {
        $image = $this->model->getImageByProductId($id);
        if ($image) {
            echo json_encode($image);
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Image not found']);
        }
    }

    // Create a new product image
    public function createImage()
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if ($data && isset($data['product_id'], $data['image_path'], $data['is_active'], $data['created_by'], $data['created_at'])) {
            $this->model->createImage($data);
            http_response_code(201);
            echo json_encode(['message' => 'Image created successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }

    // Update an existing product image
    public function updateImage($id)
    {
        $data = json_decode(file_get_contents("php://input"), true);
        if ($data && isset($data['product_id'], $data['image_path'], $data['is_active'], $data['created_by'], $data['created_at'])) {
            $this->model->updateImage($id, $data);
            echo json_encode(['message' => 'Image updated successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input']);
        }
    }

    // Delete a product image
    public function deleteImage($id)
    {
        $this->model->deleteImage($id);
        echo json_encode(['message' => 'Image deleted successfully']);
    }
}

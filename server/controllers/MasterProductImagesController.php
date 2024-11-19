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
        header('Content-Type: application/json');

        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['image'])) {
            if ($_FILES['image']['error'] !== UPLOAD_ERR_OK) {
                http_response_code(400);
                echo json_encode(['error' => 'File upload error: ' . $_FILES['image']['error']]);
                return;
            }

            $productId = filter_input(INPUT_POST, 'product_id', FILTER_SANITIZE_NUMBER_INT);
            $isActive = filter_input(INPUT_POST, 'is_active', FILTER_VALIDATE_BOOLEAN);
            $createdBy = filter_input(INPUT_POST, 'created_by', FILTER_SANITIZE_STRING);
            $createdAt = filter_input(INPUT_POST, 'created_at', FILTER_SANITIZE_STRING);
            $original_filename = basename($_POST['original_filename']);

            if (!$productId || !$createdBy || !$createdAt || !$original_filename) {
                http_response_code(400);
                echo json_encode(['error' => 'Missing required fields']);
                return;
            }

            $uploadDir = './uploads/images/product-images/' . $productId . '/';
            if (!file_exists($uploadDir) && !mkdir($uploadDir, 0755, true)) {
                http_response_code(500);
                echo json_encode(['error' => 'Failed to create upload directory']);
                return;
            }

            $targetPath = $uploadDir . $original_filename;

            if (move_uploaded_file($_FILES['image']['tmp_name'], $targetPath)) {
                $this->model->createImage([
                    'product_id' => $productId,
                    'image_path' => $original_filename,
                    'is_active' => $isActive,
                    'created_by' => $createdBy,
                    'created_at' => $createdAt,
                ]);

                http_response_code(201);
                echo json_encode(['message' => 'Image created successfully']);
            } else {
                http_response_code(500);
                echo json_encode(['error' => 'Failed to save the image file']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid request or missing fields']);
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

    // Change the 'is_active' status of a product image
    public function changeImageStatus($id)
    {
        // Get data from the request body (assuming 'is_active' is passed)
        $data = json_decode(file_get_contents("php://input"), true);

        if ($data && isset($data['is_active'])) {
            // Update only the 'is_active' field
            $this->model->updateImageStatus($id, $data['is_active']);

            echo json_encode(['message' => 'Image status updated successfully']);
        } else {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid input. "is_active" is required.']);
        }
    }


    // Delete a product image
    public function deleteImage($id)
    {
        $this->model->deleteImage($id);
        echo json_encode(['message' => 'Image deleted successfully']);
    }
}

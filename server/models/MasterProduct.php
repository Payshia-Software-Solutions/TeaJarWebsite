<?php

class Product
{
    private $pdo;

    // Constructor to initialize the PDO connection
    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    // Fetch all products
    public function getAllProducts()
    {
        $stmt = $this->pdo->prepare("SELECT * FROM `master_product` ORDER BY `product_id` ASC");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getFilteredProducts($category = null, $department = null, $minPrice = null, $maxPrice = null, $sortBy = null)
    {
        // Start building the query
        $query = "SELECT * FROM `master_product` WHERE 1=1"; // Default to true for flexible filters

        // Add filters dynamically based on the parameters
        if ($category) {
            $query .= " OR `category_id` = :category";
        }
        if ($department) {
            $query .= " OR `department_id` = :department";
        }
        if ($minPrice) {
            $query .= " OR `selling_price` >= :minPrice";
        }
        if ($maxPrice) {
            $query .= " OR `selling_price` <= :maxPrice";
        }

        // Add sorting logic based on the sort parameter
        if ($sortBy) {
            switch ($sortBy) {
                case 'low-to-high':
                    $query .= " ORDER BY `selling_price` ASC";
                    break;
                case 'high-to-low':
                    $query .= " ORDER BY `selling_price` DESC";
                    break;
                case 'newest':
                    $query .= " ORDER BY `created_at` DESC";
                    break;
                case 'oldest':
                    $query .= " ORDER BY `created_at` ASC";
                    break;
                default:
                    // Default sorting, e.g., by product ID
                    $query .= " ORDER BY `product_id` ASC";
                    break;
            }
        } else {
            // Default sorting by product ID if no sorting parameter
            $query .= " ORDER BY `product_id` ASC";
        }

        // Prepare the statement
        $stmt = $this->pdo->prepare($query);

        // Bind parameters if they are provided
        if ($category) $stmt->bindParam(':category', $category, PDO::PARAM_INT);
        if ($department) $stmt->bindParam(':department', $department, PDO::PARAM_INT);
        if ($minPrice) $stmt->bindParam(':minPrice', $minPrice, PDO::PARAM_INT);
        if ($maxPrice) $stmt->bindParam(':maxPrice', $maxPrice, PDO::PARAM_INT);

        // Execute the query
        $stmt->execute();

        // Fetch and return the filtered records
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


    // Fetch a single product by ID
    public function getProductById($id)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM `master_product` WHERE `product_id` = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Fetch a single product by ID
    public function getRecordBySlug($slug)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM `master_product` WHERE `slug` = ?");
        $stmt->execute([$slug]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getRecordBySection($section)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM `master_product` WHERE `section_id` = ?");
        $stmt->execute([$section]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Fetch a single product by ID
    public function getRecordByDepartment($department)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM `master_product` WHERE `department_id` = ?");
        $stmt->execute([$department]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getRecordByCategory($category)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM `master_product` WHERE `category_id` = ?");
        $stmt->execute([$category]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Create a new product
    public function createProduct($data)
    {
        $stmt = $this->pdo->prepare("INSERT INTO `master_product` (
            `product_code`, `product_name`, `display_name`, `name_si`, `name_ti`, 
            `print_name`, `section_id`, `department_id`, `category_id`, `brand_id`, 
            `measurement`, `reorder_level`, `lead_days`, `cost_price`, `selling_price`, 
            `minimum_price`, `wholesale_price`, `price_2`, `item_type`, `item_location`, 
            `image_path`, `created_by`, `created_at`, `active_status`, `generic_id`, 
            `supplier_list`, `size_id`, `color_id`, `product_description`, `recipe_type`, 
            `barcode`, `expiry_good`, `location_list`, `opening_stock`
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");


        $stmt->execute([
            $data['product_code'],
            $data['product_name'],
            $data['display_name'],
            $data['name_si'],
            $data['name_ti'],
            $data['print_name'],
            $data['section_id'],
            $data['department_id'],
            $data['category_id'],
            $data['brand_id'],
            $data['measurement'],
            $data['reorder_level'],
            $data['lead_days'],
            $data['cost_price'],
            $data['selling_price'],
            $data['minimum_price'],
            $data['wholesale_price'],
            $data['price_2'],
            $data['item_type'],
            $data['item_location'],
            $data['image_path'],
            $data['created_by'],
            $data['created_at'],
            $data['active_status'],
            $data['generic_id'],
            $data['supplier_list'],
            $data['size_id'],
            $data['color_id'],
            $data['product_description'],
            $data['recipe_type'],
            $data['barcode'],
            $data['expiry_good'],
            $data['location_list'],
            $data['opening_stock']
        ]);
        return $this->pdo->lastInsertId(); // Return the ID of the newly created product
    }

    // Update an existing product
    public function updateProduct($id, $data)
    {
        $stmt = $this->pdo->prepare("UPDATE `master_product` SET 
            `product_code` = ?, 
            `product_name` = ?, 
            `display_name` = ?, 
            `name_si` = ?, 
            `name_ti` = ?, 
            `print_name` = ?, 
            `section_id` = ?, 
            `department_id` = ?, 
            `category_id` = ?, 
            `brand_id` = ?, 
            `measurement` = ?, 
            `reorder_level` = ?, 
            `lead_days` = ?, 
            `cost_price` = ?, 
            `selling_price` = ?, 
            `minimum_price` = ?, 
            `wholesale_price` = ?, 
            `price_2` = ?, 
            `item_type` = ?, 
            `item_location` = ?, 
            `image_path` = ?, 
            `created_by` = ?, 
            `created_at` = ?, 
            `active_status` = ?, 
            `generic_id` = ?, 
            `supplier_list` = ?, 
            `size_id` = ?, 
            `color_id` = ?, 
            `product_description` = ?, 
            `recipe_type` = ?, 
            `barcode` = ?, 
            `expiry_good` = ?, 
            `location_list` = ?, 
            `opening_stock` = ? 
            WHERE `product_id` = ?");

        $stmt->execute([
            $data['product_code'],
            $data['product_name'],
            $data['display_name'],
            $data['name_si'],
            $data['name_ti'],
            $data['print_name'],
            $data['section_id'],
            $data['department_id'],
            $data['category_id'],
            $data['brand_id'],
            $data['measurement'],
            $data['reorder_level'],
            $data['lead_days'],
            $data['cost_price'],
            $data['selling_price'],
            $data['minimum_price'],
            $data['wholesale_price'],
            $data['price_2'],
            $data['item_type'],
            $data['item_location'],
            $data['image_path'],
            $data['created_by'],
            $data['created_at'],
            $data['active_status'],
            $data['generic_id'],
            $data['supplier_list'],
            $data['size_id'],
            $data['color_id'],
            $data['product_description'],
            $data['recipe_type'],
            $data['barcode'],
            $data['expiry_good'],
            $data['location_list'],
            $data['opening_stock'],
            $id
        ]);
        return $stmt->rowCount(); // Returns the number of rows affected
    }

    // Delete a product by ID
    public function deleteProduct($id)
    {
        $stmt = $this->pdo->prepare("DELETE FROM `master_product` WHERE `product_id` = ?");
        $stmt->execute([$id]);
        return $stmt->rowCount(); // Returns the number of rows deleted
    }

    // Function to create a unique slug for a product if not available
    public function createSlugIfNotExists($id)
    {
        // Fetch the product to check if a slug exists
        $product = $this->getProductById($id);
        if ($product && empty($product['slug'])) {
            $slug = $this->generateSlug($product['product_name']);

            // Ensure the slug is unique by appending an index if necessary
            $slug = $this->ensureUniqueSlug($slug);

            // Update the product with the generated slug
            $stmt = $this->pdo->prepare("UPDATE `master_product` SET `slug` = ? WHERE `product_id` = ?");
            $stmt->execute([$slug, $id]);

            return $slug; // Return the generated slug
        }

        return $product ? $product['slug'] : null; // Return existing slug or null if product not found
    }

    // Generate a slug from the product name
    private function generateSlug($name)
    {
        // Convert name to lowercase, replace spaces with hyphens, and remove special characters
        return preg_replace('/[^a-z0-9-]+/', '', strtolower(str_replace(' ', '-', $name)));
    }

    // Ensure the slug is unique
    private function ensureUniqueSlug($slug)
    {
        $originalSlug = $slug;
        $counter = 1;

        while ($this->isSlugExists($slug)) {
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }

        return $slug;
    }

    // Check if the slug already exists in the database
    private function isSlugExists($slug)
    {
        $stmt = $this->pdo->prepare("SELECT COUNT(*) FROM `master_product` WHERE `slug` = ?");
        $stmt->execute([$slug]);
        return $stmt->fetchColumn() > 0;
    }
}

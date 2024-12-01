<?php
class ProductEcomValue
{
    private $pdo;

    // Constructor to initialize the PDO connection
    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    // Fetch all product e-commerce values
    public function getAllProductEcomValues()
    {
        $stmt = $this->pdo->prepare("SELECT *  FROM `master_products_ecom_values`");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Fetch a single product e-commerce value by ID
    public function getProductEcomValueById($id)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM `master_products_ecom_values` WHERE `id` = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Fetch a single product e-commerce value by ID
    public function getProductEcomValueByProductId($id)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM `master_products_ecom_values` WHERE `product_id` = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Create a new product e-commerce value
    public function createProductEcomValue($data)
    {
        $stmt = $this->pdo->prepare("INSERT INTO `master_products_ecom_values` 
                                     (`product_id`, `gross_weight`, `net_weight`, `tasting_notes`, `ingredients`, `tea_grades`, 
                                      `caffain_level`, `breaw_temp`, `usage_type`, `water_type`, `water`, 
                                      `brew_duration`, `detailed_description`, `how_to_use`, `created_by`, `created_at`,`product_type`, `serving_count`, `per_pack_gram`, `tb_count`) 
                                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([
            $data['product_id'],
            $data['gross_weight'],
            $data['net_weight'],
            $data['tasting_notes'],
            $data['ingredients'],
            $data['tea_grades'],
            $data['caffain_level'],
            $data['breaw_temp'],
            $data['usage_type'],
            $data['water_type'],
            $data['water'],
            $data['brew_duration'],
            $data['detailed_description'],
            $data['how_to_use'],
            $data['created_by'],
            $data['created_at'],
            $data['product_type'],
            $data['serving_count'],
            $data['per_pack_gram'],
            $data['tb_count']
        ]);
        return $this->pdo->lastInsertId();
    }

    // Update an existing product e-commerce value
    public function updateProductEcomValue($id, $data)
    {
        $stmt = $this->pdo->prepare("UPDATE `master_products_ecom_values` SET 
                                    `product_id` = ?
                                     `gross_weight` = ?, 
                                     `net_weight` = ?, 
                                     `tasting_notes` = ?, 
                                     `ingredients` = ?, 
                                     `tea_grades` = ?, 
                                     `caffain_level` = ?, 
                                     `breaw_temp` = ?, 
                                     `usage_type` = ?, 
                                     `water_type` = ?, 
                                     `water` = ?, 
                                     `brew_duration` = ?, 
                                     `detailed_description` = ?, 
                                     `how_to_use` = ?, 
                                     `created_by` = ?, 
                                     `created_at` = ?, `product_type` = ?, `serving_count` = ?, `per_pack_gram` = ?, `tb_count` = ?
                                     WHERE `id` = ?");
        $stmt->execute([
            $data['product_id'],
            $data['gross_weight'],
            $data['net_weight'],
            $data['tasting_notes'],
            $data['ingredients'],
            $data['tea_grades'],
            $data['caffain_level'],
            $data['breaw_temp'],
            $data['usage_type'],
            $data['water_type'],
            $data['water'],
            $data['brew_duration'],
            $data['detailed_description'],
            $data['how_to_use'],
            $data['created_by'],
            $data['created_at'],
            $data['product_type'],
            $data['serving_count'],
            $data['per_pack_gram'],
            $data['tb_count'],
            $id
        ]);
        return $stmt->rowCount();
    }

    public function updateRecordProductId($id, $data)
    {
        $stmt = $this->pdo->prepare("UPDATE `master_products_ecom_values` SET 
                                     `gross_weight` = ?, 
                                     `net_weight` = ?, 
                                     `tasting_notes` = ?, 
                                     `ingredients` = ?, 
                                     `tea_grades` = ?, 
                                     `caffain_level` = ?, 
                                     `breaw_temp` = ?, 
                                     `usage_type` = ?, 
                                     `water_type` = ?, 
                                     `water` = ?, 
                                     `brew_duration` = ?, 
                                     `detailed_description` = ?, 
                                     `how_to_use` = ?, 
                                     `created_by` = ?, 
                                     `created_at` = ?,
                                     `product_type` = ?, `serving_count` = ?, `per_pack_gram` = ?, `tb_count` = ?
                                     WHERE `product_id` = ?");
        $stmt->execute([
            $data['gross_weight'],
            $data['net_weight'],
            $data['tasting_notes'],
            $data['ingredients'],
            $data['tea_grades'],
            $data['caffain_level'],
            $data['breaw_temp'],
            $data['usage_type'],
            $data['water_type'],
            $data['water'],
            $data['brew_duration'],
            $data['detailed_description'],
            $data['how_to_use'],
            $data['created_by'],
            $data['created_at'],
            $data['product_type'],
            $data['serving_count'],
            $data['per_pack_gram'],
            $data['tb_count'],
            $id
        ]);
        return $stmt->rowCount();
    }


    // Delete a product e-commerce value by ID
    public function deleteProductEcomValue($id)
    {
        $stmt = $this->pdo->prepare("DELETE FROM `master_products_ecom_values` WHERE `id` = ?");
        $stmt->execute([$id]);
        return $stmt->rowCount();
    }
}

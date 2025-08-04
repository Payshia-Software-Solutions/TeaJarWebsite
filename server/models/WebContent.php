<?php
class WebContent
{
    private $pdo;

    // Constructor to initialize the PDO connection
    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    // Fetch all web content entries
    public function getAll()
    {
        $stmt = $this->pdo->prepare("SELECT * FROM `web-content`");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Fetch a single entry by ID
    public function getById($id)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM `web-content` WHERE `id` = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Fetch a single entry by key
    public function getByKey($key)
    {
        $stmt = $this->pdo->prepare("SELECT * FROM `web-content` WHERE `key` = ?");
        $stmt->execute([$key]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Create new web content
    public function create($data)
    {
        $stmt = $this->pdo->prepare("INSERT INTO `web-content` (`key`, `value`, `created_by`, `created_at`, `is_active`)
                                     VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([
            $data['key'],
            $data['value'],
            $data['created_by'],
            $data['created_at'],
            $data['is_active']
        ]);
        return $this->pdo->lastInsertId();
    }

    // Update existing content by ID
    public function update($id, $data)
    {
        $stmt = $this->pdo->prepare("UPDATE `web-content` SET 
                                     `key` = ?, 
                                     `value` = ?, 
                                     `updated_at` = ?, 
                                     `is_active` = ?,
                                     `created_by` = ? 
                                     WHERE `id` = ?");
        $stmt->execute([
            $data['key'],
            $data['value'],
            $data['updated_at'],
            $data['is_active'],
            $data['created_by'],
            $id
        ]);
        return $stmt->rowCount();
    }

    // Delete web content by ID
    public function delete($id)
    {
        $stmt = $this->pdo->prepare("DELETE FROM `web-content` WHERE `id` = ?");
        $stmt->execute([$id]);
        return $stmt->rowCount();
    }
}

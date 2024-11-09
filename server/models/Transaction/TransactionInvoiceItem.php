<?php

class TransactionInvoiceItem {
    private $pdo;

    // Constructor to initialize the PDO connection
    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Fetch all transaction invoice items
    public function getAllItems() {
        $stmt = $this->pdo->prepare("SELECT * FROM `transaction_invoice_items` ORDER BY `id` ASC");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Fetch a single transaction invoice item by ID
    public function getItemById($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM `transaction_invoice_items` WHERE `id` = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Create a new transaction invoice item
    public function createItem($data) {
        $stmt = $this->pdo->prepare("INSERT INTO `transaction_invoice_items` (
            `user_id`, `product_id`, `item_price`, `item_discount`, `quantity`, 
            `added_date`, `is_active`, `customer_id`, `hold_status`, `table_id`, 
            `invoice_number`, `cost_price`, `printed_status`, `item_remark`
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        
        $stmt->execute([
            $data['user_id'],
            $data['product_id'],
            $data['item_price'],
            $data['item_discount'],
            $data['quantity'],
            $data['added_date'],
            $data['is_active'],
            $data['customer_id'],
            $data['hold_status'],
            $data['table_id'],
            $data['invoice_number'],
            $data['cost_price'],
            $data['printed_status'],
            $data['item_remark']
        ]);
        return $this->pdo->lastInsertId(); // Return the ID of the newly created item
    }

    // Update an existing transaction invoice item
    public function updateItem($id, $data) {
        $stmt = $this->pdo->prepare("UPDATE `transaction_invoice_items` SET 
            `user_id` = ?, 
            `product_id` = ?, 
            `item_price` = ?, 
            `item_discount` = ?, 
            `quantity` = ?, 
            `added_date` = ?, 
            `is_active` = ?, 
            `customer_id` = ?, 
            `hold_status` = ?, 
            `table_id` = ?, 
            `invoice_number` = ?, 
            `cost_price` = ?, 
            `printed_status` = ?, 
            `item_remark` = ? 
            WHERE `id` = ?");

        $stmt->execute([
            $data['user_id'],
            $data['product_id'],
            $data['item_price'],
            $data['item_discount'],
            $data['quantity'],
            $data['added_date'],
            $data['is_active'],
            $data['customer_id'],
            $data['hold_status'],
            $data['table_id'],
            $data['invoice_number'],
            $data['cost_price'],
            $data['printed_status'],
            $data['item_remark'],
            $id
        ]);
        return $stmt->rowCount(); // Returns the number of rows affected
    }

    // Delete a transaction invoice item by ID
    public function deleteItem($id) {
        $stmt = $this->pdo->prepare("DELETE FROM `transaction_invoice_items` WHERE `id` = ?");
        $stmt->execute([$id]);
        return $stmt->rowCount(); // Returns the number of rows deleted
    }
}
?>

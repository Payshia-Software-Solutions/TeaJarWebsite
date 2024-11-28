<?php
class SubscriptionModel
{
    private $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }


    // Create a new subscription record
    public function createSubscription($data)
    {
        $stmt = $this->pdo->prepare("
            INSERT INTO subscriptions (name, email) 
            VALUES (?, ?)
        ");
        return $stmt->execute([$data['name'], $data['email']]);
    }

    // Retrieve all subscribers
    public function getAllSubscribers()
    {
        $stmt = $this->pdo->query("SELECT id, name, email, created_at FROM subscriptions");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

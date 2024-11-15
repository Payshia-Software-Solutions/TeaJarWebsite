"use client";
import axios from "axios";

export default function Payment() {
  const handlePayment = async () => {
    const paymentDetails = {
      order_id: "12345",
      items: "Test Item",
      currency: "LKR",
      amount: "1000",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone: "0771234567",
      address: "No.1, Main Street",
      city: "Colombo",
      country: "Sri Lanka",
      return_url: "http://localhost:3000/return",
      cancel_url: "http://localhost:3000/cancel",
      notify_url: "https://kduserver.payshia.com/payment/notify-url",
    };

    try {
      const { data } = await axios.post(
        "https://kduserver.payshia.com/payment/initiate-payment",
        paymentDetails,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      const newWindow = window.open();
      newWindow.document.write(data); // Render the form and redirect
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };

  return <button onClick={handlePayment}>Pay Now</button>;
}

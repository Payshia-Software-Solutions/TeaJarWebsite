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
      return_url: "https://kduserver.payshia.com/payment/return",
      cancel_url: "https://kduserver.payshia.com/payment/cancel",
      notify_url: "https://kduserver.payshia.com/payment/notify",
    };

    try {
      const { data } = await axios.post(
        "http://localhost/TeaJarWebsite/server/payment/initiate-payment",
        paymentDetails,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      // Assuming the server returns an HTML form
      document.open(); // Clear the current document
      document.write(data); // Write the new content (e.g., auto-submitting form)
      document.close(); // Complete the document loading
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };

  return <button onClick={handlePayment}>Pay Now</button>;
}

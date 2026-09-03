// components/Checkout.js
import React from "react";

const Checkout = () => {
  const handlePayment = async () => {
    const paymentDetails = {
      sandbox: true, // Set to false for production
      merchant_id: process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID,
      return_url: "http://travel-admin.payshia.com/api/payment-success",
      cancel_url: "http://travel-admin.payshia.com/api/payment-cancel",
      notify_url: "http://travel-admin.payshia.com/api/payhere-notify",
      order_id: "ITEM12345",
      items: "Sample Item",
      amount: "1000.00",
      currency: "LKR",
      first_name: "John",
      last_name: "Doe",
      email: "johndoe@gmail.com",
      phone: "0771234567",
      address: "No. 1, Galle Road",
      city: "Colombo",
      country: "Sri Lanka",
    };

    window.payhere.startPayment(paymentDetails);
    console.log(paymentDetails);
  };

  return (
    <button className="btn btn-primary" onClick={handlePayment}>
      Pay with PayHere
    </button>
  );
};

export default Checkout;

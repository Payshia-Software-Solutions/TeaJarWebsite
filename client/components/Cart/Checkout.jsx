// components/Checkout.js
"use client";
import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    paymentMethod: "COD",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    // console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Account Details */}
        <div>
          <h3 className="text-lg font-medium mb-4">Account Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded-md w-full"
              />
            </div>
          </div>
        </div>

        {/* Shipping Details */}
        <div>
          <h3 className="text-lg font-medium mb-4">Shipping Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="address" className="block mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="city" className="block mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="state" className="block mb-2">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded-md w-full"
              />
            </div>
            <div>
              <label htmlFor="zip" className="block mb-2">
                Zip
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded-md w-full"
              />
            </div>
          </div>
        </div>

        {/* Billing Details */}
        <div>
          <h3 className="text-lg font-medium mb-4">Billing Details</h3>
          {/* Add billing details form fields */}
        </div>

        {/* Delivery Details */}
        <div>
          <h3 className="text-lg font-medium mb-4">Delivery Details</h3>
          {/* Add delivery details options */}
        </div>

        {/* Payment Details */}
        <div>
          <h3 className="text-lg font-medium mb-4">Payment Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="paymentMethod" className="block mb-2">
                Payment Method
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="border px-3 py-2 rounded-md w-full"
              >
                <option value="COD">Cash on Delivery</option>
                <option value="PAYPAL">PayPal</option>
                <option value="CARD">Credit/Debit Card</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;

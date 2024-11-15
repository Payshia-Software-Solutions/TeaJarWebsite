"use client";
import React, { useState, useEffect } from "react";

const OrderSummary = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      {/* Product Item */}
      {cart.map((item) => (
        <div className="flex items-start mb-4">
          <img
            src={`https://kdu-admin.payshia.com/pos-system/assets/images/products/${item.id}/${item.imgUrl}`}
            alt={item.name}
            className="w-16 h-16 object-cover rounded-xl"
          />
          <div className="ml-4 flex-1">
            <h4 className="font-medium text-sm">{item.productName}</h4>
            <p className="text-sm mt-1">
              LKR {item.price} x {item.quantity}
            </p>
          </div>
          <span className="text-xs flex items-center justify-center">
            LKR {(item.quantity * item.price).toFixed(2)}
          </span>
        </div>
      ))}
      {/* Discount Code Input */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Discount code or gift card"
          className="w-full p-2 text-black rounded-l-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-r-md font-semibold">
          Apply
        </button>
      </div>

      {/* Subtotal and Shipping */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rs. {totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Rs 372.00</span>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-gray-700 mt-4 pt-4">
        <div className="flex justify-between items-center font-semibold text-lg">
          <span className="text-gray-400">LKR</span>
          <span>Rs 3,922.00</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

// Updated MainCart component
"use client";
import React, { useState, useEffect } from "react";
import MainCartCard from "@/components/Cart/MainCartCard";
import "@/app/globals.css";

function MainCart() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
    calculateSubtotal(savedCart);
  }, []);

  const calculateSubtotal = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(total.toFixed(2));
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    calculateSubtotal(updatedCartItems);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    calculateSubtotal(updatedCartItems);
  };

  return (
    <div className="p-6  min-h-screen text-black">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items Section */}
        <div className="flex-1  bg-gray-100 bg-opacity-10 p-5 rounded-lg max-h-[90vh] overflow-y-auto scrollbar-none">
          <h2 className="text-xl sm:text-2xl font-semibold mb-5">
            Cart - {cartItems.length} items
          </h2>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <MainCartCard
                key={index}
                ProductName={item.ProductName}
                price={item.price * item.quantity}
                quantity={item.quantity}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(index, newQuantity)
                }
                onRemove={() => handleRemoveItem(index)}
              />
            ))
          ) : (
            <p className="text-center ">Your cart is empty.</p>
          )}
        </div>

        {/* Summary Section */}
        <div className="lg:w-1/3 h-1/3 bg-gray-100 bg-opacity-5 p-5 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-5">Summary</h2>
          <div className="flex justify-between font-semibold text-lg mt-4">
            <p>Total amount (including VAT):</p>
            <p>Rs {subtotal}</p>
          </div>
          <button className="w-full mt-4 py-2 bg-[#007b84] rounded  text-white transition-colors">
            GO TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainCart;

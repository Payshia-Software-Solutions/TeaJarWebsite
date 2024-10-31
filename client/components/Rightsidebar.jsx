"use client";
import React, { useState, useEffect } from "react";
import SideBarCard from "@/components/Common/SideBarCard";

function Rightsidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
    calculateSubtotal(savedCart);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    calculateSubtotal(updatedCartItems);
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    calculateSubtotal(updatedCartItems);
  };
 // Total calculate
  const calculateSubtotal = (items) => {
    const total = items.reduce((sum, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity) || 0;
      return sum + price * quantity;
    }, 0);
    setSubtotal(total.toFixed(2));
  };

  if (!isSidebarOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-screen bg-white shadow-lg w-84 p-4 mt-12">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">
          Your Cart ({cartItems.length} items)
        </h2>
        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        ADD <span className="text-green-500">$45.06</span> FOR FREE DELIVERY!
      </p>

      <div className="mt-6">
        {cartItems.map((item, index) => (
          <SideBarCard
            key={index}
            name={item.ProductName}
            price={item.price}
            quantity={item.quantity}
            onRemove={() => removeItem(index)}
            onUpdateQuantity={(newQuantity) => updateQuantity(index, newQuantity)}
          />
        ))}

        <hr />

        <div className="mt-4">
          <p className="text-lg font-bold">Subtotal: Rs{subtotal}</p>
          <button className="bg-teal-600 text-white py-2 px-4 rounded mt-4 w-full hover:bg-teal-500">
            VIEW CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rightsidebar;

// Updated Rightsidebar component
"use client";
import React, { useState, useEffect } from "react";
import SideBarCard from "@/components/Common/SideBarCard";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

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

  const calculateSubtotal = (items) => {
    const total = items.reduce((sum, item) => {
      const price = parseFloat(item.price) || 0; // Ensure price is a number
      const quantity = parseInt(item.quantity) || 0;
      return sum + price * quantity;
    }, 0);
    setSubtotal(total.toFixed(2)); // Sets subtotal with 2 decimal places
  };

  const handleViewCart = () => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setIsSidebarOpen(false); // Close the sidebar
  };

  return (
    <div
      className={`fixed right-0 top-0 h-screen w-84 p-4 bg-white shadow-lg transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
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
  
      <div className="">
        <p className="text-sm text-gray-600 mt-4">
          ADD <span className="text-green-500">$45.06</span> FOR FREE DELIVERY!
        </p>
      </div>
  
      {/* Scrollable Cart Items Container */}
      <div className="mt-6 max-h-[60vh] overflow-y-auto">
        {cartItems.map((item, index) => (
          <SideBarCard
            key={index}
            name={item.ProductName}
            price={item.price}
            quantity={item.quantity}
            onRemove={() => removeItem(index)}
            onUpdateQuantity={(newQuantity) =>
              updateQuantity(index, newQuantity)
            }
          />
        ))}
      </div>
  
      <hr />
  
      <div className="mt-4">
        <p className="text-lg font-bold">Subtotal: Rs{subtotal}</p>
        <Link href="/maincart">
          <button
            onClick={handleViewCart}
            className="bg-teal-600 text-white py-2 px-4 flex text-center justify-center rounded mt-4 w-full hover:bg-teal-500"
          >
            VIEW CART <IoArrowForwardCircleOutline className="w-6 justify-center h-6 ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Rightsidebar;

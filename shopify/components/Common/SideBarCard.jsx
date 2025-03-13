"use client";
import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

function SideBarCard({ name, price, quantity = 1, onRemove, onUpdateQuantity }) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [totalPrice, setTotalPrice] = useState(price * quantity);

  // Update total price whenever itemQuantity changes
  useEffect(() => {
    setTotalPrice(price * itemQuantity);
  }, [itemQuantity, price]);

  // Handlers for quantity increase and decrease
  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    onUpdateQuantity(newQuantity);
  };

  const handleDecrease = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      onUpdateQuantity(newQuantity);
    }
  };

  return (
    <div className="py-1 bg-gray-100 my-2 border w-80 h-32 flex flex-col justify-center">
      <div className="flex items-center justify-around ">
        {/* Product Image */}
        <img
          src="/assets/products/1/apple.jpg"
          alt="Product Image"
          className="w-[80px] h-[80px] rounded-sm"
        />

        {/* Centered Information */}
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <span className="text-xl font-semibold">{name}</span>
          <div className="flex items-center justify-center space-x-3">
            {/* Quantity Controls */}
            <button
              onClick={handleDecrease}
              className="bg-gray-300 hover:bg-gray-400 px-2 rounded"
            >
              -
            </button>
            <span className="text-lg">{itemQuantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-gray-300 hover:bg-gray-400 px-2 rounded"
            >
              +
            </button>
            <span className="text-sm font-bold">Rs {totalPrice.toFixed(2)}</span>

            <div className="">
              <button
                onClick={onRemove}
                className="text-xl bg-red-600 p-2 text-white flex rounded-sm"
              >
                <RiDeleteBin5Line className="text-center justify-center " />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Remove Button */}
    </div>
  );
}

export default SideBarCard;

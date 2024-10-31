"use client";
import React, { useState } from "react";

function SideBarCard({ name, price, quantity = 1, onRemove, onUpdateQuantity }) {
  const [itemQuantity, setItemQuantity] = useState(quantity);

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
    <div className="py-1 bg-gray-100 my-2 border w-80 h-32">
      <div className="flex items-center justify-center">
        <img
          src="/assets/products/1/apple.jpg"
          alt="Product Image"
          className="w-[80px] h-[80px] rounded-xl p-2 mx-2"
        />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">{name}</span>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex space-x-2">
              <button
                onClick={handleDecrease}
                className="bg-gray-300 hover:bg-gray-400 px-2 rounded"
              >
                -
              </button>
              <span>{itemQuantity}</span>
              <button
                onClick={handleIncrease}
                className="bg-gray-300 hover:bg-gray-400 px-2 rounded"
              >
                +
              </button>
            </div>
            <span className="text-lg font-bold mr-3">Rs {price}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onRemove}
          className="text-xl bg-red-600 p-2 w-full text-white rounded-md"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default SideBarCard;

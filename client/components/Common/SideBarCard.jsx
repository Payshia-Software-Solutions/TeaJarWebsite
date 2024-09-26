"use client";
import React from "react";
import { useState } from "react";

function SideBarCard() {
  const [quantity, setQuantity] = useState(3);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center justify-center py-1 bg-gray-100 my-2 border w-80 h-20">
      <img
        src="/assets/products/1/apple.jpg"
        alt="Forever Nuts Tea"
        className="w-[80px] h-[80px]  rounded-xl p-2 mx-2"
      />
      <div className="flex flex-col ">
        <span className="text-xl font-semibold">Forever Nuts Tea</span>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex  space-x-2">
            <button
              onClick={handleDecrease}
              className="bg-gray-300 hover:bg-gray-400 px-2 rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-gray-300 hover:bg-gray-400 px-2 rounded"
            >
              +
            </button>
          </div>
          <span className="text-lg font-bold mr-3">$29.94</span>
        </div>
      </div>
    </div>
  );
}

export default SideBarCard;

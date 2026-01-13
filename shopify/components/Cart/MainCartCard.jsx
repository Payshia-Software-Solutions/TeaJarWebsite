"use client";
import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

function MainCartCard({ ProductName, price, quantity, onQuantityChange, onRemove }) {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrease = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
   
  };

  return (
    <div className="flex flex-col sm:flex-row items-center border-b border-gray-600 py-4 gap-4 sm:gap-0">
      {/* Product Image */}
      <img
        src="path-to-image"
        alt="Product"
        className="w-20 h-20 rounded mx-2"
      />

      {/* Product Name */}
      <div className="flex-1 text-center sm:text-left sm:ml-4">
        <h3 className="text-lg font-semibold">{ProductName}</h3>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2 sm:mr-4">
        <button onClick={handleDecrease} className="px-2 py-1 rounded bg-gray-100 text-black">
          -
        </button>
        <input
          type="text"
          value={itemQuantity}
          readOnly
          className="w-10 text-center  rounded"
        />
        <button onClick={handleIncrease} className="px-2 py-1 rounded  bg-gray-100 text-black">
          +
        </button>
      </div>

      {/* Price Display */}
      <p className="text-lg font-semibold sm:ml-4 text-center mx-3 sm:text-left">
        Rs {price.toFixed(2)}
      </p>

      {/* Remove Button */}
      <button
        onClick={onRemove}
        className="text-xl bg-red-600 p-2 text-white rounded-sm flex items-center justify-center mt-4 sm:mt-0"
      >
        <RiDeleteBin5Line />
      </button>
    </div>
  );
}

export default MainCartCard;

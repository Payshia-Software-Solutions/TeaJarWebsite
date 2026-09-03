import React from "react";

const ShippingMethod = () => {
  return (
    <div className=" mx-auto p-6 bg-white">
      <h2 className="text-lg font-semibold mb-3">Shipping method</h2>
      <div className="flex justify-between items-center p-4 bg-gray-100 border border-gray-300 rounded-md">
        <span className="text-gray-700">Standard Shipping</span>
        <span className="text-gray-700 font-medium">Rs 0</span>
      </div>
    </div>
  );
};

export default ShippingMethod;

"use client";
import React, { useState } from "react";
import { Italiana } from "next/font/google";
import { ShoppingCart, Shirt, Home } from "lucide-react";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

// Mock product data for each category
const productData = {
  electronics: [
    { id: 1, name: "Smartphone", price: "Rs 20,000" },
    { id: 2, name: "Laptop", price: "Rs 50,000" },
  ],
  fashion: [
    { id: 1, name: "T-shirt", price: "Rs 500" },
    { id: 2, name: "Jeans", price: "Rs 1,200" },
  ],
  home: [
    { id: 1, name: "Sofa", price: "Rs 15,000" },
    { id: 2, name: "Dining Table", price: "Rs 25,000" },
  ],
};

const ProductVideoSelector = () => {
  const [videoSrc, setVideoSrc] = useState(
    "./assets/videos/recommendation/video.mp4"
  );
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("electronics");

  const tabs = [
    {
      id: "electronics",
      label: "Electronics",
      icon: <ShoppingCart className="w-5 h-5 mr-2" />,
      className: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      id: "fashion",
      label: "Fashion",
      icon: <Shirt className="w-5 h-5 mr-2" />,
      className: "bg-rose-500 hover:bg-rose-600",
    },
    {
      id: "home",
      label: "Home",
      icon: <Home className="w-5 h-5 mr-2" />,
      className: "bg-emerald-500 hover:bg-emerald-600",
    },
  ];

  const handleCategoryChange = (category) => {
    setActiveTab(category);
    setVideoSrc("/assets/videos/recommendation/video.mp4");
    setProducts(productData[category]);
  };

  return (
    <div className="flex h-screen bg-theme">
      {/* Video Section */}
      <div className="w-1/3 bg-gray-100 flex justify-center items-center">
        <video
          key={videoSrc}
          src={videoSrc}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>
      </div>

      {/* Product Category Section */}
      <div className="w-2/3 p-6 flex flex-col">
        <div className={italiana.className}>
          <h2 className="text-[28px] md:text-[48px] text-center text-white mb-4">
            Recommended Collections
          </h2>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-md mx-auto mb-6">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleCategoryChange(tab.id)}
                className={`
                  flex items-center justify-center 
                  w-full py-4 transition-colors duration-300
                  ${
                    activeTab === tab.id
                      ? `${tab.className} text-white`
                      : "text-gray-500 hover:bg-gray-100"
                  }
                  focus:outline-none
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product List */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Products:</h3>
          {products.length > 0 ? (
            <ul className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="p-4 bg-white shadow rounded-lg border"
                >
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-gray-700">{product.price}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Select a category to view products.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductVideoSelector;

"use client";
import React, { useState } from "react";
import { Star, Minus, Plus } from "lucide-react";
import ReviewSection from "@/components/Product/ReviewSection";
import Subscribe from "@/components/Common/Subscribe";

const ProductPage = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = product.images || [
    "https://demo.payshia.com/pos-system/assets/images/products/" +
      product.product_id +
      "/" +
      product.image_path,
    "/assets/products/1/cardamom.jpg",
  ];

  const features = product.features || [
    { icon: "🌿", label: "Vegan" },
    { icon: "🚫", label: "Paraben Free" },
    { icon: "🐾", label: "Cruelty Free" },
    { icon: "✨", label: "Natural" },
    { icon: "🔥", label: "Paraben Free" },
    { icon: "👍", label: "Non-toxic" },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="aspect-square relative">
              <img
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-24 h-24 rounded-lg overflow-hidden border-2 ${
                    selectedImage === idx
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500">
                {product.brand || "Brand Name"}
              </p>
              <h1 className="text-3xl font-bold mt-1">
                {product.display_name || "Product Name"}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">26 reviews</span>
            </div>

            <div className="text-xl font-bold">
              Rs {product.price}
              <p className="text-sm font-normal text-gray-600">
                or 3 x Rs {Math.round(product.price / 3)} with Koko
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-white border-2 border-black text-black py-3 rounded-md hover:bg-gray-50">
                Add to cart
              </button>
              <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
                Buy it now
              </button>
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <span className="text-2xl mb-2">{feature.icon}</span>
                  <span className="text-xs text-gray-600">{feature.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Good to Know</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Detailed Description</h3>
                    <p className="text-sm text-gray-600">
                      {product.detailedDescription}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">How To Use</h3>
                    <p className="text-sm text-gray-600">{product.howToUse}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <ReviewSection />
        </div>
      </div>

      <Subscribe />
    </div>
  );
};

export default ProductPage;

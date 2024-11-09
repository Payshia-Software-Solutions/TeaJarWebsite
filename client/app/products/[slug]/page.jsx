"use client";
import React, { useState } from "react";
import { Star, Minus, Plus, ShoppingCart } from "lucide-react";
import ReviewSection from "@/components/Product/ReviewSection";
import TopSellers from "@/components/TopSellers";
import Subscribe from "@/components/Common/Subscribe";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
    "/api/placeholder/600/600",
  ];

  const features = [
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
              <p className="text-sm text-gray-500">SPA CEYLON SRI LANKA</p>
              <h1 className="text-3xl font-bold mt-1">
                Neem & Tea Tree - Mattifying All Day Protector - 50g
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
              Rs 5,200
              <p className="text-sm font-normal text-gray-600">
                or 3 x Rs 1,733 with Koko
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

            <p className="text-gray-600">
              An instantly absorbent non-oily formula to help keep skin looking
              matte & oil-free for longer.
            </p>

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

            {/* Replaced Card component with div using Tailwind classes */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Good to Know</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Detailed Description</h3>
                    <p className="text-sm text-gray-600">
                      An instantly absorbent non-oily formula enriched with
                      balancing Witch Hazel, soothing Aloe Vera & natural
                      minerals to help keep skin looking matte & oil-free for
                      longer.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">How To Use</h3>
                    <p className="text-sm text-gray-600">
                      Cleanse & tone skin. Apply lightly with finger tips, all
                      over face & neck, avoiding eye contours. Blend in to skin
                      & leave on. Do not leave on overnight. If irritation
                      occurs discontinue use & seek medical advice.
                    </p>
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

      <div></div>
      <Subscribe />
    </div>
  );
};

export default ProductPage;

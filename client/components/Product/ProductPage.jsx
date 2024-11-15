"use client";
import React, { useState } from "react";
import { Star, Minus, Plus } from "lucide-react";
import ReviewSection from "@/components/Product/ReviewSection";
import Subscribe from "@/components/Common/Subscribe";
import BrewingGuide from "@/components/Common/BrewingGuide";
import TeaDetails from "@/components/Common/TeaDetails";
import ProductHeader from "@/components/Product/ProductHeader";
import SecureBanner from "@/components/Common/SecureBanner";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the toast CSS

import Link from "next/link";

const KOKOLogo = () => (
  <Link
    href={`https://paykoko.com/customer-education`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex"
  >
    <img
      className="relative h-5 w-auto mt-0 top-[3px]"
      src="https://paykoko.com/img/logo1.7ff549c0.png"
      alt="Koko"
    />
  </Link>
);

const ProductPage = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const [quantity, setQuantity] = useState(1);
  const images = product.images || [
    "https://kdu-admin.payshia.com/pos-system/assets/images/products/" +
      product.product_id +
      "/" +
      product.image_path,
    "/assets/products/1/cardamom.jpg",
  ];

  const productName = product.display_name;
  const price = product.selling_price;
  const imgUrl = product.image_path;
  const rate = product.selling_price;
  const id = product.product_id;

  // Add to Cart function with Toast notification
  const addToCart = () => {
    const cartItem = { id, productName, price, rate, imgUrl, quantity: 1 };

    // Get existing cart items from local storage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);

    if (existingItemIndex !== -1) {
      // If the item exists, update its quantity
      cart[existingItemIndex].quantity += 1;
    } else {
      // If the item does not exist, add it to the cart
      cart.push(cartItem);
    }

    // Save updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Open the cart (if necessary)
    // setIsCartOpen(true); // Ensure this function has access to this state setter

    // Display the toast notification
    toast.success(`${productName} has been added to your cart!`, {
      position: "top-right",
      autoClose: 3000, // Automatically close after 3 seconds
    });
  };

  const teaData = {
    tastingNote:
      "The Dimbula Valley consists of estates in and around Talawakelle, around 1,500 meters elevation. Tea from this region is known for the combination of strength, character, and brightness, the perfect Breakfast Tea.",
    ingredients: "Pure Ceylon Black tea, no additives",
    teaGrade: "Broken Orange Pekoe Fannings",
    netWeight: "100g",
    caffeine: "Medium",
    timeOfDay: "Morning",
  };

  const productData = {
    title: productName,
    rating: 4,
    bagsPerPack: 30,
    servingsPerPack: 30,
    gramsPerPack: 60,
    price: price,
    currency: "LKR",
    inStock: true,
    onShippingClick: () => {
      // Handle shipping click
      console.log("Shipping clicked");
    },
  };

  const defaultBrewingSteps = [
    {
      icon: "droplet",
      text: "Recommended to use Spring Water",
    },
    {
      icon: "thermometer",
      text: "95°C – 100°C",
    },
    {
      icon: "cupSoda",
      text: "1 String and Tag Tea Bag per person",
    },
    {
      icon: "beaker",
      text: "220ml of water per person",
    },
    {
      icon: "timer",
      text: "3 - 5 Minutes (5 minutes for a strong cup)",
    },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8 mt-28">
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
            <ProductHeader {...productData} />

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
              <button
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
                onClick={addToCart}
              >
                Add to cart
              </button>
            </div>

            <div className="bg-gray-100 rounded-2xl">
              <TeaDetails {...teaData} />
            </div>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
        <BrewingGuide steps={defaultBrewingSteps} />

        <div className="bg-white rounded-lg shadow-md mt-10">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Good to Know</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Detailed Description</h3>
                <p className="text-sm text-gray-600">
                  {product.product_description}
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">How To Use</h3>
                <p className="text-sm text-gray-600">{product.how_to_use}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t">
          <ReviewSection />
        </div>
      </div>

      <Subscribe />
      <SecureBanner />

      {/* ToastContainer to display the notifications */}
      <ToastContainer />
    </div>
  );
};

export default ProductPage;

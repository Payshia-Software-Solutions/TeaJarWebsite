"use client";
import React, { useState } from "react";
import { Star, Minus, Plus } from "lucide-react";
import ReviewSection from "@/components/Product/ReviewSection";
import Subscribe from "@/components/Common/Subscribe";
import BrewingGuide from "@/components/Common/BrewingGuide";
import TeaDetails from "@/components/Common/TeaDetails";
import ProductHeader from "@/components/Product/ProductHeader";
import SecureBanner from "@/components/Common/SecureBanner";
import RelatedProducts from "@/components/RelatedProducts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "@/config";

import Link from "next/link";

const ProductPage = ({ product, product_images, product_info }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Define the display order for the images
  const imageOrder = {
    "Front Image": 1,
    "Top View": 2,
    "Side View": 3,
    "Inner View": 4,
    Other: 5,
  };

  // Sort the product_images based on the predefined order
  const sortedImages = product_images.sort((a, b) => {
    return imageOrder[a.image_prefix] - imageOrder[b.image_prefix];
  });

  const images =
    sortedImages && sortedImages.length > 0
      ? sortedImages
      : [{ image_path: product.image_path }];

  const productName = product.display_name;
  const price = product.selling_price;
  const imgUrl = product.image_path;
  const rate = product.selling_price;
  const id = product.product_id;

  // Updated Add to Cart function
  const addToCart = () => {
    const cartItem = { id, productName, price, rate, imgUrl, quantity };

    // Get existing cart items from local storage or initialize an empty array
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);

    if (existingItemIndex !== -1) {
      // If the item exists, update its quantity
      cart[existingItemIndex].quantity += quantity; // Add the selected quantity
    } else {
      // If the item does not exist, add it to the cart
      cart.push(cartItem);
    }

    // Save updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Display the toast notification
    toast.success(`${productName} has been added to your cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // console.log(images);

  const teaData = {
    tastingNote: product_info.tasting_notes,
    ingredients: product_info.ingredients,
    teaGrade: product_info.tea_grades,
    netWeight: `${product_info.net_weight} g`,
    caffeine: product_info.caffain_level,
    timeOfDay: product_info.usage_type, // you can adjust this based on your logic or data
  };

  const productData = {
    title: productName,
    rating: 4,
    bagsPerPack: product_info.tb_count,
    servingsPerPack: product_info.serving_count,
    gramsPerPack: product_info.per_pack_gram,
    price: price,
    currency: "LKR",
    inStock: true,
    onShippingClick: () => {
      console.log("Shipping clicked");
    },
  };

  const defaultBrewingSteps = [
    {
      icon: "droplet",
      text: product_info.water_type,
    },
    {
      icon: "thermometer",
      text: product_info.breaw_temp,
    },
    {
      icon: "beaker",
      text: product_info.water,
    },
    {
      icon: "timer",
      text: product_info.brew_duration,
    },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="aspect-square relative">
              <img
                src={`${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${product.product_id}/${images[selectedImage].image_path}`}
                alt="Product"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Thumbnail Selector */}
            <div className="flex gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)} // Update the selected image
                  className={`w-24 h-24 rounded-lg overflow-hidden border-2 ${
                    selectedImage === idx
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={`${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${product.product_id}/${img.image_path}`}
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

        <div className="mt-10 border-t">
          <ReviewSection />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <RelatedProducts />
      </div>

      {/* ToastContainer to display the notifications */}
      <ToastContainer />
    </div>
  );
};

export default ProductPage;

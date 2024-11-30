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

  const shareProduct = (product_name) => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out " + product_name + "!",
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      // alert("Sharing not supported. Copy the link instead!");
    }
  };

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

            <div className="flex items-center space-x-2">
              <button
                className="flex-1 bg-black text-white py-3 rounded-md hover:bg-gray-800 text-lg h-14"
                onClick={addToCart}
              >
                Add to cart
              </button>

              <button
                className="bg-green-800 text-white p-2 rounded-md hover:bg-green-700 flex items-center justify-center w-12 h-14"
                onClick={() => shareProduct(product.product_name)}
                aria-label="Share"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    d="M15 3C15 2.44772 15.4477 2 16 2C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4C15.4477 4 15 3.55228 15 3Z"
                    fill="#fff"
                  />
                  <path
                    d="M3.70663 12.7845L3.16104 12.2746L3.70664 12.7845C4.09784 12.3659 4.62287 11.8265 5.17057 11.3274C5.72852 10.8191 6.26942 10.3905 6.69641 10.1599C7.06268 9.96208 7.75042 9.84035 8.40045 9.84848C8.62464 9.85128 8.81365 9.86944 8.9559 9.89472C8.96038 10.5499 8.95447 11.7469 8.95145 12.2627C8.94709 13.0099 9.83876 13.398 10.3829 12.8878L14.9391 8.61636C15.2845 8.2926 15.2988 7.74908 14.971 7.4076L10.4132 2.65991C9.88293 2.10757 8.95 2.48291 8.95 3.24856V5.16793C8.5431 5.13738 8.0261 5.11437 7.47937 5.13009C6.5313 5.15734 5.30943 5.30257 4.4722 5.88397C4.36796 5.95636 4.26827 6.03539 4.17359 6.11781C2.49277 7.58092 2.11567 9.90795 1.8924 11.7685L1.87242 11.935C1.74795 12.9722 3.02541 13.5134 3.70663 12.7845ZM9.35701 11.7935L9.70204 12.1615L9.35701 11.7935C9.35715 11.7934 9.35729 11.7932 9.35744 11.7931L9.35701 11.7935Z"
                    stroke="#fff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
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
    </div>
  );
};

export default ProductPage;

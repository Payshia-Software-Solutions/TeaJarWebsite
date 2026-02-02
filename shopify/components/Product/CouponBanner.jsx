"use client";
import { useState } from "react";
import Image from "next/image";

export default function CouponBanner({
  productName,
  originalPrice,
  discountPercentage,
  discountType,
  PromoMessage,
}) {
  const [isCopied, setIsCopied] = useState(false);
  const promoCode = "TEAJAR2024"; // Example promo code
  const discountedPrice =
    discountType === "percentage"
      ? (originalPrice * (1 - discountPercentage / 100)).toFixed(2) // Percentage discount
      : (originalPrice - discountPercentage).toFixed(2); // Fixed value discount

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-8 px-6 rounded-lg shadow-xl text-center">
      {/* Heading Section */}
      <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-wide">
        🎉 Limited Time Offer!
      </h2>
      <p className="text-lg md:text-xl font-medium mb-6">
        {discountType === "percentage" ? (
          <>
            Save {discountPercentage}% on{" "}
            <span className="underline">{productName}</span> now!
          </>
        ) : (
          <>
            Save Rs {discountPercentage} on{" "}
            <span className="underline">{productName}</span> now!
          </>
        )}
      </p>

      {/* Product Pricing */}
      <p className="text-xl md:text-2xl font-semibold mb-0">
        Original Price:{" "}
        <span className="line-through text.white">
          Rs {originalPrice.toFixed(2)}
        </span>
      </p>
      <p className="text-2xl md:text-4xl font-extrabold text-green-500 mb-3">
        Now: <span className="text-yellow-400">Rs {discountedPrice}</span>
      </p>

      {/* Promo Code with Copy Button */}
      {/* <div className="flex justify-between items-stretch bg-white text-green-700 font-bold py-3 px-5 rounded-lg shadow-lg max-w-xl mx-auto">
        <Image
          src="/assets/promo-code-banner-optimized.webp"
          alt="Promo Code"
          width={300}
          height={80}
          className="mr-4 w-[70%]"
        />
        <button
          onClick={handleCopy}
          className="px-1 md:px-6 py-3 w-[28%] bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition-all h-auto flex items-center"
        >
          {isCopied ? "✅ Copied!" : "Copy Code"}
        </button>
      </div> */}

      <p className="text-2xl font-bold">{PromoMessage}</p>

      {/* Call to Action */}
      <p className="mt-6 text-sm md:text-base text-gray-100">
        Hurry up! This exclusive offer is valid for a limited time only. Use the
        promo code at checkout and enjoy your savings!
      </p>
    </div>
  );
}

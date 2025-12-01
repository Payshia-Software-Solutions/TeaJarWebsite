"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import config from "@/config";

const DiscountModel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [successCode, setSuccessCode] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // Added state to show success message
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${config.API_BASE_URL}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }), // Sending name and email
      });

      if (response.status === 201) {
        const data = await response.json();
        setSuccessCode(data.code);
        setShowSuccess(true);
      } else if (response.status === 409) {
        const data = await response.json();
        setIsVisible(false);
        alert(data.error); // Show 'already subscribed' message
      } else {
        alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to the server.");
    }
  };
  const handleClose = () => {
    setIsVisible(false);
    setSuccessCode("");
    setErrorMessage("");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full relative">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="flex flex-row items-center md:items-start">
          {/* Left side content */}
          <div className=" text-white rounded-t-lg relative w-1/2">
            <Image
              src="/assets/promo-banners/winter-banner-optimized.webp"
              alt="Promo Banner"
              className="rounded-l-lg object-fill"
              layout="intrinsic" // Maintain aspect ratio
              width={400} // Adjust as needed
              height={300} // Adjust as needed
            />
          </div>

          {/* Right side content */}
          {/* p-6 md:p-8 w-full md:w-1/2 flex items-center justify-center */}
          <div className="p-3 md:p-8 w-1/2 flex items-center justify-center">
            <div>
              {!successCode ? (
                <>
                  <h3 className="text-[15px] md:text-[15px] font-bold text-center mb-2 md:mb-4">
                    A Gift of Festive Happiness!🎄
                  </h3>
                  <p className="text-[10px] md:text-[12px] text-center mb-2 md:mb-4">
                    Enjoy the magic of the season with a FREE Christmas Santa Mug on all orders above Rs.8,000!
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-2 md:space-y-4"
                  >
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-1 px-2 border border-gray-300 rounded text-[10px] md:text-[15px]"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-1 px-2 border border-gray-300 rounded text-[10px] md:text-[15px]"
                      required
                    />
                    {errorMessage && (
                      <p className="text-red-500 text-sm">{errorMessage}</p>
                    )}
                    <button
                      type="submit"
                      className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
                    >
                      Subscribe Now
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center">
                  <h3 className="text-[20px] md:text-[25px] lg:text-[30px] font-bold text-green-600 mb-2">
                    Thank You for Subscribing!
                  </h3>
                  <p className="text-[12px] md:text-[14px] lg:text-[15px] mb-4">
                    Your discount code:
                  </p>
                  <div className="bg-gray-100 text-black py-2 px-4 rounded font-bold text-[18px] md:text-[20px] flex items-center justify-center gap-2 md:gap-4">
                    <span>{successCode}</span>
                  </div>

                  {/* Buttons container */}
                  <div className="mt-2 flex flex-col items-center gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(successCode);
                        alert("Discount code copied to clipboard!");
                      }}
                      className="bg-green-600 text-white py-3 px-3 rounded hover:bg-green-700 text-[12px] md:text-[15px] w-full"
                    >
                      Copy Code
                    </button>
                    <button
                      onClick={handleClose}
                      className="bg-black text-white py-3 px-3 rounded hover:bg-gray-800 text-[14px] md:text-[15px] w-full"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountModel;

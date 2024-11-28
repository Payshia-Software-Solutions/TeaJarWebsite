"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const DiscountModel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [successCode, setSuccessCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message

    try {
      const response = await fetch("https://kduserver.payshia.com/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe. Please try again.");
      }

      const data = await response.json();
      if (data.code) {
        setSuccessCode(data.code); // Use the discount code from the server
      } else {
        setSuccessCode("TEAJAR2024"); // Fallback code if no code is returned
      }
    } catch (error) {
      setErrorMessage(error.message || "An unexpected error occurred.");
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

        <div className="flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/promo-banners/promo-banner.jpeg"
              alt="Promo Banner"
              className="rounded-t-lg md:rounded-l-lg object-fill"
              layout="intrinsic"
              width={400}
              height={300}
            />
          </div>

          {/* Right side content */}
          <div className="p-6 md:p-8 w-full md:w-1/2 flex items-center justify-center">
            <div>
              {!successCode ? (
                <>
                  <h3 className="text-[25px] md:text-[30px] font-bold text-center mb-2 md:mb-4">
                    Subscribe Tea Jar!
                  </h3>
                  <p className="text-[10px] md:text-[15px] text-center mb-2 md:mb-4">
                    Early access to our Black Friday is LIVE! Enjoy up to 40%
                    off & secure your favourites before they sell out.
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
                      className="w-full p-2 border border-gray-300 rounded text-[10px] md:text-[15px]"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded text-[10px] md:text-[15px]"
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
                  <h3 className="text-[25px] md:text-[30px] font-bold text-green-600 mb-2">
                    Thank You for Subscribing!
                  </h3>
                  <p className="text-[15px] mb-4">Your discount code:</p>
                  <div className="bg-gray-100 text-black py-2 px-4 rounded font-bold text-[20px]">
                    {successCode}
                  </div>
                  <button
                    onClick={handleClose}
                    className="mt-4 bg-black text-white py-2 px-6 rounded hover:bg-gray-800"
                  >
                    Close
                  </button>
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

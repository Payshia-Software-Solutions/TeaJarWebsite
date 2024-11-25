"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const DiscountModel = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 16,
    seconds: 32,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted:", { name, email });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="flex flex-row items-center md:items-start">
          {/* Left side content */}
          <div className=" text-white rounded-t-lg relative w-1/2">
            <Image
              src="/assets/promo-banners/promo-banner.jpeg"
              alt="Promo Banner"
              className="rounded-l-lg object-fill"
              layout="intrinsic" // Maintain aspect ratio
              width={400} // Adjust as needed
              height={300} // Adjust as needed
            />
          </div>

          {/* Right side content */}
          <div className="p-3 md:p-8 w-1/2 flex items-center justify-center">
            <div className="pt-6">
              <h3 className="text-[25px] md:text-[30px] font-bold text-center mb-2 md:mb-4">
                Subscribe Tea Jar!
              </h3>

              <p className="text-[10px] md:text-[15px] text-center mb-2 md:mb-4">
                Early access to our Black Friday is LIVE! Enjoy up to 40% off &
                secure your favourites before they sell out.
              </p>

              <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
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
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountModel;

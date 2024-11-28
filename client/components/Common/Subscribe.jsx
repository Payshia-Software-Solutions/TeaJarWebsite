"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import config from "@/config";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // Added name state
  const [successCode, setSuccessCode] = useState(null); // Added state for success code
  const [showSuccess, setShowSuccess] = useState(false); // Added state to show success message
  const [isVisible, setIsVisible] = useState(true); // Added state for visibility

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
        setShowSuccess(true); // Show success message
      } else if (response.status === 409) {
        const data = await response.json();
        // setIsVisible(false); // Hide form if already subscribed
        alert(data.error); // Show 'already subscribed' message
      } else {
        alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="w-full bg-[#f8f6f4] py-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="mb-2 font-bold text-[24px] md:text-[36px]">
          Subscribe to our emails
        </h2>
        <p className="text-gray-600 mb-6 text-[12px] md:text-[20px]">
          Be the first to know about new collections and exclusive offers.
        </p>

        {isVisible && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <div className="relative w-full max-w-md flex space-x-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full max-w-md px-4 py-3 bg-black text-white rounded-none hover:opacity-70"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-5 h-5 inline-block ml-2" />
              Subscribe
            </button>
          </form>
        )}

        {showSuccess && (
          <p className="text-green-500 mt-4">
            Thank you for subscribing! A confirmation email has been sent to{" "}
            {email}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Subscribe;

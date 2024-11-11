"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
  };

  return (
    <div className="w-full bg-[#f8f6f4] py-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-4">Subscribe to our emails</h2>
        <p className="text-gray-600 mb-6">
          Be the first to know about new collections and exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="relative w-full max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;

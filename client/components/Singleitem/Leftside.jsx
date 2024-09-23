"use client";

import React from "react";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Leftside() {
  return (
    <div>
      <div className="flex flex-col items-center space-y-4 mt-6">
        {/* Large Image Display */}
        <div className="relative w-full max-w-md">
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Main Image"
            className="w-full h-auto object-cover"
          />
          {/* Left Arrow */}
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
            <FaChevronLeft />
          </button>
          {/* Right Arrow */}
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
            <FaChevronRight />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-5 gap-2 max-w-lg">
          <img
            src="/assets/products/1/apple.jpg"
            alt="Thumbnail 1"
            className="w-full h-16 md:h-20 object-cover border border-gray-200 rounded-md"
          />
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Thumbnail 2"
            className="w-full h-16 md:h-20 object-cover border border-gray-200 rounded-md"
          />
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Thumbnail 3"
            className="w-full h-16 md:h-20 object-cover border border-gray-200 rounded-md"
          />
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Thumbnail 4"
            className="w-full h-16 md:h-20 object-cover border border-gray-200 rounded-md"
          />
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Thumbnail 5"
            className="w-full h-16 md:h-20 object-cover border border-gray-200 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Leftside;

import React from 'react'
import {
  FaBars,
  FaCircle,
  FaStar,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";


function RightSide() {
  return (
    <div>
      {/*Description  */}
      <div className="mt-4 px-4 py-4">
        <h2 className="text-3xl md:text-5xl my-3">Tea Jar</h2>
        {/* Label (e.g., Herbal Tea) */}
        <div className="flex items-center gap-3">
          <span className="bg-yellow-400 text-black rounded-full px-3 py-1 text-xs font-semibold">
            Herbal Tea
          </span>

          {/* Rating Circles */}
          <div className="flex gap-2">
            <FaCircle className="w-3 md:w-4 h-3 md:h-4 text-gray-400" />
            <FaCircle className="w-3 md:w-4 h-3 md:h-4 text-gray-400" />
            <FaCircle className="w-3 md:w-4 h-3 md:h-4 text-gray-400" />
          </div>

          {/* Caffeine-Free */}
          <a href="#" className="text-blue-600 text-sm underline">
            Caffeine-Free
          </a>
        </div>

        {/* Star Ratings and Score */}
        <div className="flex items-center mt-3">
          {/* Star Rating */}
          <ul className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <FaStar className="sm:w-5 sm:h-5 w-4 h-4 text-yellow-400" />
              </li>
            ))}
          </ul>

          {/* Rating Number */}
          <span className="text-xl font-semibold ml-2">4.8</span>

          {/* Number of Ratings */}
          <span className="text-gray-500 text-sm ml-2">(509)</span>
        </div>

        {/* Subtitle (e.g., Vegan) */}
        <div className="mt-2">
          <span className="text-gray-500 text-sm font-semibold">Vegan</span>
        </div>

        {/* Ingredients Dropdown */}
        <div className="mt-4">
          <button className="text-blue-600 text-sm underline">
            Ingredients
          </button>
        </div>

        {/* Product Description */}
        <div className="mt-2">
          <p className="text-gray-600">
            Toasty nuts and sweet apple – rich and comforting
          </p>
        </div>

        {/* Promotion Box */}
        <div className="bg-gray-100 p-3 rounded-lg">
          <div className="bg-blue-100 p-4 rounded-lg mt-4">
            <span className="text-blue-700 text-sm">
              Tea Pharmacy → Buy 2, get 1 free on all teas
            </span>
          </div>

          {/* Price Section */}
          <div className="mt-4">
            <h3 className="text-2xl font-bold">$9.98</h3>
            <div className="border p-3 rounded-md mt-2">
              <div className="flex gap-2">
                <select className="w-full border border-gray-300 p-2 rounded">
                  <option>Loose Leaf 1.7oz</option>
                </select>
                <div className="flex items-center gap-2">
                  <button className="bg-gray-200 px-3 py-1 rounded">-</button>
                  <span className="text-lg font-medium">1</span>
                  <button className="bg-gray-200 px-3 py-1 rounded">+</button>
                </div>
              </div>

              {/* Cups description */}
              <p className="text-gray-500 mt-2 text-sm">
                15-20 cups (8 oz/240 ml) of hot tea • 10-15 cups (8 oz/240 ml)
                of iced tea
              </p>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
        </div>

        <div className="mt-4">
          <button className="bg-blue-700 text-white py-2 px-4 w-full rounded-md font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightSide

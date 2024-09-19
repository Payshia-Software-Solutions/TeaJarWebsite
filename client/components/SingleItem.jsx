import React from "react";
import {
  FaBars,
  FaCircle,
  FaStar,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

function SingleItem() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/*Main right image  */}
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
    </section>
  );
}

export default SingleItem;

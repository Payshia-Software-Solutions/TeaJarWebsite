"use client";
import React, { useState } from "react";
import { Italiana } from "next/font/google";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Shirt, Home } from "lucide-react";
import { BsArrowRightShort } from "react-icons/bs";

// Import Swiper core and required modules
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

// Mock product data for each category
const productData = {
  classic: [
    {
      id: 1,
      name: "English Breakfast Tea",
      price: "Rs 20,000",
      link: "/products/english-breakfast-tea-25-enveloped-tea-bags",
    },
    {
      id: 2,
      name: "Ceylon Green Tea",
      price: "Rs 50,000",
      link: "/products/ceylon-green-tea-25-enveloped-tea-bags",
    },
  ],
  flavoured: [
    {
      id: 1,
      name: "Apple Flavoured Tea",
      price: "Rs 500",
      link: "/shop/filter?department=2",
    },
    {
      id: 2,
      name: "Cinnamon Flavoured Tea",
      price: "Rs 1,200",
      link: "/shop/filter?department=2",
    },
    {
      id: 3,
      name: "Cardamom Flavoured Tea",
      price: "Rs 1,200",
      link: "/shop/filter?department=2",
    },
    {
      id: 4,
      name: "Ginger Flavoured Tea",
      price: "Rs 1,200",
      link: "/shop/filter?department=2",
    },
    {
      id: 5,
      name: "Strawberry Flavoured Tea",
      price: "Rs 1,200",
      link: "/shop/filter?department=2",
    },
  ],
  exceptional: [
    {
      id: 1,
      name: "Single Origin Black Tea",
      price: "Rs 1,200",
      link: "/shop/filter?department=1",
    },
    {
      id: 2,
      name: "Pure Ceylon Green Tea",
      price: "Rs 25,000",
      link: "/shop/filter?department=1",
    },
    {
      id: 3,
      name: "Moroccan Mint Green Tea",
      price: "Rs 25,000",
      link: "/shop/filter?department=1",
    },
    {
      id: 4,
      name: "Pure Chamomile Flowers",
      price: "Rs 25,000",
      link: "/shop/filter?department=1",
    },
    {
      id: 5,
      name: "Earl Grey",
      price: "Rs 25,000",
      link: "/shop/filter?department=1",
    },
    {
      id: 6,
      name: "Jasmine Green Tea",
      price: "Rs 25,000",
      link: "/shop/filter?department=1",
    },
    {
      id: 7,
      name: "Spice Chai Masala Tea",
      price: "Rs 25,000",
      link: "/shop/filter?department=1",
    },
    {
      id: 8,
      name: "Rose with Vanilla Tea",
      price: "Rs 25,000",
      link: "/shop/filter?department=1",
    },
    {
      id: 9,
      name: "Berry Delight Tea",
      price: "Rs 25,000",
      link: "/shop/filter?department=1",
    },
  ],
  factory: [
    {
      id: 1,
      name: "Galpadithanne OP1 Tea",
      price: "Rs 1,200",
      link: "/products/galpadithanne-op1-loose-leaf-125g",
    },
    {
      id: 2,
      name: "New Kandagasthanne BOP Tea",
      price: "Rs 25,000",
      link: "/products/new-kandagasthanne-bop-loose-leaf-200g",
    },
    {
      id: 3,
      name: "Peak view Pekoe 1 Tea",
      price: "Rs 25,000",
      link: "/products/peak-view-pekoe-1-loose-leaf-175g",
    },
    {
      id: 4,
      name: "Nilvin View OPA Tea",
      price: "Rs 25,000",
      link: "/products/nilvin-view-op-a-loose-leaf-100g",
    },
  ],
  exclusive: [
    {
      id: 1,
      name: "Ruby Raspberry Flavored Black Tea",
      price: "Rs 1,200",
      link: "/products/ruby-soursop-flavour-100g-loose-tea",
    },
    {
      id: 2,
      name: "Blue sapphire Blueberry Mint Flavored Black Tea",
      price: "Rs 25,000",
      link: "/products/blue-sapphire-blueberry-mint-flavor-100g-loose-tea",
    },
    {
      id: 3,
      name: "Yellow Sapphire Tropical Flavored Black Tea",
      price: "Rs 25,000",
      link: "/products/yellow-sapphire-vanilla-flavor-100g-loose-tea",
    },
  ],
  organic: [
    { id: 1, name: "Ceylon Organic Green Tea", price: "Rs 1,200", link: "#" },
    { id: 2, name: "Ceylon Organic Black Tea", price: "Rs 25,000", link: "#" },
  ],
};

const videoSources = {
  classic: "/assets/videos/recommendation/Classic.mp4",
  flavoured: "/assets/videos/recommendation/Flavoured.mp4",
  exceptional: "/assets/videos/recommendation/Exceptional.mp4",
  exclusive: "/assets/videos/recommendation/Exclusive.mp4",
  factory: "/assets/videos/recommendation/Factory-Series.mp4",
  organic: "/assets/videos/recommendation/Organic.mp4",
};

const objectPositions = {
  classic: "object-bottom",
  flavoured: "object-bottom",
  exceptional: "object-bottom",
  exclusive: "object-bottom",
  factory: "object-cover",
  organic: "object-bottom",
};

const ImageSources = {
  classic: "/assets/our-teas/classic.jpg",
  flavoured: "/assets/our-teas/flavoured-1.jpg",
  exceptional: "/assets/our-teas/exceptional.jpg",
  exclusive: "/assets/our-teas/exclusive.jpg",
  factory: "/assets/our-teas/factory-series.jpg",
  organic: "/assets/our-teas/organic.jpg",
};

const ProductVideoSelector = () => {
  const defaultCategory = "classic";
  const [objectPosition, setObjectPosition] = useState(
    objectPositions[defaultCategory]
  );
  const [videoSrc, setVideoSrc] = useState(videoSources[defaultCategory]);
  const [imgSrc, setImageSrc] = useState(ImageSources[defaultCategory]);
  const [products, setProducts] = useState(productData[defaultCategory]);
  const [activeTab, setActiveTab] = useState(defaultCategory);

  const tabs = [
    {
      id: "classic",
      label: "Classic",
      icon: <ShoppingCart className="w-5 h-5 mr-2" />,
    },
    {
      id: "flavoured",
      label: "Flavoured",
    },
    {
      id: "exceptional",
      label: "Exceptional",
    },
    {
      id: "exclusive",
      label: "Exclusive",
    },
    {
      id: "factory",
      label: "Factory",
    },
    {
      id: "organic",
      label: "Organic",
    },
  ];

  const handleCategoryChange = (category) => {
    setActiveTab(category);
    setVideoSrc(videoSources[category] || videoSources.classic);
    setImageSrc(ImageSources[category] || ImageSources.classic);
    setObjectPosition(objectPositions[category] || ImageSources.classic);
    setProducts(productData[category] || []);
  };

  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="flex h-auto md:h-screen bg-theme flex-col-reverse md:flex-row">
      {/* Video Section */}
      <div className="w-full h-[50vh] md:h-full md:w-1/3 bg-gray-100 flex justify-center items-center">
        <video
          key={videoSrc}
          src={videoSrc}
          autoPlay
          muted
          loop
          className={`w-full h-full object-cover ${objectPosition}`}
        ></video>
      </div>

      {/* Product Category Section */}
      <div className="w-full md:w-2/3 p-6 flex flex-col">
        <div className={italiana.className}>
          <h2 className="text-[28px] md:text-[48px] text-center text-white mb-2">
            Recommended Collections
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="shadow-lg overflow-hidden w-full mb-6">
          <div className="flex flex-col md:flex-row">
            {/* Swiper for mobile */}
            <div className="md:hidden">
              <Swiper
                spaceBetween={2} // Space between slides
                slidesPerView={2.5} // Allows tabs to adjust size automatically
                freeMode={true} // Allows smooth horizontal scrolling
              >
                {tabs.map((tab) => (
                  <SwiperSlide key={tab.id}>
                    <button
                      onClick={() => handleCategoryChange(tab.id)}
                      className={`
                  flex items-center justify-center 
                  py-4 px-6 transition-colors duration-300
                  ${
                    activeTab === tab.id
                      ? `bg-theme text-white`
                      : "text-gray-500 hover:bg-gray-100"
                  }
                  focus:outline-none
                `}
                    >
                      {tab.label}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Regular tabs for desktop */}
            <div className="hidden md:block bg-white shadow-lg overflow-hidden w-full">
              <div className="flex border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleCategoryChange(tab.id)}
                    className={`
              flex items-center justify-center 
              flex-1 py-4 transition-colors duration-300
              ${
                activeTab === tab.id
                  ? `bg-theme text-white`
                  : "text-gray-500 hover:bg-gray-100"
              }
              focus:outline-none
            `}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="w-full flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product List Section */}
          <div>
            {products.length > 0 ? (
              <ul className="grid grid-cols-1  gap-4">
                {products.map((product) => (
                  <Link href={`${product.link}`}>
                    <motion.li
                      key={product.id}
                      className="flex items-center justify-between hover:text-gray-200 transition-colors duration-300 mb-3"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 * product.product_id,
                      }}
                    >
                      <span className="font-medium cursor-pointer text-white">
                        {product.name}
                      </span>

                      <BsArrowRightShort size={18} className="text-white" />
                    </motion.li>
                  </Link>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">
                Select a category to view products.
              </p>
            )}
          </div>

          {/* Image Section */}
          <div className="hidden md:flex justify-center items-center w-full h-full">
            <div className="relative w-full h-full">
              {isLoading && (
                <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
              )}
              <Image
                src={imgSrc}
                alt="Product"
                layout="fill"
                objectFit="cover"
                className={`rounded-lg transition-opacity duration-500 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVideoSelector;

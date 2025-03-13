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
  organic: "object-cover",
};

const ImageSources = {
  classic: "/assets/our-teas/classic-optimized.webp",
  flavoured: "/assets/our-teas/flavoured-1-optimized.webp",
  exceptional: "/assets/our-teas/exceptional-optimized.webp",
  exclusive: "/assets/our-teas/exclusive-optimized.webp",
  factory: "/assets/our-teas/factory-series-optimized.webp",
  organic: "/assets/our-teas/organic-optimized.webp",
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
      <div className="w-full h-[50vh] md:h-full lg:w-3/5 bg-gray-100 flex justify-center items-center">
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
      <div className="w-full lg:w-2/5 p-6 flex flex-col">
        <div className={italiana.className}>
          <h2 className="text-[28px] md:text-[48px] text-center text-white mb-2">
            Recommended Collections
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-full mt-3">
          {/* Category Tabs */}
          <div className="md:border-r border-gray-500 overflow-hidden w-full lg:w-2/5 mb-6">
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
              <div className="hidden md:block overflow-hidden w-full">
                <div className="flex flex-col h-full border-gray-200 gap-3">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleCategoryChange(tab.id)}
                      className={`
              flex items-start justify-start px-3 
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
          <div className="w-full flex-grow grid grid-cols-1 lg:w-3/5 gap-6">
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

                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4666 4.66667C14.2666 4.46667 13.9999 4.46667 13.7999 4.53333C12.7999 5 11.8666 5.2 10.9333 5.4C9.86661 5.6 8.86661 5.86667 7.79994 6.4C7.59994 5.13333 6.99994 4.26667 6.46661 3.4C5.99994 2.8 5.59994 2.2 5.33328 1.46667C5.26661 1.2 4.99994 1 4.79994 1C4.59994 1 4.26661 1.2 4.19994 1.46667C3.93328 2.26667 3.53328 2.86667 3.13328 3.46667C2.46661 4.53333 1.73328 5.66667 1.73328 7.53333C1.73328 8.6 1.99994 9.6 2.59994 10.3333C2.73328 10.4667 2.86661 10.6 3.06661 10.6C3.19994 10.6 3.33328 10.5333 3.39994 10.4667C3.66661 10.2667 3.73328 9.86667 3.53328 9.6C3.13328 9.06667 2.93328 8.33333 2.93328 7.53333C2.93328 6 3.53328 5.13333 4.13328 4.13333C4.33328 3.8 4.53328 3.46667 4.73328 3.13333C4.93328 3.46667 5.13328 3.8 5.33328 4.13333C5.99994 5.06667 6.53328 5.86667 6.59994 7.2C6.39994 7.4 6.13328 7.6 5.93328 7.8C5.73328 8 5.53328 8.2 5.39994 8.4V6.33333C5.39994 6 5.13328 5.73333 4.79994 5.73333C4.46661 5.73333 4.19994 6 4.19994 6.33333V11.2V11.2667V11.3333C4.19994 11.4 4.26661 11.4667 4.26661 11.4667C4.39994 11.6 4.53328 11.7333 4.73328 11.7333C4.93328 11.7333 5.13328 11.6 5.26661 11.4667C5.33328 11.4 5.33328 11.3333 5.33328 11.2667V11.2C5.46661 10.2667 5.93328 9.4 6.73328 8.6C8.13328 7.2 9.53328 6.86667 11.1333 6.53333C11.7333 6.4 12.3333 6.26667 12.9333 6.06667C12.7333 6.66667 12.5999 7.26667 12.4666 7.86667C12.1333 9.46667 11.7999 10.8 10.3999 12.2667C8.73328 13.9333 7.13328 13.8 6.26661 13.6L10.1333 9.73333C10.3999 9.46667 10.3999 9.13333 10.1333 8.86667C9.86661 8.6 9.53328 8.6 9.26661 8.86667L4.79994 13.3333C4.59994 13.6 4.59994 13.9333 4.79994 14.2C4.86661 14.2667 4.93328 14.3333 4.99994 14.3333C5.06661 14.4 5.13328 14.4 5.19994 14.4C5.46661 14.5333 6.26661 14.8667 7.26661 14.8667C8.39994 14.8667 9.79994 14.4667 11.2666 13.0667C12.9333 11.4 13.3333 9.73333 13.6666 8.13333C13.8666 7.2 14.0666 6.2 14.5333 5.26667C14.6666 5.13333 14.5999 4.8 14.4666 4.66667Z"
                            fill="white"
                            fill-opacity="0.9"
                          />
                        </svg>
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
            {/* <div className="hidden md:flex justify-center items-center w-full h-full">
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
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVideoSelector;

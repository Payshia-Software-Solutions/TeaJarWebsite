"use client";
import React, { useState, useEffect } from "react";
import VideoComponent from "@/components/Recommendation/VideoComponent";
import { BsArrowRightShort } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});

const RecommendedCategories = () => {
  const categories = [
    {
      name: "Flavoured Range",
      videoUrl: "./assets/videos/recommendation/video.mp4",
      mainImage:
        "https://kdu-admin.payshia.com/pos-system/assets/images/products/5/green-tea.png",
      products: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
        { id: 4, name: "Product 2" },
        { id: 5, name: "Product 3" },
      ],
    },
    {
      name: "Exceptional Range",
      videoUrl: "./assets/videos/recommendation/video.mp4",
      mainImage:
        "https://kdu-admin.payshia.com/pos-system/assets/images/products/6/ceylon-black-tea.png",
      products: [
        { id: 4, name: "Product 4" },
        { id: 5, name: "Product 5" },
        { id: 6, name: "Product 6" },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [categories.length]);

  const currentCategory = categories[currentIndex];

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length),
    onSwipedRight: () =>
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="bg-theme">
      <div className="" {...swipeHandlers}>
        <div className=" w-full justify-center overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }} // Starts slightly smaller
              exit={{ opacity: 0, scale: 0.9 }} // Shrinks when exiting
              animate={{ opacity: 1, scale: 1 }} // Grows to full size
              transition={{ duration: 0.5 }} // Adjust the duration as needed
            >
              <div className="min-h-fit md:min-h-screen">
                <div
                  className={`flex w-full items-stretch flex-col md:flex-row ${
                    currentIndex % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                  style={{ width: "100%" }}
                >
                  {/* Video Container */}
                  <div className="w-full md:w-1/3 flex-grow">
                    <VideoComponent videoUrl={currentCategory.videoUrl} />
                  </div>

                  {/* Content Container */}
                  <div className="w-full md:w-2/3 flex flex-col pl-0">
                    <div className="p-6 sm:p-10 flex-grow flex flex-col">
                      <div className="flex items-center justify-start mb-6 sm:mb-10">
                        <h1
                          className={`text-2xl sm:text-4xl border-b text-white ${italiana.className}`}
                        >
                          {currentCategory.name}
                        </h1>
                      </div>
                      <div className="flex flex-col md:flex-row flex-1">
                        {/* List Container */}
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                          <ul className="space-y-4 text-gray-400">
                            {currentCategory.products.map((product) => (
                              <motion.li
                                key={product.id}
                                className="flex items-center justify-between hover:text-gray-200 transition-colors duration-300"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{
                                  duration: 0.5,
                                  delay: 0.1 * product.id,
                                }}
                              >
                                <span className="font-medium cursor-pointer">
                                  {product.name}
                                </span>
                                <BsArrowRightShort size={18} />
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Image Container */}
                        <div className="w-full md:w-2/3 pl-0 md:pl-6">
                          <img
                            className="rounded-xl shadow-md w-full h-full object-cover"
                            src="./assets/ourteas/black-tea.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCategories;

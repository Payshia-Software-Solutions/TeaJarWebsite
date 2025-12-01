"use client";
import React, { useState, useEffect } from "react";
import VideoComponent from "@/components/Recommendation/VideoComponent";
import { BsArrowRightShort } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Italiana } from "next/font/google";
import Link from "next/link";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const RecommendedCategories = () => {
  const [categories, setCategories] = useState([
    { name: "", videoUrl: "", mainImage: "", products: [] },
  ]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://kduserver.payshia.com/products/");
        const data = await response.json();

        const categoriesData = [
          {
            name: "Flavoured Range",
            videoUrl: "./assets/videos/recommendation/video.mp4",
            mainImage: "./assets/our-teas/flavoured/main-cover-v1.jpg",
            products: data.filter(
              (product) =>
                product.department_id === 2 && product.category_id === 1
            ),
          },
          {
            name: "Exceptional Range",
            videoUrl: "./assets/videos/recommendation/video.mp4",
            mainImage: "./assets/our-teas/exceptional/main-cover-new.jpg",
            products: data.filter(
              (product) =>
                product.department_id === 1 && product.category_id === 2
            ),
          },
          {
            name: "Exclusive Range",
            videoUrl: "./assets/videos/recommendation/video.mp4",
            mainImage: "./assets/our-teas/exclusive/main-image.jpg",
            products: data.filter(
              (product) =>
                product.department_id === 3 && product.category_id === 3
            ),
          },
        ];

        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [categories]);

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

  if (loading) return <div>Loading...</div>;

  const currentCategory = categories[currentIndex] || { products: [] };

  return (
    <div className="bg-theme">
      <div {...swipeHandlers}>
        <div className="w-full justify-center overflow-hidden">
          {categories.length > 0 && (
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                exit={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="min-h-fit md:min-h-screen">
                  <div
                    className={`flex w-full items-stretch flex-col-reverse md:flex-row ${
                      currentIndex % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Video Container */}
                    <div className="w-full md:w-1/3 flex-grow">
                      <VideoComponent videoUrl={currentCategory.videoUrl} />
                    </div>

                    {/* Content Container */}
                    <div className="w-full md:w-2/3 flex flex-col pl-0">
                      <div className="p-6 sm:p-10 flex-grow flex flex-col">
                        <div className={italiana.className}>
                          <h2 className="text-[28px] md:text-[48px] text-center text-white mb-4">
                            Recommended Collections
                          </h2>
                        </div>

                        <h1
                          className={`text-[20px] sm:text-4xl mb-4 text-white ${italiana.className}`}
                        >
                          {currentCategory.name}
                        </h1>
                        <div className="flex flex-col md:flex-row flex-1">
                          {/* List Container */}
                          <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <ul className="space-y-4 text-gray-400">
                              {currentCategory.products.map((product) => (
                                <Link href={`/products/${product.slug}`}>
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
                                    <span className="font-medium cursor-pointer">
                                      {product.product_name}
                                    </span>

                                    <BsArrowRightShort size={18} />
                                  </motion.li>
                                </Link>
                              ))}
                            </ul>
                          </div>

                          {/* Image Container */}
                          <div className="w-full md:w-2/3 pl-0 md:pl-6">
                            <img
                              className="rounded-xl shadow-md w-full h-full object-cover"
                              src={currentCategory.mainImage}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default RecommendedCategories;

"use client";

import { useState, useEffect, useRef } from "react";
import TopSellerProduct from "@/components/Product/TopSellerProduct";
import ProductCard from "@/components/Product/ProductCard";
import SectionHeader from "@/components/Common/SectionHeader";

// Import Swiper core and required modules
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LazyLoadSection from "@/components/LazyLoadingSection";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import custom styles
import "@/app/globals.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function TopSellers() {
  const [bgColor, setBgColor] = useState("#353D32"); // Initial background color
  const sectionRef = useRef(null);
  const swiperRef = useRef(null); // To reference the Swiper instance

  // Scroll effect for background color (optional feature)
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 2;

        if (sectionTop < triggerPoint) {
          setBgColor("#353D32");
        } else {
          setBgColor("#353D32");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers to navigate Swiper slides
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="bg-babout text-white">
      <LazyLoadSection>
        <section
          ref={sectionRef}
          style={{ backgroundColor: bgColor }}
          className="transition-all duration-500 lg:min-h-screen lg:flex lg:items-center overflow-hidden"
        >
          <div className="mx-auto max-w-full px-4 py-16 sm:px-6">
            {/*Navigation buttons */}
            <div className="text-center items-center mb-10">
              <SectionHeader sectionTitle="Shop Our Best Selling Categories" />
              <div className="flex gap-4 justify-center p-1 my-3">
                <button onClick={handlePrev}>
                  <FaArrowLeft className="w-14 h-14 border-4 p-2 rounded-full text-white " />
                </button>
                <button onClick={handleNext}>
                  <FaArrowRight className="w-14 h-14 border-4 p-2 rounded-full text-white " />
                </button>
              </div>
            </div>

            {/* Swiper setup */}
            <div className="swiper-wrapper-center">
              <Swiper
                ref={swiperRef} // Reference to Swiper instance
                slidesPerView={1} // Default view for very small screens
                spaceBetween={0} // Adjust the space between the slides
                pagination={{
                  clickable: true,
                }}
                grabCursor={true} // Enable grab cursor functionality
                breakpoints={{
                  576: {
                    slidesPerView: 2, // Show 2 slides on small screens
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3, // Show 3 slides on tablets
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 5, // Show 4 slides on larger screens
                    spaceBetween: 0,
                  },
                }}
                modules={[Pagination, A11y]} // Include necessary Swiper modules
                className="mySwiper"
              >
                <SwiperSlide className="p-2 mb-6">
                  <ProductCard
                    className="top-seller-product w-64 h-64 "
                    images={[
                      "/assets/products/1/apple.jpg",
                      "/assets/products/1/cardamom.jpg",
                    ]}
                    title="Apple Flavored Tea Bags"
                    range="Flavoured"
                    miniDescription="A delightful blend of apple and fine Ceylon tea."
                    price={4800}
                  />
                </SwiperSlide>
                <SwiperSlide className="p-2 mb-6">
                  <ProductCard
                    className="top-seller-product w-64 h-64 "
                    images={[
                      "/assets/products/1/apple.jpg",
                      "/assets/products/1/cardamom.jpg",
                    ]}
                    title="Apple Flavored Tea Bags"
                    range="Flavoured"
                    miniDescription="A delightful blend of apple and fine Ceylon tea."
                    price={4800}
                  />
                </SwiperSlide>
                <SwiperSlide className="p-2 mb-6">
                  <ProductCard
                    className="top-seller-product w-64 h-64 "
                    images={[
                      "/assets/products/1/apple.jpg",
                      "/assets/products/1/cardamom.jpg",
                    ]}
                    title="Apple Flavored Tea Bags"
                    range="Flavoured"
                    miniDescription="A delightful blend of apple and fine Ceylon tea."
                    price={4800}
                  />
                </SwiperSlide>
                <SwiperSlide className="p-2 mb-6">
                  <ProductCard
                    className="top-seller-product w-64 h-64 "
                    images={[
                      "/assets/products/1/apple.jpg",
                      "/assets/products/1/cardamom.jpg",
                    ]}
                    title="Apple Flavored Tea Bags"
                    range="Flavoured"
                    miniDescription="A delightful blend of apple and fine Ceylon tea."
                    price={4800}
                  />
                </SwiperSlide>
                <SwiperSlide className="p-2 mb-6">
                  <ProductCard
                    className="top-seller-product w-64 h-64 "
                    images={[
                      "/assets/products/1/apple.jpg",
                      "/assets/products/1/cardamom.jpg",
                    ]}
                    title="Apple Flavored Tea Bags"
                    range="Flavoured"
                    miniDescription="A delightful blend of apple and fine Ceylon tea."
                    price={4800}
                  />
                </SwiperSlide>
                <SwiperSlide className="p-2 mb-6">
                  <ProductCard
                    className="top-seller-product w-64 h-64 "
                    images={[
                      "/assets/products/1/apple.jpg",
                      "/assets/products/1/cardamom.jpg",
                    ]}
                    title="Apple Flavored Tea Bags"
                    range="Flavoured"
                    miniDescription="A delightful blend of apple and fine Ceylon tea."
                    price={4800}
                  />
                </SwiperSlide>
                <SwiperSlide className="p-2 mb-6">
                  <ProductCard
                    className="top-seller-product w-64 h-64 "
                    images={[
                      "/assets/products/1/apple.jpg",
                      "/assets/products/1/cardamom.jpg",
                    ]}
                    title="Apple Flavored Tea Bags"
                    range="Flavoured"
                    miniDescription="A delightful blend of apple and fine Ceylon tea."
                    price={4800}
                  />
                </SwiperSlide>
                <SwiperSlide className="p-2 mb-6">
                  <ProductCard
                    className="top-seller-product w-64 h-64 "
                    images={[
                      "/assets/products/1/apple.jpg",
                      "/assets/products/1/cardamom.jpg",
                    ]}
                    title="Apple Flavored Tea Bags"
                    range="Flavoured"
                    miniDescription="A delightful blend of apple and fine Ceylon tea."
                    price={4800}
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="flex flex-wrap justify-center items-center mt-6">
              <button
                className="px-6 py-2 text-sm font-medium text-white-700 transition-all duration-200 
                     border border-gray-200 rounded-md hover:bg-gray-50 hover:text-gray-900 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
              >
                View All
              </button>
            </div>
          </div>
        </section>
      </LazyLoadSection>
    </section>
  );
}

export default TopSellers;

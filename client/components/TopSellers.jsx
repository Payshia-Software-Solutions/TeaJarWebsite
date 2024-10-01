"use client";

import { useState, useEffect, useRef } from "react";
import TopSellerProduct from "@/components/Product/TopSellerProduct";
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
  //
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <LazyLoadSection>
      <section
        ref={sectionRef}
        style={{ backgroundColor: bgColor }}
        className="transition-all duration-500 lg:min-h-screen lg:flex lg:items-center overflow-hidden"
      >
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          {/*Navigation buttons */}
          <div className="text-center items-center">
            <SectionHeader sectionTitle="Top Sellers" />
            <div className="flex gap-4 justify-center p-1 my-3">
              <button onClick={handlePrev}>
                <FaArrowLeft className="w-10 h-10 border-2 rounded-full text-white " />
              </button>
              <button onClick={handleNext}>
                <FaArrowRight className="w-10 h-10 border-2 rounded-full text-white " />
              </button>
            </div>
          </div>

          {/* Swiper setup */}
          <Swiper
            ref={swiperRef} // Reference to Swiper instance
            slidesPerView={1} // Default view for very small screens
            spaceBetween={20} // Adjust the space between the slides
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2, // Show 2 slides on small screens
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3, // Show 3 slides on tablets
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3, // Show 3 slides on larger screens
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, A11y]} // Include necessary Swiper modules
            className="mySwiper"
          >
            <SwiperSlide>
              <TopSellerProduct
                className="top-seller-product"
                imgUrl="/assets/products/1/apple.jpg"
                productName="Apple Flavored Tea Bags"
                range="Flavoured"
                miniDescription="A delightful blend of apple and fine Ceylon tea."
                price="USD 0.3$"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TopSellerProduct
                className="top-seller-product"
                imgUrl="/assets/products/1/cardamom.jpg"
                productName="Cardamom Flavored Tea Bags"
                range="Flavoured"
                miniDescription="Aromatic cardamom spices up this black tea."
                price="USD 0.3$"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TopSellerProduct
                className="top-seller-product"
                imgUrl="/assets/products/1/cinnamon.jpg"
                productName="Cinnamon Flavored Tea Bags"
                range="Flavoured"
                miniDescription="Sweet and spicy cinnamon flavors blend perfectly with tea."
                price="USD 0.3$"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TopSellerProduct
                className="top-seller-product"
                imgUrl="/assets/products/1/apple.jpg"
                productName="Apple Flavored Tea Bags"
                range="Flavoured"
                miniDescription="A delightful blend of apple and fine Ceylon tea."
                price="USD 0.3$"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </LazyLoadSection>
  );
}

export default TopSellers;

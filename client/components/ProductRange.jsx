"use client";
import React from "react";
import ProductRangeCard from "@/components/Product/ProductRangeCard";
import SectionHeader from "@/components/Common/SectionHeader";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProductRange() {
  return (
    <section className="relative flex items-center max-w-screen justify-center transition-all duration-500 h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#393c23] via-green-700 to-[#393c23] bg-cover bg-center overflow-hidden">
      <video
        className={`absolute inset-0 w-full h-screen object-cover transition-all duration-500 ease-in-out`}
        src="/assets/videos/clip-3.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
      ></video>
      {/* Green shading overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#1d1f11] via-green-400 to-[#1d1f11] opacity-70"></div>

      <div className="w-screen">
        <div className="relative mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <header>
            <h2
              className={`text-5xl md:text-6xl lg:text-7xl text-white uppercase text-start`}
            >
              Our Range
            </h2>

            <p className={`mt-2 text-white text-xl text-start`}>
              <span className="great-vibes-regular text-orange-200">
                TESS —
              </span>
              is a brilliant example of centuries-old tea traditions,
              complemented with innovative style and inspiring improvisation in
              creation of tea compositions
            </p>
          </header>

          <div className="mx-auto max-w-screen-2xl py-16 product-range">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              <SwiperSlide>
                <ProductRangeCard
                  coverImg="/assets/products/1/apple.jpg"
                  rangeName="Flavoured Range"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductRangeCard
                  coverImg="/assets/products/1/apple.jpg"
                  rangeName="Exceptional Range"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductRangeCard
                  coverImg="/assets/products/1/apple.jpg"
                  rangeName="Gift Series"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductRangeCard
                  coverImg="/assets/products/1/apple.jpg"
                  rangeName="Tea Ware"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductRangeCard
                  coverImg="/assets/products/1/apple.jpg"
                  rangeName="Flavoured"
                />
              </SwiperSlide>
              <SwiperSlide>
                <ProductRangeCard
                  coverImg="/assets/products/1/apple.jpg"
                  rangeName="Flavoured"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductRange;

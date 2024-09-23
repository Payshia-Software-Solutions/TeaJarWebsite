"use client";

import React from "react";
import Commentcard from "@/components/CommentCard/Commentcard";
import { Italiana, Julius_Sans_One } from "@next/font/google";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper modules
import { Pagination } from "swiper/modules";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});
const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

function Happycustormer() {
  return (
    <section className="bg-babout">
      <div className="text-white text-center">
        <div className={italiana.className}>
          <h2 className="text-white text-[40px] font-normal p-4">
            Happy Customer
          </h2>
        </div>
        <div className={juliusSansOne.className}>
          <p className="leading-8 text-[18px]">
            Hear what our customers have to say about us
          </p>
        </div>
      </div>

      {/* Swiper slider with pagination */}
      <div className="p-16">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          // Set different slidesPerView for different screen sizes
          slidesPerView={1} // Default for smaller screens
          breakpoints={{
            640: { slidesPerView: 1 }, // For small screens (mobile)
            768: { slidesPerView: 2 }, // For medium screens (tablet)
            1024: { slidesPerView: 3 }, // For large screens (desktop)
          }}
        >
          <SwiperSlide>
            <Commentcard />
          </SwiperSlide>
          <SwiperSlide>
            <Commentcard />
          </SwiperSlide>
          <SwiperSlide>
            <Commentcard />
          </SwiperSlide>
          <SwiperSlide>
            <Commentcard />
          </SwiperSlide>
          <SwiperSlide>
            <Commentcard />
          </SwiperSlide>
          <SwiperSlide>
            <Commentcard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Happycustormer;

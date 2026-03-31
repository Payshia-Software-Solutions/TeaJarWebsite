"use client";

import React from "react";
import Commentcard from "@/components/CommentCard/Commentcard";
import { Italiana, Julius_Sans_One } from "next/font/google";

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
      <style jsx>{`
        .swiper-pagination {
          bottom: -20px; /* Move the pagination down */
        }
        .swiper-pagination-bullet {
          background-color: #4ade80; /* Custom bullet color */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #22c55e; /* Active bullet color */
        }
      `}</style>
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
      <div className="p-14">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide className="p-2 mb-6">
            <Commentcard
              imgUrl="https://randomuser.me/api/portraits/men/97.jpg"
              comment="This product is amazing! It exceeded all my expectations and I highly recommend it."
              time="2 hours ago"
              custormer="John Doe"
            />
          </SwiperSlide>
          <SwiperSlide className="p-2 mb-6">
            <Commentcard
              imgUrl="https://randomuser.me/api/portraits/men/97.jpg"
              comment="Good value for the price. The quality is decent and shipping was fast."
              time="1 day ago"
              custormer="Jane Smith"
            />
          </SwiperSlide>
          <SwiperSlide className="p-2  mb-6">
            <Commentcard
              imgUrl="https://randomuser.me/api/portraits/men/97.jpg"
              comment="Not very satisfied with the product. It didn’t match the description properly."
              time="3 days ago"
              custormer="Michael Johnson"
            />
          </SwiperSlide>
          <SwiperSlide className="p-2 mb-6">
            <Commentcard
              imgUrl="https://randomuser.me/api/portraits/men/97.jpg"
              comment="Not very satisfied with the product. It didn’t match the description properly."
              time="3 days ago"
              custormer="Michael Johnson"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Happycustormer;



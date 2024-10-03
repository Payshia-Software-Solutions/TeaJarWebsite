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
          // Set different slidesPerView for different screen sizes
          slidesPerView={1} // Default for smaller screens
          breakpoints={{
            640: { slidesPerView: 1 }, // For small screens (mobile)
            768: { slidesPerView: 2 }, // For medium screens (tablet)
            1024: { slidesPerView: 3 }, // For large screens (desktop)
          }}
        >
          <SwiperSlide>
            <Commentcard
              imgUrl="https://randomuser.me/api/portraits/men/97.jpg"
              comment="This product is amazing! It exceeded all my expectations and I highly recommend it."
              time="2 hours ago"
              custormer="John Doe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Commentcard
              imgUrl="https://randomuser.me/api/portraits/men/97.jpg"
              comment="Good value for the price. The quality is decent and shipping was fast."
              time="1 day ago"
              custormer="Jane Smith"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Commentcard
              imgUrl="https://randomuser.me/api/portraits/men/97.jpg"
              comment="Not very satisfied with the product. It didn’t match the description properly."
              time="3 days ago"
              custormer="Michael Johnson"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Commentcard
              imgUrl="https://randomuser.me/api/portraits/men/97.jpg"
              comment="Absolutely love it! Will be purchasing more in the future."
              time="5 days ago"
              custormer="Emily Davis"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Commentcard
              imgUrl="https://randomuser.me/api/portraits/men/97.jpg"
              comment="The customer service was helpful, but the product was delayed in shipping."
              time="1 week ago"
              custormer="Chris Lee"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Commentcard
              imgUrl="https://randomuser.me/api/portraits/men/97.jpg"
              comment="The customer service was helpful, but the product was delayed in shipping."
              time="1 week ago"
              custormer="Chris Lee"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Happycustormer;

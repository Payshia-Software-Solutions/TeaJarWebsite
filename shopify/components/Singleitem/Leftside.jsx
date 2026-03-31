"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

// Import custom styles if needed
import "@/app/globals.css"; // Use your global styles if required

function Leftside() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className=" flex flex-col items-center  space-y-4 mt-7">
      {/* Main Swiper - Large Image Display */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Navigation]}
        className="mainSwiper relative w-full max-w-2xl"
      >
        <SwiperSlide>
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Main Image 1"
            className="w-full md:h-[500px]  h-[400px] object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Main Image 2"
            className="w-full md:h-[500px]  h-[400px] object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Main Image 3"
            className="w-full  md:h-[500px]  h-[400px] object-cover rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Main Image 4"
            className="w-full  md:h-[500px]  h-[400px] object-cover rounded-md"
          />
        </SwiperSlide>
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="thumbSwiper grid grid-cols-4 gap-1 max-w-2xl"
      >
        <SwiperSlide>
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Thumbnail 1"
            className="w-[140px] h-[80px] object-cover border border-gray-200 rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Thumbnail 2"
            className="w-[140px] h-[80px] object-cover border border-gray-200 rounded-md"
          />
        </SwiperSlide>
        {/*test */}
        <SwiperSlide>
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Thumbnail 3"
            className="w-[140px] h-[80px] object-cover border border-gray-200 rounded-md"
          />
        </SwiperSlide>
        {/*test 02 */}
        <SwiperSlide>
          <img
            src="/assets/images/outlet/otmain.png"
            alt="Thumbnail 4"
            className="w-[140px] h-[80px] object-cover border border-gray-200 rounded-md"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Leftside;

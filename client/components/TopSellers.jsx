"use client";

import { useState, useEffect, useRef } from "react";

import TopSellerProduct from "@/components/Product/TopSellerProduct";
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
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TopSellers() {
  const [bgColor, setBgColor] = useState("white"); // Initial background color
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 2; // Change this value to control when the color changes

        if (sectionTop < triggerPoint) {
          setBgColor("#f5faf9"); // Change to the desired background color
        } else {
          setBgColor("white"); // Revert to the original color
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
      className="transition-all duration-500 lg:min-h-screen lg:flex lg:items-center overflow-hidden"
    >
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          sectionTitle="Top Sellers"
          sectionHighlight="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum similique quos fugit nobis labore est voluptate in aliquam voluptates quod nulla, odio repudiandae fugiat, alias eos consectetur, repellendus exercitationem earum!"
        />

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          keyboard={{
            enabled: true,
          }}
          mousewheel={{
            thresholdDelta: 70,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="my-14"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
        >
          <SwiperSlide>
            <TopSellerProduct
              imgUrl="/assets/products/1/apple.jpg"
              productName="Apple Flavored Tea Bags"
              range="Flavoured"
              miniDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quis, aperiam nisi omnis voluptas iusto repudiandae optio atque neque cupiditate doloribus at mollitia animi ad a sint, quae magnam laboriosam?"
            />
          </SwiperSlide>

          <SwiperSlide>
            <TopSellerProduct
              imgUrl="/assets/products/1/cardamom.jpg"
              productName="Cardamom Flavored Tea Bags"
              range="Flavoured"
              miniDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quis, aperiam nisi omnis voluptas iusto repudiandae optio atque neque cupiditate doloribus at mollitia animi ad a sint, quae magnam laboriosam?"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TopSellerProduct
              imgUrl="/assets/products/1/cinnamon.jpg"
              productName="Cinnamon Flavored Tea Bags"
              range="Flavoured"
              miniDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quis, aperiam nisi omnis voluptas iusto repudiandae optio atque neque cupiditate doloribus at mollitia animi ad a sint, quae magnam laboriosam?"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TopSellerProduct
              imgUrl="/assets/products/1/ginger.jpg"
              productName="Ginger Flavored Tea Bags"
              range="Flavoured"
              miniDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quis, aperiam nisi omnis voluptas iusto repudiandae optio atque neque cupiditate doloribus at mollitia animi ad a sint, quae magnam laboriosam?"
            />
          </SwiperSlide>
          <SwiperSlide>
            <TopSellerProduct
              imgUrl="/assets/products/1/ginger.jpg"
              productName="Ginger Flavored Tea Bags"
              range="Flavoured"
              miniDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quis, aperiam nisi omnis voluptas iusto repudiandae optio atque neque cupiditate doloribus at mollitia animi ad a sint, quae magnam laboriosam?"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default TopSellers;

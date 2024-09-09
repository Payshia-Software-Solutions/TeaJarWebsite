"use client";

import { useState, useEffect, useRef } from "react";
import TopSellerProduct from "@/components/Product/TopSellerProduct";
import SectionHeader from "@/components/Common/SectionHeader";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LazyLoadSection from "@/components/LazyLoadingSection";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import custom styles
import "@/app/globals.css"; // Add this for custom navigation styles

function TopSellers() {
  const [bgColor, setBgColor] = useState("#353D32"); // Initial background color
  const sectionRef = useRef(null);

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

  return (
    <LazyLoadSection>
      <section
        ref={sectionRef}
        style={{ backgroundColor: bgColor }}
        className="transition-all duration-500 lg:min-h-screen lg:flex lg:items-center overflow-hidden"
      >
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionHeader
              sectionTitle="Top Sellers"
              sectionHighlight="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum similique quos fugit nobis labore est voluptate in aliquam voluptates quod nulla, odio repudiandae fugiat, alias eos consectetur, repellendus exercitationem earum!"
            />

            {/* Custom navigation buttons */}
            <div className="swiper-navigation-container">
              <div className="swiper-button-prev custom-nav-arrow"></div>
              <div className="swiper-button-next custom-nav-arrow"></div>
            </div>
          </div>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            initialSlide={1}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 2,
              slideShadows: true,
            }}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            modules={[EffectCoverflow, Navigation, Pagination, A11y]}
            className="my-14"
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            <SwiperSlide>
              <TopSellerProduct
                imgUrl="/assets/products/1/apple.jpg"
                productName="Apple Flavored Tea Bags"
                range="Flavoured"
                miniDescription="A delightful blend of apple and fine Ceylon tea."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TopSellerProduct
                imgUrl="/assets/products/1/cardamom.jpg"
                productName="Cardamom Flavored Tea Bags"
                range="Flavoured"
                miniDescription="Aromatic cardamom spices up this black tea."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TopSellerProduct
                imgUrl="/assets/products/1/cinnamon.jpg"
                productName="Cinnamon Flavored Tea Bags"
                range="Flavoured"
                miniDescription="Sweet and spicy cinnamon flavors blend perfectly with tea."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </LazyLoadSection>
  );
}

export default TopSellers;

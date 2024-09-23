"use client";

import { useState, useEffect, useRef } from "react";
import TopSellerProduct from "@/components/Product/TopSellerProduct";
import SectionHeader from "@/components/Common/SectionHeader";

// Import Swiper core and required modules
import { Pagination, A11y, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LazyLoadSection from "@/components/LazyLoadingSection";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import custom styles (can be replaced with local styles if needed)
import "@/app/globals.css"; 

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
          </div>

          {/* Swiper setup */}
          <Swiper
            slidesPerView={1} // Default view for very small screens
            spaceBetween={20} // Adjust the space between the slides
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // For screens >= 576px (small screens like smartphones)
              576: {
                slidesPerView: 2, // Show 2 slides
                spaceBetween: 20,
              },
              // For screens >= 768px (tablets or medium screens)
              768: {
                slidesPerView: 3, // Show 3 slides
                spaceBetween: 30,
              },
              // For screens >= 1024px (large screens)
              1024: {
                slidesPerView: 3, // Show 3 slides with more space between them
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
              />
            </SwiperSlide>
            <SwiperSlide>
              <TopSellerProduct
                className="top-seller-product"
                imgUrl="/assets/products/1/cardamom.jpg"
                productName="Cardamom Flavored Tea Bags"
                range="Flavoured"
                miniDescription="Aromatic cardamom spices up this black tea."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TopSellerProduct
                className="top-seller-product"
                imgUrl="/assets/products/1/cinnamon.jpg"
                productName="Cinnamon Flavored Tea Bags"
                range="Flavoured"
                miniDescription="Sweet and spicy cinnamon flavors blend perfectly with tea."
              />
            </SwiperSlide>
            <SwiperSlide>
              <TopSellerProduct
                className="top-seller-product"
                imgUrl="/assets/products/1/apple.jpg"
                productName="Apple Flavored Tea Bags"
                range="Flavoured"
                miniDescription="A delightful blend of apple and fine Ceylon tea."
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </LazyLoadSection>
  );
}

export default TopSellers;

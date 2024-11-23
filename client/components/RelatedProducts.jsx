"use client";

import { useState, useEffect, useRef } from "react";
import TopSellerProduct from "@/components/Product/TopSellerProduct";
import ProductCard from "@/components/Product/ProductCard";
import SectionHeader from "@/components/Common/SectionHeader";
import Link from "next/link";
import config from "@/config";

// Import Swiper core and required modules
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LazyLoadSection from "@/components/LazyLoadingSection";
import { Italiana, Julius_Sans_One } from "next/font/google";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import custom styles
import "@/app/globals.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});
const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});
function RelatedProducts() {
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

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${config.API_BASE_URL}/products`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products");
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
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

  console.log(products);

  return (
    <section className="text-black">
      <LazyLoadSection>
        <section
          ref={sectionRef}
          className="transition-all duration-500 py-9 lg:flex lg:items-center overflow-hidden"
        >
          <div className="max-w-full pl-4 sm:pl-6 mx-auto">
            {/*Navigation buttons */}
            <h2
              className={`text-[28px] md:text-[44px] mb-6 text-black font-bold`}
            >
              Related Products
            </h2>
            {/* <div className="flex gap-4 justify-center p-1 my-3">
                <button onClick={handlePrev}>
                  <FaArrowLeft className="w-14 h-14 border-4 p-2 rounded-full text-white " />
                </button>
                <button onClick={handleNext}>
                  <FaArrowRight className="w-14 h-14 border-4 p-2 rounded-full text-white " />
                </button>
              </div> */}
          </div>
          {/* Swiper setup */}
          <div className="swiper-wrapper-center">
            <Swiper
              ref={swiperRef} // Reference to Swiper instance
              slidesPerView={1.5} // Show 1 full slide and half of the next slide
              spaceBetween={0} // Adjust spacing between slides as needed
              // pagination={{
              //   clickable: true,
              // }}

              pagination={false}
              grabCursor={true} // Enable grab cursor functionality
              breakpoints={{
                576: {
                  slidesPerView: 2.5, // Maintain same behavior on small screens
                  spaceBetween: 4,
                },
                768: {
                  slidesPerView: 3.5, // Show 2 full slides and half of the next on tablets
                  spaceBetween: 4,
                },
                1024: {
                  slidesPerView: 4.5, // Show 3 full slides and half of the next on larger screens
                  spaceBetween: 4,
                },
              }}
              modules={[Pagination, A11y]} // Include necessary Swiper modules
              className="mySwiper"
            >
              {products.map((singleitem) => (
                <SwiperSlide key={singleitem.product_id} className="p-2 mb-6">
                  <ProductCard
                    key={singleitem.product_code} // Ensure to use a unique key
                    title={singleitem.product_name}
                    slug={singleitem.slug}
                    id={singleitem.product_id}
                    price={+singleitem.selling_price}
                    images={[
                      "https://kdu-admin.payshia.com/pos-system/assets/images/products/" +
                        singleitem.product_id +
                        "/" +
                        singleitem.image_path,
                      "/assets/products/1/cardamom.jpg",
                    ]}
                    Rate={"(5.6)"}
                    category={singleitem.category_id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </LazyLoadSection>
    </section>
  );
}

export default RelatedProducts;

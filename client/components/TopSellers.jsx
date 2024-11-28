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

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const productIds = [5, 11, 35, 20, 15, 43, 5, 9];
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${config.API_BASE_URL}/products`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        // Filter and sort products by productIds order
        const filteredProducts = data
          .filter((product) => productIds.includes(product.product_id))
          .sort(
            (a, b) =>
              productIds.indexOf(a.product_id) -
              productIds.indexOf(b.product_id)
          );

        setProducts(filteredProducts);
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

  const [fallbackImages, setFallbackImages] = useState({});
  const defaultFrontImage = "/assets/loadings.gif";
  const defaultOtherImage = "/assets/loadings.gif";

  useEffect(() => {
    const fetchFallbackImages = async () => {
      const images = { ...fallbackImages }; // Preserve existing images to avoid redundant fetching
      const fetchRequests = products.map(async (product) => {
        if (!images[product.product_id]) {
          try {
            const response = await fetch(
              `${config.API_BASE_URL}/product-images/get-by-product/${product.product_id}`
            );

            if (response.ok) {
              const data = await response.json();

              const otherImage = data.find(
                (img) => img.image_prefix === "Other"
              );

              images[product.product_id] = [
                `${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${product.product_id}/${product.image_path}`,
                otherImage
                  ? `${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${product.product_id}/${otherImage.image_path}`
                  : `${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${product.product_id}/${product.image_path}`,
              ];
            } else {
              images[product.product_id] = [
                `${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${product.product_id}/${product.image_path}`,
                `${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${product.product_id}/${product.image_path}`,
              ];
            }
          } catch (error) {
            console.error(
              `Error fetching fallback images for product ${product.product_id}:`,
              error
            );
            images[product.product_id] = [defaultFrontImage, defaultOtherImage];
          }
        }
      });

      await Promise.all(fetchRequests); // Wait for all fetches to complete
      setFallbackImages(images);
    };

    fetchFallbackImages();
  }, [products]);

  return (
    <section className="bg-babout text-white">
      <LazyLoadSection>
        <section
          ref={sectionRef}
          style={{ backgroundColor: bgColor }}
          className="transition-all duration-500 py-9 lg:flex lg:items-center overflow-hidden"
        >
          <div className="max-w-full pl-4 sm:pl-6 mx-auto">
            {/*Navigation buttons */}
            <div className="text-center items-center">
              <SectionHeader sectionTitle="Shop Our Best Selling Products" />
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
            <div className="swiper-wrapper-center-home">
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
                {products.map((singleitem, index) => {
                  const images = fallbackImages[singleitem.product_id] || [
                    defaultFrontImage,
                    defaultOtherImage,
                  ];
                  return (
                    <SwiperSlide
                      key={singleitem.product_id}
                      className="p-2 mb-6"
                    >
                      <ProductCard
                        key={singleitem.product_code}
                        title={singleitem.product_name}
                        slug={singleitem.slug}
                        id={singleitem.product_id}
                        price={+singleitem.selling_price}
                        images={images}
                        Rate={"(5.6)"}
                        category={singleitem.category_id}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div className="max-w-full flex justify-center px-4 sm:px-6 mx-auto">
              <Link href="shop" className="">
                <button
                  className="w-full md:w-auto px-6 py-2 text-sm font-medium text-white-700 transition-all duration-200 
                     border border-gray-200 rounded-md hover:bg-gray-50 hover:text-gray-900 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                >
                  Shop More
                </button>
              </Link>
            </div>
          </div>
        </section>
      </LazyLoadSection>
    </section>
  );
}

export default TopSellers;

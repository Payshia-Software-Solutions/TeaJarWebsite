import { useState, useEffect, useRef } from "react";
import ProductCard from "@/components/Product/ProductCard";
import LazyLoadSection from "@/components/LazyLoadingSection";
import config from "@/config";

// Import custom styles
import "@/app/globals.css";
// Import Swiper core and required modules
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function RelatedProducts() {
  const [bgColor, setBgColor] = useState("#353D32"); // Initial background color
  const sectionRef = useRef(null);
  const swiperRef = useRef(null); // To reference the Swiper instance

  // Scroll effect for background color
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
  const [fallbackImages, setFallbackImages] = useState({});
  const defaultFrontImage = "/assets/loadings.gif";
  const defaultOtherImage = "/assets/loadings.gif";

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

  // Fetch fallback images
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
    <section className="text-black">
      <LazyLoadSection>
        <section
          ref={sectionRef}
          className="transition-all duration-500 py-9 lg:flex lg:items-center overflow-hidden"
        >
          <div>
            <div className="max-w-full pl-2 sm:pl-3 mx-auto">
              <h2 className="text-[28px] md:text-[44px] mb-2 md:mb-4 text-black font-bold">
                Related Products
              </h2>
            </div>
            <div className="swiper-wrapper-center">
              <Swiper
                ref={swiperRef}
                slidesPerView={1.5}
                spaceBetween={0}
                pagination={false}
                grabCursor={true}
                breakpoints={{
                  576: {
                    slidesPerView: 2.5,
                    spaceBetween: 4,
                  },
                  768: {
                    slidesPerView: 3.5,
                    spaceBetween: 4,
                  },
                  1024: {
                    slidesPerView: 4.5,
                    spaceBetween: 4,
                  },
                }}
                modules={[Pagination, A11y]}
                className="mySwiper"
              >
                {products
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 10)
                  .map((singleitem) => {
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
                          specialPromo={singleitem.special_promo}
                          specialPromoType={singleitem.special_promo_type}
                          stockStatus={singleitem.stock_status}
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </section>
      </LazyLoadSection>
    </section>
  );
}

export default RelatedProducts;

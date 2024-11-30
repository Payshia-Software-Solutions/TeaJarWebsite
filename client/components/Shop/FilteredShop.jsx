"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SideBar from "@/components/Shop/SideBar";
import ProductSectionHeader from "./Layouts/ProductSectionHeader";
import ProductCard from "@/components/Product/ProductCard";
import config from "@/config";

function FilteredShop() {
  const searchParams = useSearchParams(); // Get the search params using useSearchParams
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [fallbackImages, setFallbackImages] = useState({});
  const defaultFrontImage = "/assets/loadings.gif";
  const defaultOtherImage = "/assets/loadings.gif";

  useEffect(() => {
    if (!searchParams) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const queryString = searchParams.toString();
        // console.log(queryString);
        const response = await fetch(
          `${config.API_BASE_URL}/products/filter-by?${queryString}`
        );
        const data = await response.json();
        setFilteredProducts(data); // Update the state with the fetched products
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (searchParams.toString()) {
      fetchProducts();
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchFallbackImages = async () => {
      const images = { ...fallbackImages }; // Preserve existing images to avoid redundant fetching
      const fetchRequests = filteredProducts.map(async (product) => {
        if (!images[product.product_id]) {
          try {
            const response = await fetch(
              `${config.API_BASE_URL}/product-images/get-by-product/${product.product_id}`
            );

            if (response.ok) {
              const data = await response.json();
              const frontImage = data.find(
                (img) => img.image_prefix === "Front Image"
              );
              const otherImage = data.find(
                (img) => img.image_prefix === "Other"
              );

              images[product.product_id] = [
                frontImage
                  ? `${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${product.product_id}/${frontImage.image_path}`
                  : `${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${product.product_id}/${product.image_path}`,
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
  }, [filteredProducts]);

  // console.log(fallbackImages);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <section className="h-full pt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <div className="sticky top-10">
              {/* Sidebar for filtering options */}
              <SideBar />
            </div>
          </div>

          <div className="md:col-span-9">
            {/* Header Section */}
            <ProductSectionHeader
              title="Filtered Products"
              description="Discover products tailored to your selection"
            />

            {/* Product List */}
            <div className="bg-gray-100 bg-opacity-10 rounded-2xl  my-3">
              <hr className="border-black border-t-2 mx-auto mb-6" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-2">
                {loading && <p>Loading products...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && filteredProducts.length === 0 && (
                  <p>No products match your filters.</p>
                )}

                {!loading &&
                  filteredProducts.map((singleitem) => {
                    const images = fallbackImages[singleitem.product_id] || [
                      defaultFrontImage,
                      defaultOtherImage,
                    ];

                    return (
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
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}

export default FilteredShop;

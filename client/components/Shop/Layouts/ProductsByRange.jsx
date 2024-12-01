"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/Product/ProductCard";
import { Italiana } from "next/font/google";
import config from "@/config";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

function ProductsByRange({ range_id, searchQuery = "" }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rangeName, setRangeName] = useState("Collection Name");
  const [rangeNameError, setRangeNameError] = useState(null);
  const [fallbackImages, setFallbackImages] = useState({});

  const defaultFrontImage = "/assets/loadings.gif";
  const defaultOtherImage = "/assets/loadings.gif";

  useEffect(() => {
    const fetchRangeName = async () => {
      try {
        const res = await fetch(
          `${config.API_BASE_URL}/departments/${range_id}`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setRangeName(data.department_name);
      } catch (error) {
        setRangeNameError("Failed to fetch range name.");
        console.error("Failed to fetch range name:", error);
      }
    };
    fetchRangeName();
  }, [range_id]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${config.API_BASE_URL}/products/get-by-department/${range_id}`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch products.");
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [range_id]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, products]);

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

  return (
    <div className="bg-gray-100 bg-opacity-10 rounded-2xl mt-10">
      <div className={italiana.className}>
        <h2 className="text-3xl m-3 text-black font-bold">
          {rangeNameError || rangeName}
        </h2>
      </div>
      <hr className="border-black border-t-2 mx-auto mb-6" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-3">
        {loading && <p>Loading products...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && filteredProducts.length === 0 && (
          <p>No products match your search.</p>
        )}
        {filteredProducts.map((singleitem) => {
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
  );
}

export default ProductsByRange;

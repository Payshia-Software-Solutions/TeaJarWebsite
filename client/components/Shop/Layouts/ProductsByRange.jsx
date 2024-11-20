"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/Product/ProductCard";
// Font imports
import { Italiana, Julius_Sans_One } from "next/font/google";
import config from "@/config";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

function ProductsByRange({ range_id, searchQuery = "" }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [rangeName, setRangeName] = useState("Range Name");
  const [rangeNameError, setRangeNameError] = useState(null);

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
    // Filter products based on searchQuery
    setFilteredProducts(
      products.filter((product) =>
        product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, products]);

  const [images, setImages] = useState([]);

  return (
    <div className="bg-gray-100 bg-opacity-10 rounded-2xl p-4 my-3">
      <div className={italiana.className}>
        <h2 className="text-3xl m-3 text-black font-bold">
          {rangeNameError || rangeName}
        </h2>
      </div>
      <hr className="border-black border-t-2 mx-auto mb-6" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
        {loading && <p>Loading products...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && filteredProducts.length === 0 && (
          <p>No products match your search.</p>
        )}
        {filteredProducts.map((singleitem) => (
          <ProductCard
            key={singleitem.product_code}
            title={singleitem.product_name}
            slug={singleitem.slug}
            id={singleitem.product_id}
            price={+singleitem.selling_price}
            images={[
              `${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${singleitem.product_id}/${singleitem.image_path}`,
              "/assets/products/1/cardamom.jpg",
            ]}
            Rate={"(5.6)"}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsByRange;

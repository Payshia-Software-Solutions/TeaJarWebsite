"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Added missing import
import SideBar from "@/components/Shop/SideBar"; // Assuming this is correct
import ProductSectionHeader from "./Layouts/ProductSectionHeader"; // Assuming this is correct
import ProductCard from "@/components/Product/ProductCard";

// Font imports
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

// Backend connection
function FilteredShop() {
  const [searchQuery, setSearchQuery] = useState(""); // Added to manage search input
  const [filteredProducts, setFilteredProducts] = useState([]); // Renamed to match the state variable
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { query } = router; // Get query parameters from the URL

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Fetch products based on query parameters (for filtering)
        const response = await fetch(
          `https://kduserver.payshia.com/products/?${new URLSearchParams(
            query
          ).toString()}`
        );
        const data = await response.json();
        setFilteredProducts(data); // Corrected the state update name
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]); // Fetch products whenever the query changes

  return (
    <section className="h-full">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <div className="sticky top-10">
              <SideBar />
            </div>
          </div>

          <div className="md:col-span-9">
            {/* Search Box */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <ProductSectionHeader
              title="Tea by Range"
              description="Your virtual guide to tea! Discover all types of tea, from herbal infusions to black teas and matcha."
            />

            {/* Filtered Products */}
            <div className="bg-gray-100 bg-opacity-10 rounded-2xl p-4 my-3">
              <div className={italiana.className}>
                <h2 className="text-3xl m-3 text-black font-bold">
                  Filtered Products
                </h2>
              </div>
              <hr className="border-black border-t-2 mx-auto mb-6" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
                {loading && <p>Loading products...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && filteredProducts.length === 0 && (
                  <p>No products match your search.</p>
                )}
                {!loading &&
                  filteredProducts
                    .filter((product) =>
                      // Filter products based on search query (simple local search)
                      product.product_name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    )
                    .map((singleitem) => (
                      <ProductCard
                        key={singleitem.product_code}
                        title={singleitem.product_name}
                        slug={singleitem.slug}
                        id={singleitem.product_id}
                        price={+singleitem.selling_price}
                        images={[
                          `https://kdu-admin.payshia.com/pos-system/assets/images/products/${singleitem.product_id}/${singleitem.image_path}`,
                          "/assets/products/1/cardamom.jpg",
                        ]}
                        Rate={"(5.6)"}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FilteredShop;

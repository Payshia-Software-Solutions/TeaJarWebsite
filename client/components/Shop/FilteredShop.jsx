"use client"; // Ensure this is client-side

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SideBar from "@/components/Shop/SideBar";
import ProductSectionHeader from "./Layouts/ProductSectionHeader";
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

// Client-side only component using Suspense
function FilteredShop() {
  const searchParams = useSearchParams(); // Get the search params using useSearchParams
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchParams) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const queryString = searchParams.toString();
        const response = await fetch(
          `https://kduserver.payshia.com/products/filter-by?${queryString}`
        );
        const data = await response.json();
        setFilteredProducts(data);
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

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <section className="h-full">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3">
              <div className="sticky top-10">
                <SideBar />
              </div>
            </div>

            <div className="md:col-span-9">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <ProductSectionHeader title="Filtered Products" description="" />

              <div className="bg-gray-100 bg-opacity-10 rounded-2xl p-4 my-3">
                <hr className="border-black border-t-2 mx-auto mb-6" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-2">
                  {loading && <p>Loading products...</p>}
                  {error && <p>{error}</p>}
                  {!loading && !error && filteredProducts.length === 0 && (
                    <p>No products match your search.</p>
                  )}
                  {!loading &&
                    filteredProducts
                      .filter((product) =>
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
    </Suspense>
  );
}

export default FilteredShop;

"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SideBar from "@/components/Shop/SideBar";
import ProductSectionHeader from "./Layouts/ProductSectionHeader";
import ProductCard from "@/components/Product/ProductCard";

function FilteredShop() {
  const searchParams = useSearchParams(); // Get the search params using useSearchParams
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchParams) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const queryString = searchParams.toString();
        console.log(queryString);
        const response = await fetch(
          `https://kduserver.payshia.com/products/filter-by?${queryString}`
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

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <section className="h-full pt-20">
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
            <div className="bg-gray-100 bg-opacity-10 rounded-2xl p-4 my-3">
              <hr className="border-black border-t-2 mx-auto mb-6" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-2">
                {loading && <p>Loading products...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && filteredProducts.length === 0 && (
                  <p>No products match your filters.</p>
                )}
                {!loading &&
                  filteredProducts.map((product) => (
                    <div>
                      <ProductCard
                        key={product.product_code}
                        title={product.product_name}
                        slug={product.slug}
                        id={product.product_id}
                        price={+product.selling_price}
                        images={[
                          `https://kdu-admin.payshia.com/pos-system/assets/images/products/${product.product_id}/${product.image_path}`,
                        ]}
                        category={product.category_id}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
}

export default FilteredShop;

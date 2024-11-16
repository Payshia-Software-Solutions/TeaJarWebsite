"use client";

import React, { useEffect, useState } from "react";
import ItemCard from "@/components/Shop/ItemCard";
import { useRouter } from "next/router";

import ProductCard from "@/components/Product/ProductCard";
import SideBar from "@/components/Shop/SideBar";
import config from "@/config";

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
function Shop() {
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
        setError(
          `Failed to fetch products using ${config.API_BASE_URL}/products`
        );
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className=" h-full ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
        <div className="md:col-span-3">
          <div className="sticky top-10">
            <SideBar />
          </div>
        </div>

        <div className="md:col-span-9">
          <div className="text-black text-center p-3  bg-gray-200 mb-3">
            <div className={italiana.className}>
              <h2 className="text-3xl md:text-5xl">Tea by Type</h2>
            </div>
            <div className={juliusSansOne.className}>
              <p className="m-3 text-sm md:text-base">
                Your virtual guide to tea! Discover all types of tea, from
                herbal infusions to black teas and match.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 bg-opacity-10 rounded-2xl p-4 my-3">
            <div className={italiana.className}>
              <h2 className="text-3xl m-3 text-black font-bold">Herbal</h2>
            </div>
            <hr className="border-black border-t-2 mx-auto mb-6" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
              {loading && <p>Loading products...</p>}
              {error && <p>{error}</p>}
              {products.map((singleitem) => (
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
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;

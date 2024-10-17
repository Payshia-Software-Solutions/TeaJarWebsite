"use client";

import React, { useEffect, useState } from "react";
import ItemCard from "@/components/Shop/ItemCard";
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

// Shop component
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
        setError("Failed to fetch products");
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
        <div className="md:col-span-3">
          <SideBar />
        </div>

        <div className="md:col-span-9">
          <div className="text-black text-center p-3 bg-gray-200 mb-3">
            <div className={italiana.className}>
              <h2 className="text-3xl md:text-5xl">Tea by Type</h2>
            </div>
            <div className={juliusSansOne.className}>
              <p className="m-3 text-sm md:text-base">
                Your virtual guide to tea! Discover all types of tea, from herbal infusions to black teas and matcha.
              </p>
            </div>
          </div>

          <div>
            <div className={italiana.className}>
              <h2 className="text-3xl m-3 font-bold">Herbal</h2>
            </div>
            <hr className="border-black border-t-2 mx-auto mb-6" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
              {loading && <p>Loading products...</p>}
              {error && <p>{error}</p>}
              {products.map((singleitem) => (
                <ItemCard
                  key={singleitem.product_code} // Ensure to use a unique key
                  ProductName={singleitem.product_name}
                  price={"Rs ." + singleitem.selling_price}
                  imgURL={singleitem.image_path}
                />
              ))}
            </div>
          </div>

          <div className="p-1 my-3">
            <div className={italiana.className}>
              <h2 className="text-3xl m-3 font-bold">Green</h2>
            </div>
            <hr className="border-black border-t-2 mx-auto mb-6" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
              {/* Replace these with actual items or pass default props */}
              <ItemCard ProductName="Placeholder Tea" price={500} imgURL="/path/to/image.jpg" />
              <ItemCard ProductName="Placeholder Tea" price={500} imgURL="/path/to/image.jpg" />
              <ItemCard ProductName="Placeholder Tea" price={500} imgURL="/path/to/image.jpg" />
              <ItemCard ProductName="Placeholder Tea" price={500} imgURL="/path/to/image.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;

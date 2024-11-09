"use client"; // This makes sure the component runs as a client component

import React from "react";
import ItemCard from "@/components/Shop/ItemCard";
import ProductCard from "@/components/Product/ProductCard";
import SideBar from "@/components/Shop/SideBar";

//font import
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});

function shop() {
  return (
    <section className="bg-white">
      {/* Main container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
        {/* Sidebar */}
        <div className="md:col-span-3">
          <SideBar />
        </div>

        {/* Items section */}
        <div className="md:col-span-9">
          <div className="text-black text-center p-3 bg-gray-200 mb-3">
            <div className={italiana.className}>
              <h2 className="text-3xl md:text-5xl">Tea by Type</h2>
            </div>
            <div className={juliusSansOne.className}>
              <p className="m-3 text-sm md:text-base">
                Your virtual guide to tea! Discover all types of tea, from
                herbal infusions to black teas and matcha.
              </p>
            </div>
          </div>

          {/* Grid of items */}
          <div>
            <div className={italiana.className}>
              <h2 className="text-3xl  m-3 font-bold  ">Herbel</h2>
            </div>
            <hr className="border-black border-t-2 mx-auto  mb-6" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>

          {/*another item section  */}
          <div className="p-1 my-3">
            <div className={italiana.className}>
              <h2 className="text-3xl  m-3 font-bold  ">Green</h2>
            </div>
            <hr className="border-black border-t-2 mx-auto  mb-6" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default shop;

"use client";

import React, { useEffect, useState } from "react";
import SideBar from "@/components/Shop/SideBar";
import config from "@/config";

// Components
import ProductSectionHeader from "./Layouts/ProductSectionHeader";
import ProductsByRange from "./Layouts/ProductsByRange";

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
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="h-full">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <div className="sticky top-10">
              <SideBar />
            </div>
          </div>

          <div className="md:col-span-9">
            {/* Search Box */}
            {/* <div className="mb-6">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div> */}
            <ProductSectionHeader
              title="Tea by Collection"
              description="Your virtual guide to tea! Discover all types of tea, from herbal infusions to black teas and matcha."
            />
            <ProductsByRange range_id={12} searchQuery={searchQuery} />
            <ProductsByRange range_id={7} searchQuery={searchQuery} />
            <ProductsByRange range_id={2} searchQuery={searchQuery} />
            <ProductsByRange range_id={1} searchQuery={searchQuery} />
            <ProductsByRange range_id={3} searchQuery={searchQuery} />
            <ProductsByRange range_id={5} searchQuery={searchQuery} />
            <ProductsByRange range_id={9} searchQuery={searchQuery} />
            <ProductsByRange range_id={8} searchQuery={searchQuery} />
            <ProductsByRange range_id={10} searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;

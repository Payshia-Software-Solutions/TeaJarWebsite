"use client";

import React, { useState } from "react";
import ItemCard from "@/components/Shop/ItemCard";
//font import
import { Italiana, Julius_Sans_One } from "next/font/google";
import { section } from "framer-motion/client";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});

export default function page() {
  return (
    <section className=" ">
      <div className="bg-gray-100">
        <div className="relative w-full h-1/3">
          {/* Main image here */}
          <img
            src="/assets/images/home/tea-jar.png"
            className="w-full h-full rounded-lg object-cover"
            alt="Green tea"
          />
          {/* Centered text over the image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={italiana.className}>
              <h2 className="text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-white">
                Green tea
              </h2>
            </div>
          </div>
        </div>
        {/*Product items */}
        <div className="p-1 my-3 px-4 lg:px-24">
          <div className={italiana.className}>
            <h2 className="text-3xl lg:text-4xl m-3 font-bold">Green</h2>
          </div>
          <hr className="border-black border-t-2 mx-auto mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
    </section>
  );
}

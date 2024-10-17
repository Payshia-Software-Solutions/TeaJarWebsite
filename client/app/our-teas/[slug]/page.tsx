"use client";

import React, { useState } from "react";
import ItemCard from "@/components/Shop/ItemCard";
//font import
import { Italiana, Julius_Sans_One } from "next/font/google";
import { section } from "framer-motion/client";
import OurTeaheader from "@/components/Ourteas/OurTeaheader";

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
    <section className="">
      <div className="bg-gray-100">
        <OurTeaheader
          imgURL={"/assets/images/home/tea-jar.png"}
          title="Green Tea"
          Description="Green tea is a popular beverage known for its numerous health benefits. 
          Rich in antioxidants, it helps boost metabolism and improve brain function. 
          Regular consumption of green tea can aid in weight loss and reduce the risk of chronic diseases. Its refreshing flavor makes it an excellent choice for a healthy lifestyle."
        />
        {/*Product items */}
        <div className="p-1 my-3 px-4 lg:px-24">
          <div className={italiana.className}>
            <h2 className="text-3xl lg:text-4xl m-3 font-bold">Green</h2>
          </div>
          <hr className="border-black border-t-2 mx-auto mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <ItemCard 
            imgURL ="/assets/products/1/apple.jpg"
            HoverimgURL =  "/assets/images/home/tea-cup2.png"
            ProductName = "Green Tea"
            price = "2020"
            Rate = "551515"/>
            
          </div>
        </div>
      </div>
    </section>
  );
}

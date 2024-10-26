"use client";

import React from "react";
import ItemCard from "@/components/Shop/ItemCard";
import OurTeaItemCard from "@/components/Ourteas/OurTeaItemCard"
// Font import
import { Italiana, Julius_Sans_One } from "next/font/google";
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
    <section className="bg-[#353D32] text-white">
      {/* Header Section */}
      <OurTeaheader
        imgURL={"/assets/images/home/Tea-jar.png"}
        title="Green Tea"
        Description="Green tea is a popular beverage known for its numerous health benefits. 
        Rich in antioxidants, it helps boost metabolism and improve brain function. 
        Regular consumption of green tea can aid in weight loss and reduce the risk of chronic diseases. Its refreshing flavor makes it an excellent choice for a healthy lifestyle."
      />

      {/* Product Items Section */}
      <div className="p-4 lg:px-24">
        <div className={italiana.className}>
          <h2 className="text-3xl lg:text-4xl m-3 font-bold">Green</h2>
        </div>
        <hr className="border-white border-t-2 mx-auto mb-6" />

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <OurTeaItemCard
            imgURL="/assets/products/1/apple.jpg"
            HoverimgURL="/assets/images/home/tea-cup2.png"
            ProductName="Green Tea"
            price="2020"
            Rate="551515"
          />
          <OurTeaItemCard
            imgURL="/assets/products/1/apple.jpg"
            HoverimgURL="/assets/images/home/tea-cup2.png"
            ProductName="Green Tea"
            price="2020"
            Rate="551515"
          />
          <OurTeaItemCard
            imgURL="/assets/products/1/apple.jpg"
            HoverimgURL="/assets/images/home/tea-cup2.png"
            ProductName="Green Tea"
            price="2020"
            Rate="551515"
          />
          <OurTeaItemCard
            imgURL="/assets/products/1/apple.jpg"
            HoverimgURL="/assets/images/home/tea-cup2.png"
            ProductName="Green Tea"
            price="2020"
            Rate="551515"
          />
          <OurTeaItemCard
            imgURL="/assets/products/1/apple.jpg"
            HoverimgURL="/assets/images/home/tea-cup2.png"
            ProductName="Green Tea"
            price="2020"
            Rate="551515"
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config";
import Image from "next/image";
import { Josefin_Sans, Sulphur_Point } from "next/font/google";
const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});
function page() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src="/assets/our-teas/taprobane-collection/sigiriya.webp"
          alt="Exceptional"
          layout="fill" // Makes the image fill the container
          objectFit="cover" // Ensures image behaves like background-size: cover
          className="shadow-lg"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1
            className={`${Josefin_Sans_font.className} uppercase text-center text-[45px] md:text-[65px]`}
          >
            Taprobane Collection
          </h1>
        </div>
      </div>
    </div>
  );
}

export default page;

import React from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import OurTeaCard from "@/components/Ourteas/OurTeaCard";
import OurTeaheader from "@/components/Ourteas/OurTeaheader";
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

function page() {
  const crumbs = [
    { label: "Home", href: "/", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { label: "Our Teas", href: "/our-teas" },
  ];

  return (
    <div className="relative bg-babout mt-[60px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/assets/bg-img/leaf-bg.svg')" }}
      ></div>

      {/* Content on top */}
      <div className="relative z-10">
        {/* Main Title Section */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
          <img
            src="/assets/images/home/Tea-jar.png"
            className="w-full h-full rounded-lg object-cover"
            alt="Green tea"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={italiana.className}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center">
                Our Teas
              </h2>
            </div>
          </div>
        </div>

        {/* Product Range Section */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-2">
            {/* Repeated Product Cards */}
            <div className="py-1 my-2 transform transition-transform duration-500 hover:scale-95">
              <OurTeaCard
                imgUrl={"/assets/ourteas/green-tea.jpg"}
                title="Green Tea"
                description="Green tea is known for its refreshing taste and health benefits. It is rich in antioxidants and helps in boosting metabolism."
              />
            </div>

            <Link href="/our-teas/green">
              <div className="py-1 my-2 transform transition-transform duration-500 hover:scale-95">
                <OurTeaCard
                  imgUrl={"/assets/ourteas/black-tea.jpg"}
                  title="Black Tea"
                  description="Green tea is known for its refreshing taste and health benefits. It is rich in antioxidants and helps in boosting metabolism."
                />
              </div>
            </Link>

            <Link href="/our-teas/green">
              <div className="py-1 my-2 transform transition-transform duration-500 hover:scale-95">
                <OurTeaCard
                  imgUrl={"/assets/ourteas/tea1.jpg"}
                  title="Tea 1"
                  description="Green tea is known for its refreshing taste and health benefits. It is rich in antioxidants and helps in boosting metabolism."
                />
              </div>
            </Link>

            <Link href="/our-teas/green">
              <div className="py-1 my-2 transform transition-transform duration-500 hover:scale-95">
                <OurTeaCard
                  imgUrl={"/assets/ourteas/green-tea.jpg"}
                  title="Green Tea"
                  description="Green tea is known for its refreshing taste and health benefits. It is rich in antioxidants and helps in boosting metabolism."
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

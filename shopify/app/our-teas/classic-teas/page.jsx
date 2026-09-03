import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config";
import Image from "next/image";
import { Josefin_Sans, Sulphur_Point } from "next/font/google";
import Link from "next/link";
import OurTeaCard from "@/components/ClassicTea/OurTeaCard";
import OurTeaSmallCard from "@/components/ClassicTea/OurTeaSmallCard";

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});

const page = async () => {
  const teaData = [
    {
      title: "SINGLE ORIGIN PREMIUM CEYLON TEA",
      description: `100% pure Ceylon tea, freshly plucked from a single estate.
World-renowned Ceylon tea manufactured and gifted from generation to generation since 1978`,
      packing: "2g x 25 Enveloped Tea Bags x 72",
      netWeight: "50g",
      productCode: "KDUSOP0001",
      imageSrc: "/assets/our-teas/Classic/61.webp",
      productURL:
        "/products/single-origin-premium-ceylon-black-tea-100-enveloped-tea-bags",
    },

    {
      title: "SINGLE ORIGIN PREMIUM CEYLON TEA",
      description: "",
      packing: "2g x 100 Enveloped Tea Bags x 36",
      netWeight: "200g",
      productCode: "KDUSOP0002",
      imageSrc: "/assets/our-teas/Classic/60.webp",
      reverse: true,
      productURL:
        "/products/single-origin-premium-ceylon-black-tea-25-enveloped-tea-bags",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src="/assets/our-teas/Classic/3.webp"
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
            Classic Collection
          </h1>
        </div>
      </div>

      {/* Main Image 1
      <div className="relative w-full h-screen">
        <Image
          src="/assets/our-teas/Classic/3.jpg"
          alt="Classic Tea"
          layout="fill" // Makes the image fill the container
          objectFit="cover" // Ensures the image scales properly
        />
      </div> */}

      {/* Tea Card Section */}
      <OurTeaCard />

      {/* Main Image 2 */}
      <div className="relative  w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
        <Image
          src="/assets/our-teas/Classic/64.webp"
          alt="Classic Tea 2"
          layout="fill"
          objectFit="cover"
          className="p-2"
        />
      </div>

      <div className="grid gap-2  grid-cols-1">
        {teaData.map((tea, index) => (
          <OurTeaSmallCard
            key={index}
            title={tea.title}
            description={tea.description}
            packing={tea.packing}
            netWeight={tea.netWeight}
            productCode={tea.productCode}
            imageSrc={tea.imageSrc}
            reverse={tea.reverse}
            productURL={tea.productURL}
          />
        ))}
      </div>

      {/* Main Image 3 */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]  ">
        <Image
          src="/assets/our-teas/Classic/39.webp"
          alt="Classic Tea"
          layout="fill" // Makes the image fill the container
          objectFit="cover" // Ensures the image scales properly
          objectPosition="bottom"
          className="p-1"
        />
      </div>

      <div className="relative p-1">
        {/* Image */}
        <img
          src="/assets/our-teas/Classic/38.webp"
          alt="Ceylon Green Tea"
          className="w-full h-full p-1 object-cover"
        />

        {/* Content positioned on top */}
        <div className="relative  md:absolute top-0 left-0 bg-green-400 text-white bg-opacity-70 w-full sm:w-[700px] py-6">
          {/* Flex container for Heading Section */}
          <div className="bg-gray-800 text-white px-6 py-4 max-w-[400px] sm:max-w-[500px] flex justify-start items-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider uppercase">
              CEYLON GREEN TEA
            </h1>
          </div>

          {/* Flex container for Content Section */}
          <div className="flex justify-start p-4">
            <div className="w-full">
              <p className="text-center mb-4 text-sm sm:text-base md:text-lg">

                From a single estate in Sri Lanka's Upcountry, Ceylon green tea
                exudes perfection with its delicate aroma and light hue.
                Cultivated amidst the misty hills, it offers a refreshing
                experience with every sip. Its subtle yet complex flavors
                tantalize the palate, leaving a lingering sense of tranquility.
                With a gentle infusion and a hint of sweetness, this tea
                captures the essence of nature's purity, making it a cherished
                delight for discerning tea connoisseurs.
              </p>
              <div className="text-center">
                <p className="font-bold mt-6 text-sm sm:text-base md:text-lg">
                  Packing: 2g x 25 Enveloped Tea Bags x 56
                </p>
                <p className="font-bold text-sm sm:text-base md:text-lg">
                  Net Weight: 50g
                </p>
                <p className="font-bold text-sm sm:text-base md:text-lg">
                  Product Code: KDUEXGT0001

                </p>
              </div>
            </div>
          </div>

          {/* Shop Now Button */}
          <div className="w-full flex justify-center">
            <Link href="/products/ceylon-green-tea-25-enveloped-tea-bags">
              <button className="btn bg-theme flex justify-center text-white px-4 py-2 rounded-lg w-full sm:w-auto mt-3">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

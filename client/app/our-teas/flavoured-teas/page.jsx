import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config";
import Image from "next/image";
import { Corinthia } from "next/font/google";
import Link from "next/link";

const CorinthiaFont = Corinthia({
  weight: "400",
  subsets: ["latin"],
});

const page = async () => {
  const crumbs = [
    {
      label: "Home",
      href: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    { label: "Our Teas", href: "#" },
    {
      label: "Exceptional Teas",
      href: "/our-teas/exceptional-teas",
    },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-4"></div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-[60vh]">
          {/* Adjust height to 50% of the viewport */}
          <Image
            src="/assets/our-teas/exceptional/main-cover.jpg" // Replace with your image path
            alt="Exceptional"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Makes the image behave like background-size: cover
            className="shadow-lg"
          />

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          {/* Text */}

          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold`}
          >
            <div className={`${CorinthiaFont.className}`}>Exceptional</div>
            <div className="flex justify-center">
              <Breadcrumb
                className="mb-3 text-white"
                crumbs={crumbs}
                fontColor={"white"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 px-2">
          {/* First Column */}
          <div className="flex flex-col-reverse md:flex-col">
            <div className="h-[70vh] relative">
              <Image
                src="/assets/our-teas/exceptional/teas/30.jpg"
                alt="Single Origin Ceylon Black Tea"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover object-bottom"
              />
            </div>
            <div className="p-6 md:p-10 text-center bg-orange-400 flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Single Origin Ceylon Black Tea
              </h3>
              <p>
                Award winning, world renowned Ceylon Orange Pekoe 1 tea
                manufactured in the region of Ratnapura, home to the world's
                largest orthodox black tea production factory, our very own
                state-of-the-art Galadarianne Tea Factory. This single origin
                tea is light in colour with a delicate aroma and wonderful
                flavour.
              </p>
              <p className="font-bold mt-2">
                Packing: 2g x 15 Pyramid Enveloped Tea Bags x 54
              </p>
              <p className="font-bold">Net Weight: 30g</p>
              <p className="font-bold">Product Code: KOUEXT80004</p>

              <Link
                href={"/products/-single-origin-ceylon-black-tea-15-tea-bags"}
              >
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col">
            <div className="p-6 md:p-10 text-center bg-green-400 flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Pure Ceylon Green Tea
              </h3>
              <p>
                This delightful Ceylon Tea is a perfect balance of a subtle
                fragrant green tea brew, complemented by gentle fresh herb
                notes.
              </p>
              <p className="font-bold mt-2">
                Packing: 2g x 15 Pyramid Enveloped Tea Bags x 54
              </p>
              <p className="font-bold">Net Weight: 30g</p>
              <p className="font-bold">Product Code: KOUEXT80003</p>

              <Link href={"/products/pure-ceylon-green-tea-15-tea-bags"}>
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="h-[70vh] relative">
              <Image
                src="/assets/our-teas/exceptional/teas/30.jpg"
                alt="Single Origin Ceylon Black Tea"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover object-bottom"
              />
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col-reverse md:flex-col">
            <div className="h-[70vh] relative">
              <Image
                src="/assets/our-teas/exceptional/teas/30.jpg"
                alt="Single Origin Ceylon Black Tea"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover object-bottom"
              />
            </div>
            <div className="p-6 md:p-10 text-center bg-purple-400 flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Moroccan Mint Green Tea
              </h3>
              <p>
                An aromatic twist on the classic Ceylon green tea, incorporating
                the essence of crisp mint and spearmint leaves. Refreshing way
                to cool off after a hard day's haggling.
              </p>
              <p className="font-bold mt-2">
                Packing: 2g x 15 Pyramid Enveloped Tea Bags x 54
              </p>
              <p className="font-bold">Net Weight: 30g</p>
              <p className="font-bold">Product Code: KOUEXT80002</p>

              <Link href={"/products/moraccan-mint-green-tea"}>
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

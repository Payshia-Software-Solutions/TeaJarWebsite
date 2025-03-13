import React from "react";
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

function OurTeaheader({ imgURL, title, Description }) {
  return (
    <div className="w-full mt-10">
      {/* Main Title Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        {/* Main Image */}
        <img
          src={imgURL}
          className="w-full h-full rounded-lg object-cover"
          alt="Green tea"
        />
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-8 lg:px-12">
          <div
            className="bg-[rgba(53,61,50,0.80)] px-5 py-5 rounded-2xl"
          >
            <div className={italiana.className}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
                {title}
              </h2>
            </div>
            <div className={juliusSansOne.className}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-white font-normal mt-3 md:mt-4 leading-relaxed max-w-2xl">
                {Description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeaheader;

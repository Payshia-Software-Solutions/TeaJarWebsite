import React from "react";
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});

function OurTeaCard({ title, imgUrl }) {
  return (
    <div className="max-w-lg mx-auto bg-[#353D32] rounded-2xl relative">
      <div className="relative w-full h-52">
        <img
          src={imgUrl}
          alt=""
          className="w-full h-52 object-cover rounded-xl"
        />
        {/* Centered Text */}
        <div className={italiana.className}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight text-center">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeaCard;

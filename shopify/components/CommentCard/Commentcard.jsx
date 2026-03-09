import React from "react";
import { Poppins, Inter, M_PLUS_1 } from "next/font/google";
import { comment } from "postcss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // You can select multiple weights
  subsets: ["latin"],
  display: "swap", // This ensures text is visible while fonts load
});

const inter = Inter({
  weight: ["400", "500", "600", "700"], // Select the font weights you need
  subsets: ["latin"],
  display: "swap", // This ensures text is visible while fonts load
});

const mPlus1 = M_PLUS_1({
  weight: ["400", "500", "600", "700"], // Choose the font weights you need
  subsets: ["latin"],
  display: "swap", // This ensures text is visible while fonts load
});

function Commentcard ({
  comment ,time,custormer,imgUrl,index
}){
  return (
    <div className="container max-w-lg mx-auto bg-[#353D32] px-5 py-8 rounded-2xl ">
      <div className="flex justify-start">
        <ul className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <li key={index}>
              <FontAwesomeIcon
                icon={faStar}
                className="sm:w-5 sm:h-5 w-4 h-4 text-green-600"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={poppins.className}>
        <p className="text-lg  mb-6  text-white leading-8 mt-2 text-start ">
          {comment}
        </p>
      </div>

      <div className="flex items-center mb-6">
        <img
          src={imgUrl}
          alt="Avatar"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          {/* Name */}
          <div className={inter.className}>
            <p className="text-lg font-medium text-white">{custormer}</p>
          </div>
          {/* Time */}
          <div className={mPlus1.className}>
            <p className="text-gray-500">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commentcard;

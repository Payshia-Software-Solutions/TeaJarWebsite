import React from "react";

// Font imports
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

function ProductSectionHeader({ title, description }) {
  return (
    <div className={`text-black text-center p-3 bg-gray-200 mb-3`}>
      <div className={italiana.className}>
        <h2 className="text-3xl md:text-5xl">{title}</h2>
      </div>
      <div className={juliusSansOne.className}>
        <p className="m-3 text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}

export default ProductSectionHeader;

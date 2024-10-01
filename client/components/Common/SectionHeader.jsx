import React from "react";
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});
const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});

function SectionHeader({
  sectionTitle,
  sectionHighlight,
  textColor = "gray-900 ",
}) {
  return (
    <header>
      <div className={italiana.className}>
        <h2
          className={`text-3xl lg:text-4xl  text-white text-${textColor} text-center`}
        >
          {sectionTitle}
        </h2>
      </div>
      <div className={juliusSansOne.className}>
        <p className={`mt-4  text-${textColor} text-center text-white `}>
          {sectionHighlight}
        </p>
      </div>
    </header>
  );
}

export default SectionHeader;

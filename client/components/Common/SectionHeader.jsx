import React from "react";
import { Italiana } from "@next/font/google";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});

function SectionHeader({
  sectionTitle,
  sectionHighlight,
  textColor = "gray-900 ",
}) {
  return (
    <header className={italiana.className}>
      <h2
        className={`text-3xl lg:text-4xl  text-white text-${textColor} text-center`}
      >
        {sectionTitle}
      </h2>

      <p className={`mt-4  text-${textColor} text-center text-white `}>
        {sectionHighlight}
      </p>

      
    </header>
  );
}

export default SectionHeader;

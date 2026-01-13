import React from "react";

// Font import
import { Italiana, Montserrat, Julius_Sans_One } from "next/font/google"; // Add Montserrat for thin italic
const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: "300", // Set the weight to thin (100)
  style: "italic", // Set the style to italic
  subsets: ["latin"],
});
const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

function ContactTitle({ header, description }) {
  return (
    <div>
      {/* Header with Italiana font */}
      <div className={italiana.className}>
        <div className="text-start">
          <h2 className="text-3xl font-bold">{header}</h2>
        </div>
      </div>

      {/* Description with thin 100 italic Montserrat */}
      <div className={juliusSansOne.className}>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
}

export default ContactTitle;

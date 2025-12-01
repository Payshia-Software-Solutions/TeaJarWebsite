"use client";
import React, { useState } from "react";
import { Italiana, Julius_Sans_One } from "next/font/google";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import an icon from FontAwesome
import Link from "next/link";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

function OurTeaCard({ title, imgUrl, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-lg mx-auto bg-[#353D32] hover:max-h-xl rounded-2xl relative overflow-visible transition-all hover:max-w-xl duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image and Title Section */}
      <div className="relative w-full h-80">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className={italiana.className}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight text-center">
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* Description Section with Animation */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={
          isHovered ? { x: "-30%", opacity: 1 } : { x: "100%", opacity: 0 }
        }
        transition={{ duration: 0.5 }}
        className="absolute top-0 right-[-30%] h-full w-1/2 bg-[#4C5646] bg-opacity-00 p-4 shadow-xl"
        style={{ borderRadius: "0 16px 16px 0" }} // Custom border radius for the pop effect
      >
        <div className={italiana.className}>
          <div className="inset-0 flex items-center justify-center my-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight text-center">
              {title}
            </h2>
          </div>
        </div>

        <div className={juliusSansOne.className}>
          {/* Container for the description with its own animation */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }} // Start slightly scaled down
            animate={
              isHovered
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 20, scale: 0.95 }
            } // Animate to full size
            transition={{ duration: 0.45 }} // Animation duration for the text
            className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed my-4"
          >
            <p className="">{description}</p>
          </motion.div>
          <div className="flex justify-center">
          <Link href={"/our-teas/green"}>
            <button className="flex items-center mt-2 mb-4 text-white border border-white px-2 py-1 md:px-3 md:py-2 rounded-lg hover:bg-white hover:text-[#4C5646] transition-all duration-300 ease-in-out">
              Go
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link></div>
        </div>
      </motion.div>
    </div>
  );
}

export default OurTeaCard;

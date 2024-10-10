"use client";
import React, { useState } from "react";
import { Italiana, Julius_Sans_One } from "next/font/google";
import { motion } from "framer-motion"; // Import Framer Motion

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

function Test({ imgUrl, comment }) {
  return (
    <div className="container max-w-lg mx-auto bg-[#353D32] rounded-2xl relative">
      <div className="relative w-[35rem] h-52">
        <img
          src="/assets/images/outlet/card2.png"
          alt=""
          className="w-full h-52 object-cover"
        />
        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl text-white leading-8 text-center">pk</h2>
        </div>
      </div>
    </div>
  );
}

export default Test;

"use client"
import React, { useRef } from "react";
import { Italiana, Julius_Sans_One } from "next/font/google";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const italiana = Italiana({
  weight: "400", 
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400", 
  subsets: ["latin"],
});

function About() {
  // Explicitly typing the ref to HTMLDivElement
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    // Check if the current ref exists before calling scrollIntoView
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-babout text-white">
      <div className="mx-auto max-w-screen-2xl px-8 py-16 sm:px-6 lg:px-96">
        <div className="text-center">
          <div className={italiana.className}>
            <h1 className="text-[64px] font-bold mt-10 text-white">About Us</h1>
          </div>
          <div className={juliusSansOne.className}>
          <div className="text-white leading-8 mt-8 ">
              The Green Leaf Cafe was established three years ago in the heart
              of Portland, Oregon, as a place dedicated to sustainability and
              respect for nature. Committed to reducing plastic use and
              pollution, we offer organic and locally sourced, seasonal food.
              Our café is not just a spot to enjoy delicious and healthy meals;
              it's also a hub for those who wish to make conscious choices and
              adopt a sustainable lifestyle. Every meal and beverage served is a
              testament to our deep respect for nature, providing a culinary
              experience that combines taste with environmental awareness
            </div>
          </div>
          <div className={italiana.className}>
            <p className="text-white mt-4">
              <button onClick={handleScroll}>
                <FontAwesomeIcon
                  icon={faArrowCircleDown}
                  className="w-12 h-12 mt-2"
                />
              </button>
            </p>
          </div>
        </div>
      </div>
      {/* Scroll target without adding extra content */}
      <div ref={scrollRef} className=""></div>
    </section>
  );
}

export default About;

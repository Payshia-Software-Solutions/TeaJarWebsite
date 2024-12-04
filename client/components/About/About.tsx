"use client";
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
      <div className="mx-auto max-w-screen-2xl px-8 py-4 sm:px-6 lg:px-96">
        <div className="text-center">
          <div className={italiana.className}>
            <h1 className="text-[40px] md:text-[40px] -font-bold text-white mt-24 md:mt-40">
              Our Journey
            </h1>
          </div>
          <div className={juliusSansOne.className}>
            <div className="text-white leading-6 md:leading-8 mt-2 text-[12px] md:text-[15px]">
              Since 1978, Tea Jar has been dedicated to crafting the finest
              Ceylon teas, from classic black to exquisite flavors. Backed by
              the K.D.U. Group, we combine over 30 years of expertise with
              traditional craftsmanship and modern innovation, delivering
              exceptional quality that delights tea lovers around the world.
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

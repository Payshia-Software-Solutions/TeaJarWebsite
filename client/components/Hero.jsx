"use client";
import React, { useState, useEffect } from "react";

function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`relative text-white transition-all duration-300 ease-in-out ${
        scrolled ? "m-8" : ""
      }`}
    >
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out ${
          scrolled ? "rounded-3xl" : ""
        }`}
        src="/assets/videos/hero-video.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
      ></video>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-white bg-clip-text lg:text-6xl font-extrabold text-transparent sm:text-2xl">
            Tea Jar
          </h1>
          <p className="mx-auto max-w-xl sm:text-xl/relaxed uppercase">
            The Heart of our Family since 1978
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

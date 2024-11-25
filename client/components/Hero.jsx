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
      className={`relative my-0 h-screen text-white transition-all duration-500 ease-in-out ${
        scrolled ? "m-0 lg:m-12" : ""
      }`}
    >
      <video
        className={`absolute inset-0 w-full h-screen lg:h-full object-cover transition-all duration-500 ease-in-out ${
          scrolled ? "rounded-none md:rounded-3xl" : ""
        }`}
        src="/assets/videos/TeaJar_HERO_V1.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
      ></video>

      <div className="relative mx-auto max-w-screen-xl px-4 flex h-screen items-center">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="hidden "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <h1 className="bg-white bg-clip-text lg:text-7xl font-extrabold text-transparent text-5xl">
              Tea Jar
            </h1>
            <p className="mx-auto max-w-xl sm:text-xl/relaxed uppercase">
              The Heart of our Family since 1978
            </p>
          </div>
          <img src="/assets/white-logo.png" alt="" className="w-1/2 mx-auto" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="./assets/images/tea-cup.png"
          alt="Tea Cup Image"
          className="absolute mx-auto w-64 md:w-[450px]"
        />
      </div>
    </section>
  );
}

export default Hero;

"use client";
import React, { useState, useEffect } from "react";

function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true); // Start fade-out animation
      setTimeout(() => {
        setIsVisible(false); // Remove the logo after the animation
      }, 1500); // Match this to the animation duration (1 second)
    }, 3000); // Show logo for 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
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
        src="/assets/videos/teaJar-video.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
      ></video>

      <div className="relative mx-auto max-w-screen-xl px-4 flex h-screen items-center">
        <div className="mx-auto max-w-3xl text-center">
          {isVisible && (
            <img
              src="/assets/white-logo.png"
              alt="Logo"
              className={`w-1/2 mx-auto transition-opacity duration-1000 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="./assets/images/tea-cup-w.png"
          alt="Tea Cup Image"
          className="absolute mx-auto w-56 md:w-[350px]"
        />
      </div>
    </section>
  );
}

export default Hero;

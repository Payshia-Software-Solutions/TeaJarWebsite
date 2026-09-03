"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Loader() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white h-screen w-screen"
      style={{ zIndex: 999 }}
    >
      <div className="animate-pulse">
        <DotLottieReact
          src="/assets/loader.lottie"
          loop
          autoplay
          style={{ maxWidth: "150px", width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Loader;

import React from "react";
import MainCart from "@/components/Cart/MainCart";

function page() {
  return (
    <div
      className="mt-14 px-4 sm:px-8 md:px-14"
      style={{
        backgroundImage: "url('/assets/bg-img/leaf-bg.svg')",
        backgroundSize: "300px", // Smaller size for mobile screens
        backgroundRepeat: "repeat",
      }}
    >
      <MainCart />
    </div>
  );
}

export default page;

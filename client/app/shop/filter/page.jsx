import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import FilteredShop from "@/components/Shop/FilteredShop";

function Page() {
  const crumbs = [
    {
      label: "Home",
      href: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    { label: "Shop", href: "/shop" },
  ];

  return (
    <div
      className="  px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12 lg:py-16 lg:px-10 md:mt-6"
      style={{
        backgroundImage: "url('/assets/bg-img/leaf-bg.svg')",
        backgroundSize: "750px", // Adjust the size of the image here
        backgroundRepeat: "repeat",
      }}
    >
      <Breadcrumb crumbs={crumbs} />
      <FilteredShop />
    </div>
  );
}

export default Page;

import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import FilteredShop from "@/components/Shop/FilteredShop";
import { Suspense } from "react";
// Metadata for the Shop page
export const metadata = {
  title: "Shop | Tea Jar - Finest Ceylon Tea in Sri Lanka",
  description:
    "Browse our exclusive collection of premium Ceylon tea products. Discover the finest blends and accessories at Tea Jar. Order now and enjoy the taste of Sri Lanka.",
  keywords: [
    "Shop Ceylon Tea",
    "Buy Tea",
    "Ceylon Tea Products",
    "Tea Accessories",
    "Sri Lanka Tea Shop",
  ],
  openGraph: {
    title: "Shop | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Explore our range of premium Ceylon tea and accessories. Shop now for the finest tea blends from Sri Lanka.",
    url: "https://www.teajarceylon.com/shop", // Replace with the actual URL
    images: [
      {
        url: "https://www.teajarceylon.com/assets/images/home/peach.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Tea Jar Shop - Finest Ceylon Tea in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Discover the finest Ceylon tea and tea accessories at Tea Jar. Shop now and taste the best of Sri Lanka.",
    image: "https://www.teajarceylon.com/images/tea-shop-banner.jpg", // Replace with your image URL
  },
};
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
      <Suspense>
        <FilteredShop />
      </Suspense>
    </div>
  );
}

export default Page;

import React from "react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Contact - Finest Ceylon Tea in Sri Lanka",
  description: "Welcome to My Website! Discover amazing content here.",
  keywords: ["home", "my website", "amazing content"],
  openGraph: {
    title: "Home Page - My Website",
    description: "Explore amazing content on My Website.",
    url: "https://mywebsite.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 800,
        height: 600,
        alt: "My Website Home Image",
      },
    ],
  },
};

function page() {
  const crumbs = [
    {
      label: "Home",
      href: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    { label: "Blogs", href: "/blogs" },
  ];
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  mt-[60px]">
      <Breadcrumb crumbs={crumbs} />
    </div>
  );
}

export default page;

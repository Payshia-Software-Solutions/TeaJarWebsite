import React from "react";
import ProductView from "@/components/ProductView";
import Breadcrumb from "@/components/Breadcrumb";

interface PageProps {
  params: {
    slug: string;
  };
}

function page({ params }: PageProps) {
  const { slug } = params;
  const crumbs = [
    {
      label: "Home",
      href: "#",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    { label: "Products", href: "/products" },
    { label: slug, href: "/products" },
  ];
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  mt-[60px]">
      <Breadcrumb crumbs={crumbs} />
      <ProductView slug={slug} />
    </div>
  );
}

export default page;
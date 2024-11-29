import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactUS from "@/components/Contact Us/ContactUs";
import ContactForm from "@/components/Contact Us/ContactForm";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Tea Jar - Finest Ceylon Tea in Sri Lanka",
  description:
    "Get in touch with Tea Jar for the finest Ceylon Tea. Reach out to us for inquiries, support, or wholesale opportunities.",
  keywords: [
    "contact",
    "tea jar",
    "Ceylon tea",
    "support",
    "wholesale",
    "inquiries",
  ],
  openGraph: {
    title: "Contact Us - Tea Jar",
    description:
      "Contact Tea Jar for inquiries and information about our finest Ceylon Tea.",
    url: "https://https://teajarceylon.com/contact",
    images: [
      {
        url: "/assets/our-teas/flavoured/main-cover-v1.jpg", // Replace with your image path
        width: 800,
        height: 600,
        alt: "Contact Us Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Tea Jar",
    description:
      "Get in touch with Tea Jar for inquiries, support, and wholesale opportunities.",
  },
};

function Page() {
  const crumbs = [
    {
      label: "Home",
      href: "/#",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-[80vh]">
          {/* Adjust height to 50% of the viewport */}
          <Image
            src="/assets/our-teas/Classic/61.jpg" // Replace with your image path
            alt="Exceptional"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Makes the image behave like background-size: cover
            className="shadow-lg"
          />

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          {/* Text */}

          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold`}
          >
            <div
              className={`flex justify-center text-center  text-[45px] md:text-[65px]`}
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <ContactForm />
      </div>
    </div>
  );
}

export default Page;

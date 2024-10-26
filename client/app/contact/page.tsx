import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactUS from "@/components/Contact Us/ContactUs";
import ContactForm from "@/components/Contact Us/ContactForm";

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
    <div
      className="px-6 md:px-8 lg:px-24 mt-10 md:mt-16 lg:mt-20 bg-repeat bg-babout"
      style={{ backgroundImage: "url('/assets/bg-img/leaf-bg.svg')" }}
    >
      <Breadcrumb crumbs={crumbs} />
      <ContactUS />
      <ContactForm />
    </div>
  );
}

export default Page;

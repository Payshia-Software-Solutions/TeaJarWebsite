"use client";
import React from "react";
import HistorySection from "@/components/About/HistorySection";
import ManufactureSection from "@/components/About/ManufactureSection";

function page() {
  return (
    <div className="pt-40 md:pt-10">
      <HistorySection />
      <ManufactureSection />
    </div>
  );
}

export default page;

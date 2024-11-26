"use client";
import React from "react";
import TeaJarStory from "@/components/About/TeaJarStory";
import CeylonFinestTea from "@/components/About/CeylonFinestTea";
import SamansMessage from "@/components/About/SamansMessage";
import DeelakaMessage from "@/components/About/DeelakaMessage";
function page() {
  return (
    <div className="">
      <TeaJarStory />
      <CeylonFinestTea />
      <SamansMessage />
      <DeelakaMessage />
    </div>
  );
}

export default page;

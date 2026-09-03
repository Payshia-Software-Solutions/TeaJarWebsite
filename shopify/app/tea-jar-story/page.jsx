import React from "react";
import TeaJarStory from "@/components/About/TeaJarStory";
import CeylonFinestTea from "@/components/About/CeylonFinestTea";
import SamansMessage from "@/components/About/SamansMessage";
import DeelakaMessage from "@/components/About/DeelakaMessage";

// Metadata for Tea Jar Story page
export const metadata = {
  title: "Tea Jar Story | Tea Jar - Finest Ceylon Tea in Sri Lanka",
  description:
    "Discover the Tea Jar story, a journey rooted in the tradition and quality of Ceylon Tea. Learn how we bring the finest tea from Sri Lanka to the world.",
  keywords: [
    "Tea Jar Story",
    "Ceylon Tea",
    "Sri Lanka Tea",
    "Finest Ceylon Tea",
    "Tea Journey",
  ],
  openGraph: {
    title: "Tea Jar Story | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Explore the Tea Jar story, from the origins of Ceylon tea to our commitment to quality and tradition.",
    url: "https://www.teajarceylon.com/tea-jar-story", // Replace with your actual URL
    images: [
      {
        url: "https://www.teajarceylon.com/images/assets/tea-jar-story-side.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "The Story of Tea Jar - Finest Ceylon Tea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tea Jar Story | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Discover the Tea Jar story and learn about the legacy of Ceylon tea and our commitment to quality.",
    image: "https://www.teajarceylon.com/assets/tea-jar-story-side.jpg", // Replace with your image URL
  },
};

function Page() {
  return (
    <div className="">
      <TeaJarStory />
      <CeylonFinestTea />
      <SamansMessage />
      <DeelakaMessage />
    </div>
  );
}

export default Page;

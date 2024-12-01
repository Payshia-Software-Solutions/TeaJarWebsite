import React from "react";
import HistorySection from "@/components/About/HistorySection";
import ManufactureSection from "@/components/About/ManufactureSection";

// Metadata for KDU Group About Page
export const metadata = {
  title: "KDU Group | Leading Group in Sri Lanka",
  description:
    "Learn about KDU Group, a leading group in Sri Lanka with a rich history in manufacturing and industrial innovation. Discover how KDU Group is shaping the future.",
  keywords: [
    "KDU Group",
    "Sri Lanka",
    "Manufacturing",
    "Industry",
    "Business Innovation",
  ],
  openGraph: {
    title: "KDU Group | Leading Group in Sri Lanka",
    description:
      "Explore the legacy of KDU Group, one of Sri Lanka's most influential manufacturing and industrial groups.",
    url: "https://www.teajarceylon.com/kdu-group", // Replace with your actual URL
    images: [
      {
        url: "https://www.teajarceylon.com/assets/about/kdu.jpeg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "KDU Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KDU Group | Leading Group in Sri Lanka",
    description:
      "Discover the story of KDU Group, a pioneer in Sri Lanka's industrial sector, and its commitment to innovation and quality.",
    image: "https://www.teajarceylon.com/assets/about/kdu.jpeg", // Replace with your image URL
  },
};

function Page() {
  return (
    <div className="pt-40 md:pt-10">
      <HistorySection />
      <ManufactureSection />
    </div>
  );
}

export default Page;

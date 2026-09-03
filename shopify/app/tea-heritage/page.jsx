import React from "react";
import TeaHeritage from "@/components/About/TeaHeritage";

export const metadata = {
  title: "Tea Heritage | Tea Jar - Finest Ceylon Tea in Sri Lanka",
  description:
    "Discover the rich history and heritage of Ceylon tea. Learn about the traditions and craftsmanship behind the finest tea in Sri Lanka.",
  keywords: [
    "Ceylon Tea",
    "Tea Heritage",
    "Sri Lanka Tea",
    "Finest Tea",
    "Tea Traditions",
  ],
  openGraph: {
    title: "Tea Heritage | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Explore the rich history and heritage of Ceylon tea, known for its unique flavors and craftsmanship.",
    url: "https://www.teajarceylon.com/tea-heritage", // Replace with your actual URL
    images: [
      {
        url: "https://www.teajarceylon.com/assets/heritage-image.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Tea Heritage - The Tradition of Ceylon Tea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tea Heritage | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Explore the rich history and heritage of Ceylon tea, known for its unique flavors and craftsmanship.",
    image: "https://www.teajarceylon.com/assets/heritage-image.jpg", // Replace with your image URL
  },
};

function Page() {
  return (
    <div>
      <TeaHeritage />
    </div>
  );
}

export default Page;

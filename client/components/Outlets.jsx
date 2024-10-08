"use client";
import React, { useState } from "react";
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

function Outlets() {
  // State to manage the currently displayed description and main image
  const [activeDescription, setActiveDescription] = useState({
    title: "Tea Jar Lounge",
    description:
      "Tea Jar Lounge in Ratnapura offers a cozy retreat for tea lovers, serving a wide range of premium Ceylon teas in a relaxing ambiance. Enjoy handcrafted brews, delicious snacks, and local delicacies while surrounded by the serene beauty of Sri Lanka’s gem city. Perfect for unwinding with friends or a quiet solo escape.",
  });

  // State to manage the currently displayed main image
  const [mainImage, setMainImage] = useState("/assets/images/outlet/otmain.png");

  // Array of descriptions for each thumbnail
  const descriptions = [
    {
      title: "Tea Jar Lounge",
      description:
        "Tea Jar Lounge in Nuwaraeliya offers a cozy retreat for tea lovers, serving a wide range of premium Ceylon teas in a relaxing ambiance. Enjoy handcrafted brews, delicious snacks, and local delicacies while surrounded by the serene beauty of Sri Lanka’s gem city. Perfect for unwinding with friends or a quiet solo escape.",
      image: "/assets/images/outlet/card1.png", // Corresponding main image
      
    },
    {
      title: "Coffee Haven",
      description:
        "Coffee Haven in Colombo is a modern café offering artisanal coffee blends and a variety of pastries. The warm ambiance and friendly service make it a go-to spot for coffee enthusiasts in the bustling city.",
      image: "/assets/images/outlet/card2.png", // Corresponding main image
    },
    {
      title: "Gem City Cafe",
      description:
        "Located in the heart of Ratnapura, Gem City Cafe is a trendy spot for both locals and travelers. With its relaxed atmosphere, it’s the perfect place to enjoy freshly brewed coffee, premium teas, and light snacks after a day of exploring the gem city.",
      image: "/assets/images/outlet/card3.png", // Corresponding main image
    },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen bg-[#353D32] py-16">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className={italiana.className}>
            <h2 className="text-[32px] sm:text-[48px] text-center text-white mb-8 sm:mb12">
              Outlets
            </h2>
          </div>

          {/* Main Image and Right Side Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full max-w-full">
            {/* Main Image */}
            <div className="flex justify-center">
              <img
                src={mainImage} // Updated to dynamically display the main image
                alt="Main Outlet"
                className="rounded-lg object-cover w-84 h-[32rem]"
              />
            </div>

            {/* Right Side Images */}
            <div className="flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {descriptions.map((desc, index) => (
                  <img
                    key={index}
                    src={`/assets/images/outlet/card${index + 1}.png`}
                    alt={`Thumbnail ${index + 1}`}
                    className="rounded-lg object-cover w-full h-auto cursor-pointer"
                    onClick={() => {
                      setActiveDescription(desc); // Set the description
                      setMainImage(desc.image); // Set the corresponding main image
                    }}
                  />
                ))}
              </div>

              {/* Description */}
              <div className="bg-[#4A5243] p-4 sm:p-6 lg:p-8 rounded-lg text-white">
                <div className={italiana.className}>
                  <h3 className="text-[22px] sm:text-[28px] mb-4">
                    {activeDescription.title}
                  </h3>
                </div>
                <div className={juliusSansOne.className}>
                  <p className="leading-7 sm:leading-8">
                    {activeDescription.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outlets;

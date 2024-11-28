"use client";
import React, { useState } from "react";
import { Italiana, Julius_Sans_One } from "next/font/google";
import { motion } from "framer-motion"; // Import Framer Motion

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

const amenities = [
  {
    id: 1,
    name: "Tea Tasting",
    icon: "./assets/icons/new-icons/tea-testing.png",
  },
  {
    id: 2,
    name: "Factory Visit",
    icon: "./assets/icons/new-icons/factory-visit.png",
  },
  {
    id: 3,
    name: "Field Visit",
    icon: "./assets/icons/new-icons/field-visit.png",
  },
  {
    id: 4,
    name: "Retail",
    icon: "./assets/icons/new-icons/retail.png",
  },
  {
    id: 5,
    name: "Gem & Jewelry",
    icon: "./assets/icons/new-icons/gem.png",
  },
  {
    id: 6,
    name: "Dining",
    icon: "./assets/icons/new-icons/dining.png",
  },
  {
    id: 7,
    name: "Create Own Tea",
    icon: "./assets/icons/new-icons/create-own-tea.png",
  },
  {
    id: 8,
    name: "Personal Gift Wrapping",
    icon: "./assets/icons/new-icons/gift.png",
  },
  {
    id: 9,
    name: "Afternoon Tea",
    icon: "./assets/icons/new-icons/afternoon-tea.png",
  },
];

function Outlets() {
  const [activeDescription, setActiveDescription] = useState({
    title: "Tea Jar Lounge",
    description:
      "Welcome to our flagship Tea Jar Lounge in Ratnapura, the perfect place to experience authentic Ceylon tea. Here, you can purchase our exclusive tea collections, explore a curated selection of gems and jewelry, and gather with loved ones to celebrate your special moments. Alongside our premium teas, enjoy an extensive food and beverage menu and take a journey through our mini museum, which showcases the rich heritage of Ceylon tea. Tea Jar Lounge offers more than just tea—it’s a destination to connect, celebrate, and discover the true essence of Ceylon tea culture.",
    features: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  });

  const [mainImage, setMainImage] = useState("/assets/outlets/tjl.jpg");

  const descriptions = [
    {
      title: "Tea Jar Lounge Rathnapura",
      description:
        "Welcome to our flagship Tea Jar Lounge in Ratnapura, the perfect place to experience authentic Ceylon tea. Here, you can purchase our exclusive tea collections, explore a curated selection of gems and jewelry, and gather with loved ones to celebrate your special moments. Alongside our premium teas, enjoy an extensive food and beverage menu and take a journey through our mini museum, which showcases the rich heritage of Ceylon tea. Tea Jar Lounge offers more than just tea—it’s a destination to connect, celebrate, and discover the true essence of Ceylon tea culture.",
      image: "/assets/outlets/tjl.jpg",
      features: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    {
      title: "Tea Jar Lounge Colombo",
      description:
        "Tea Jar Lounge Colombo is the ideal place for those seeking a personalized tea experience where you can create your own tea, selecting from a variety of flavors and ingredients with the help of our experts. Our dedicated private tea rooms provide the perfect setting to make your visit feel like home, offering a space for you to relax and enjoy your tea in a way that’s tailored to your preferences. You can also purchase our teas and have them wrapped as personalized gifts for your loved ones. At Tea Jar Lounge Colombo, every sip is more than just tea—it’s an experience made just for you.",
      image: "/assets/outlets/colombo.jpg",
      features: [1, 2, 3, 4],
    },
    {
      title: "Tea Jar by the Lake Weerawila",
      description:
        "Tea Jar by the Lake, centered at Doubletree by Hilton Weerawila, offers the perfect setting for a personalized tea experience with breathtaking views of the lake. During your stay, you can purchase our exclusive tea products, enjoy a tailored tea tasting session, and discover the ideal tea pairings curated just for you. Relax by the lake with a warm cup of tea, and let this unforgettable experience become a cherished memory.",
      image: "/assets/outlets/tjl.jpg",
      features: [5, 6, 7, 8, 9],
    },
    ,
    {
      title: "Tea Jar Boutique Ella",
      description:
        "Nestled in the charming town of Ella, Tea Jar Boutique is the perfect destination for tea enthusiasts from all over the world. Discover our carefully curated selection of Tea Jar products, thoughtfully handpicked for you. Before making your purchase, enjoy the chance to sample our teas and savor their authentic flavors, ensuring you choose the perfect blend to take home.",
      image: "/assets/outlets/tjl.jpg",
      features: [1, 2, 7, 8, 9],
    },
  ];

  return (
    <section className="relative flex items-center justify-center min-h-screen h-full bg-[#353D32]">
      <div className="relative w-full m-0">
        {/* Background Image */}
        <motion.img
          key={mainImage}
          src={mainImage}
          alt=""
          className="w-full object-cover hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[#000000] to-transparent opacity-80 z-10"></div>

        {/* Main content over image and gradient */}
        <div className="relative md:absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center py-4">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full max-w-full">
                {/* Left side: Empty space or image */}
                <div className="lg:m-0 mt-0 md:mt-24">
                  {/* Empty div or additional content can go here */}
                </div>

                {/* Right side: Main content */}
                <div className="bg-[#353d32a6] px-5 py-5  opacity-85 w-full">
                  <div className={italiana.className}>
                    <h2 className="text-[30px] font-normal sm:text-[32px] md:text-[40px] lg:text-[48px] text-center text-white mb-4 sm:mb-4 md:mb-8 lg:mb-10">
                      Find your nearest Store
                    </h2>
                  </div>

                  <div className="flex flex-col justify-between ">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
                      {descriptions.map((desc, index) => (
                        <div key={index}>
                          <img
                            src={`${desc.image}`}
                            alt={`Thumbnail ${index + 1}`}
                            className="object-cover w-full h-auto cursor-pointer hover:scale-y-95 duration-300"
                            onClick={() => {
                              setActiveDescription(desc); // Set the description
                              setMainImage(desc.image); // Set the corresponding main image
                            }}
                          />
                          <p className="text-center text-white text-[15px] sm:text-[16px] mt-2">
                            {desc.title}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Description Sections */}
                    <div className="bg-[#4A5243] p-4 sm:p-6 lg:p-8 rounded-lg text-white">
                      {/* Additional Image for Mobile Screens */}
                      <img
                        src={mainImage}
                        alt="Mobile Specific Image"
                        className="block sm:hidden w-full object-cover mb-2 shadow-lg"
                      />

                      <motion.div
                        key={activeDescription.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className={italiana.className}
                      >
                        <h3 className="text-[25px] md:text-[28px] mb-2 text-center md:text-justify">
                          {activeDescription.title}
                        </h3>
                      </motion.div>

                      <motion.div
                        key={activeDescription.description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className={juliusSansOne.className}
                      >
                        <p className="leading-5 md:leading-6 text-[12px] md:text-[14px] text-center md:text-justify">
                          {activeDescription.description}
                        </p>

                        <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
                          {/* Loop through the amenities array to render each amenity */}
                          {activeDescription.features.map((featureId) => {
                            const amenity = amenities.find(
                              (item) => item.id === featureId
                            );
                            return (
                              <div
                                key={amenity.id}
                                className="flex flex-col items-center"
                              >
                                <img
                                  src={amenity.icon}
                                  alt={amenity.name}
                                  className="w-[50px] mb-2"
                                />
                                <p className="text-[12px]">{amenity.name}</p>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>
                  </div>
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

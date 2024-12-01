import React from "react";
import Image from "next/image";
import { Josefin_Sans, Sulphur_Point } from "next/font/google";
<<<<<<< Updated upstream
import FactoryTeaCard from "@/components/Factory/FactoryTeaCard";
import MainTeaCard from "@/components/Factory/MainTeaCard";
import TallTeaCard from "@/components/Factory/TallTeaCard";
=======
import FactoryTeaCard from "../../../components/Factory/FactoryTeaCard";
import MainTeaCard from "../../../components/Factory/MainTeaCard";
import TallTeaCard from "../../../components/Factory/TallTeaCard";
>>>>>>> Stashed changes

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
const productData = [
  {
    title: "CEYLON ORGANIC GREEN TEA",
    imageSrc: "/assets/our-teas/factory/54.jpg",
    description:
      "Renowned for its unique taste and purity, the Ceylon Green Tea Pekoe has an acquired taste with a slight hint of bitterness that ends in sweetness. This high-grown tea is rich in colour and is a great addition to maintaining a healthy diet due to its antioxidant properties.",
    linkUrl: "/products/ceylon-organic-green-tea-loose-leaf-100g",
    packing: " 175g Loose Tea x 30 Canisters",
    netWeight: "175g",
    productCode: "KDUEXOT0001",
    buttonText: "Shop Now",
    bgColor: "#8d957d",
    titleColor: "#5d6452",

    reverse: false, // Default false for image above content
  },
  {
    title: "CEYLON ORGANIC BLACK TEA",
    imageSrc: "/assets/our-teas/factory/55.jpg",
    description:
      "Although this Orange Pekoe one (OP 1) black tea can be found in many parts of the country, the low-grown high-quality blend that is made with long wiry leaves is a common favourite in Asia. This tea is fragrant and subtle with a smooth malty taste and deep amber colour.",
    packing: "125g Loose Tea x 30 Canisters",
    netWeight: "125g",
    productCode: "KDUEXOT0002",
    linkUrl: "/products/ceylon-organic-black-tea-loose-leaf-100g",
    buttonText: "Shop Now",
    bgColor: "#cc8b50",
    reverse: false,
  },
];
function page() {
  return (
    <div className="md:mt-16 mt-20">
<<<<<<< Updated upstream
=======
   
>>>>>>> Stashed changes
      {/* <div className="relative w-full h-[90vh] md:h-screen p-1">
        <Image
          src="/assets/our-teas/factory/48.jpg"
          alt="Exceptional"
          layout="fill"
          objectFit="cover"
          className="shadow-lg"
        />
  
        <div className="absolute inset-0">
       
          <div className="absolute top-1/2 left-1/2 bg-black bg-opacity-50 w-full max-w-[90%] sm:max-w-[70%] md:max-w-[55rem] py-6 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 sm:px-8">
            <h1
              className={`${Josefin_Sans_font.className} uppercase text-center text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-bold`}
            >
              FACTORY SERIES
            </h1>

            <p className="text-center text-sm sm:text-base md:text-lg leading-relaxed">
              Cultivating tea is an art. The climate, composition of soil,
              growing season, harvest conditions and the skill employed in the
              processing of the tea leaves, all impact the flavor and aroma of
              the end product. This is why at KDU Group as the largest tea
              producer in Sri Lanka, we take the utmost care in cultivating and
              producing our Factory Series tea. Harvest from our very own
              estates and processed in our nine state – of – the art factories
              located in the Sabaragamuwa region, this tea is produced in
              keeping with the strictest hygienic standards assuring
              high-quality factory fresh tea, with no added flavors.
            </p>
          </div>
        </div>
      </div> */}

<<<<<<< Updated upstream
=======
      

>>>>>>> Stashed changes
      <div className="mt-16 px-1 pt-1">
        {" "}
        <MainTeaCard />
      </div>
      <div>
        <div className="grid  gap-1 grid-cols-1   md:grid-cols-2">
          {productData.map((tea, index) => (
            <TallTeaCard
              key={index}
              title={tea.title}
              description={tea.description}
              imageSrc={tea.imageSrc}
              packing={tea.packing}
              netWeight={tea.netWeight}
              productCode={tea.productCode}
              linkUrl={tea.linkUrl}
              buttonText={tea.buttonText}
              reverse={tea.reverse}
              bgColor={tea.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;

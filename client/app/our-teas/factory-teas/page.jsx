import React from "react";
import Image from "next/image";
import { Josefin_Sans, Sulphur_Point } from "next/font/google";
import FactoryTeaCard from "@/components/Factory/FactoryTeaCard";
import MainTeaCard from "@/components/Factory/MainTeaCard";
import TallTeaCard from "@/components/Factory/TallTeaCard";

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});

const teaData = [
  {
    title: "GALPADITHANNE OP 1",
    imageSrc: "/assets/our-teas/factory/50.jpg",
    description:
      "Situated in Lelopitiya, the Galpadithanne Tea Factory is a state-of-the-art tea factory that is at the forefront of tea production, equipped with some of the world's largest Orthodox black tea production factory, producing over 4 million kilograms of tea annually and proudly holding on to the title of highest tea producer in a single factory consecutively for the last 23 years. Pioneering the use of a fully automated system for fermenting and tea packing, the entire production process ensures consistent levels of quality, superior hygiene standards, and eliminates all packing variance issues. The OP tea produced at this factory is light in colour, with a delicate aroma and wonderful flavour.",
    packing: "125g Loose Tea x 30 Canisters",
    netWeight: "125g",
    productCode: "KDUEXF50002",
    linkUrl: "/products/galpadithanne-op1-loose-leaf-125g",
    buttonText: "Shop Now",
    bgColor: "#fdc546",
    reverse: false,
  },
  {
    title: "NILVIN VIEW OP A",
    imageSrc: "/assets/our-teas/factory/49.jpg",
    description:
      "Located in the Wellandura region of Rathnapura, The Nilvin View Tea Factory was the last factory to be acquired by the Group’s late founder Mr. K.D. Upasena. Producing over 125,000 kilograms of tea leaves per month, this low-grown tea when brewed, is mild in flavour and higher in colour.",
    packing: "100g Loose Tea x 30 Canisters",
    netWeight: "100g",
    productCode: "KDUEXF50003",
    linkUrl: "/products/nilvin-view-op-a-loose-leaf-100g",
    buttonText: "Shop Now",
    bgColor: "#8a78b7",
    reverse: false,
  },
  {
    title: "PEAK VIEW PEKOE 1",
    imageSrc: "/assets/our-teas/factory/51.jpg",
    description:
      "Manufactured maintaining the highest standards, the tea produced at Peak View Tea Factory is compliant with HACCP and ISO 22000 food standards, producing over 150,000 kilograms of low-grown tea leaves per month. When brewed, this tea carries a distinctive flavour and has a brighter and bolder colour.",
    packing: " 175g Loose Tea x 30 Canisters",
    netWeight: "175g",
    productCode: "KDUEXF50001",
    linkUrl: "/products/peak-view-pekoe-1-loose-leaf-175g",
    buttonText: "Shop Now",
    bgColor: "#d75627",
    reverse: true,
  },
  {
    title: "NEW KANDAGASTHANNE BOP",
    imageSrc: "/assets/our-teas/factory/51.jpg",
    description:
      "Using cutting-edge technology to ensure high quality, the New Kandagasthanne Tea Factory is one of the largest tea producers in the Sabaragamuwa Province, producing over 2.5 million kilograms of black tea each year. This BOP tea has a strong flavour that is malty, fresh and tart and is held in high esteem all around the world.",
    packing: " 200g Loose Tea x 30 Canisters",
    netWeight: "200g",
    productCode: "KDUEXF50004",
    linkUrl: "/products/new-kandagasthanne-bop-loose-leaf-200g",
    buttonText: "Shop Now",
    bgColor: "#6b8a39",
    reverse: true,
  },
];

function page() {
  return (
    <div className="mt-10">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] md:h-screen p-1">
        <Image
          src="/assets/our-teas/factory/48.jpg"
          alt="Exceptional"
          layout="fill"
          objectFit="cover"
          className="shadow-lg"
        />
        {/* Black overlay */}
        <div className="absolute inset-0">
          {/* Text Overlay */}
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
      </div>

      <div>
        <div className="grid gap-1 grid-cols-1  md:grid-cols-2">
          {teaData.map((tea, index) => (
            <FactoryTeaCard
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

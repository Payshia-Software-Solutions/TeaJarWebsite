import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config";
import Image from "next/image";
import { Josefin_Sans, Sulphur_Point } from "next/font/google";
import Link from "next/link";
import TeaCard from "@/components/Common/TeaCard";
import FlavouredTeaCard from "@/components/Flavoured/FlavouredTeaCard";

// Flavoured Teas Page Metadata
export const metadata = {
  title: "Flavoured Teas | Tea Jar - Finest Ceylon Tea in Sri Lanka",
  description:
    "Indulge in our collection of flavoured teas, expertly blended with premium Ceylon tea leaves and natural flavors. Enjoy a variety of unique and refreshing tea blends.",
  keywords: [
    "Flavoured Teas",
    "Ceylon Flavoured Teas",
    "Tea Blends",
    "Fruit Flavoured Tea",
    "Herbal Tea Blends",
    "Best Flavoured Tea",
  ],
  openGraph: {
    title: "Flavoured Teas | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Enjoy the finest flavoured teas blended with premium Ceylon tea. Our range of refreshing and unique flavours will provide you with an unforgettable tea experience.",
    url: "https://www.teajarceylon.com/flavoured-teas", // Replace with your actual URL
    images: [
      {
        url: "https://www.teajarceylon.com/assets/our-teas/flavoured/main-cover-v1.webp", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Flavoured Teas from Tea Jar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flavoured Teas | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Discover a wide selection of flavoured teas made with the finest Ceylon tea leaves and natural ingredients for a refreshing experience.",
    image:
      "https://www.teajarceylon.com/assets/our-teas/flavoured/main-cover-v1.webp", // Replace with your image URL
  },
};

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});

const teaData = [
  {
    title: "Cinnamon",

    imageSrc: "/assets/our-teas/flavoured/teas/cinnamon.webp",

    description:
      "A sweet and savoury brew infused with pieces of Sri Lanka's home grown, export quality cinnamon that is bound to lighten your day with its soothing tones and warm, heady aroma. Start your day with this robust blend of factory fresh Ceylon Black Tea and woody spice, as you inhale the distinctive aroma of this intoxicating herbal tea.",
    packing: "2g x 25 Enveloped Tea Bags x 56",
    netWeight: "50g",
    productCode: "KDUEXFL0005",
    linkUrl: "/products/cinnamon-flavored-25-enveloped-tea-bags-",
    reverse: false,
    bgColor: "#b56f28",
  },
  {
    title: "Cardamom",
    imageSrc: "/assets/our-teas/flavoured/teas/cardamom.webp",
    description:
      "This spicy, warm and almost citrusy characteristics of cardamom, make this herbal tea a potent and aromatic blend, ideal to relax and rejuvenate the body, mind and soul. Feel the joy as you close your eyes and take a sip of heaven, with this traditional blend of factory fresh Ceylon Black Tea infused with natural cardamom pieces.",
    packing: "2g x 25 Enveloped Tea Bags x 56",
    netWeight: "50g",
    productCode: "KDUEXFL0002",
    linkUrl: "/products/products/cardamom-flavored-25-enveloped-tea-bags",
    reverse: true,
    bgColor: "#899c39",
  },
  {
    title: "Ginger",
    imageSrc: "/assets/our-teas/flavoured/teas/ginger.webp",
    description:
      "The enchanting aromas of ginger and spices come together to create an invigoratingly refreshing drink that continues to keep you energized throughout the day. Take a sip and enjoy the scintillating sensation of this zingy and aromatic blend, infused with natural ginger pieces.",
    packing: "2g x 25 Enveloped Tea Bags x 56",
    netWeight: "50g",
    productCode: "KDUEXFL0004",
    linkUrl: "/products/ginger-flavored-25-enveloped-tea-bags",
    reverse: false,
    bgColor: "#f89a3b",
  },
  {
    title: "Strawberry",
    imageSrc: "/assets/our-teas/flavoured/teas/strawberry.webp",
    description:
      "The deep red colour of strawberries in this mouthwatering blend makes this infusion tart and refreshing, with a touch of sweetness that indulges the senses. This blend of factory-fresh Ceylon Black Tea with natural strawberry pieces makes a delicate afternoon tea.",
    packing: "2g x 25 Enveloped Tea Bags x 56",
    netWeight: "50g",
    productCode: "KDUEXFL0005",
    linkUrl: "/products/-strawberry-flavored-25-enveloped-tea-bags",
    reverse: false,
    bgColor: "#e23649",
  },
  ,
  {
    title: "Peach",
    imageSrc: "/assets/our-teas/flavoured/teas/peach.webp",
    description:
      "The familiar tang of a feel good, exotic fruity blend. A flavour explosion of mouth watering sweetness and juicy peach pieces, the bold colours of this infusion resemble warm sunsets on the beach tinged with golden hues.",
    packing: "2g x 25 Enveloped Tea Bags x 56",
    netWeight: "50g",
    productCode: "KDUEXFL0006",
    linkUrl: "/products/-peach-flavored-25-enveloped-tea-bags",
    reverse: true,
    bgColor: "#f5b022",
  },
  ,
  {
    title: "Apple",
    imageSrc: "/assets/our-teas/flavoured/teas/apple.webp",
    description:
      "A classic blend of everyone's fruity favourite with real apple pieces. This tea is perfect for any time of the year. The mildly sweet flavour of this delicious blend allows you to breathe in the aroma and be transported to summer days gone by.",
    packing: "2g x 25 Enveloped Tea Bags x 56",
    netWeight: "50g",
    productCode: "KDUEXFL0003",
    linkUrl: "/products/apple-flavoured-tea",
    reverse: false,
    bgColor: "#cd1f25",
  },
];

//Loose Tea Data

const loosteaData = [
  {
    title: "Cinnamon",
    imageSrc: "/assets/our-teas/flavoured/loose/13.webp",
    description:
      "A sweet and savoury brew infused with pieces of Sri Lanka's home grown, export quality cinnamon that is bound to lighten your day with its soothing tones and warm, heady aroma. Start your day with this robust blend of factory fresh Ceylon Black Tea and woody spice, as you inhale the distinctive aroma of this intoxicating herbal tea.",
    packing: "175g Loose Tea x 30 Canisters",
    netWeight: "175g",
    productCode: "KDUEXFLT0005",
    linkUrl: "/products/cinnamon-flavored-black-tea-loose-leaf-175g",
    reverse: false,
    bgColor: "#b56f28",
  },
  {
    title: "Cardamom",
    imageSrc: "/assets/our-teas/flavoured/loose/14.webp",
    description:
      "This spicy, warm and almost citrusy characteristics of cardamom, make this herbal tea a potent and aromatic blend, ideal to relax and rejuvenate the body, mind and soul. Feel the joy as you close your eyes and take a sip of heaven, with this traditional blend of factory fresh Ceylon Black Tea infused with natural cardamom pieces.",
    packing: "175g Loose Tea x 30 Canisters",
    netWeight: "175g",
    productCode: "KDUEXFLT0002",
    linkUrl: "/products/cardamom-flavored-black-tea-loose-leaf-175g",
    reverse: true,
    bgColor: "#899953",
  },
  {
    title: "Ginger",
    imageSrc: "/assets/our-teas/flavoured/loose/15.webp",
    description:
      "The enchanting aromas of ginger and spices come together to create an invigoratingly refreshing drink that continues to keep you energized throughout the day. Take a sip and enjoy the scintillating sensation of this zingy and aromatic blend, infused with natural ginger pieces.",
    packing: "175g Loose Tea x 30 Canisters",
    netWeight: "175g",
    productCode: "KDUEXFLT0003",
    linkUrl: "/products/ginger-flavored-black-tea-loose-leaf-175g",
    reverse: false,
    bgColor: "#e0782e",
  },
  {
    title: "Strawberry",
    imageSrc: "/assets/our-teas/flavoured/loose/18.webp",
    description:
      "The deep-red colour of strawberries in this mouthwatering blend makes this infusion tart and refreshing, with a touch of sweetness that indulges the senses. This blend of factory fresh Ceylon Black Tea with natural strawberry pieces makes a delicate afternoon tea.",
    packing: "175g Loose Tea x 30 Canisters",
    netWeight: "175g",
    productCode: "KDUEXFLT0001",
    linkUrl: "/products/strawberry-flavored-black-tea-loose-leaf-175g",
    reverse: false,
    bgColor: "#d95377",
  },
  {
    title: "Peach",
    imageSrc: "/assets/our-teas/flavoured/loose/19.webp",
    description:
      "The familiar tang of a feel-good, exotic fruity blend. A flavour explosion of mouthwatering sweetness and juicy peach pieces, the bold colours of this infusion resemble warm sunsets on the beach tinged with golden hues.",
    packing: "175g Loose Tea x 30 Canisters",
    netWeight: "175g",
    productCode: "KDUEXFLT0004",
    linkUrl: "/products/peach-flavored-black-tea-loose-leaf-175g",
    reverse: true,
    bgColor: "#f7b746",
  },
  {
    title: "Apple",
    imageSrc: "/assets/our-teas/flavoured/loose/17.webp",
    description:
      "A classic blend of everyone's fruity favourite, with real apple pieces this tea is perfect for any time of the year. The mildly sweet flavour of this delicious blend allows you to breathe in the aroma and be transported to summer days gone by.",
    packing: "175g Loose Tea x 30 Canisters",
    netWeight: "175g",
    productCode: "KDUEXFLT0006",
    linkUrl: "/products/apple-flavored-black-tea-loose-leaf-175g",
    reverse: false,
    bgColor: "#c83838",
  },
];

const page = async () => {
  const crumbs = [
    {
      label: "Home",
      href: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    { label: "Our Teas", href: "#" },
    {
      label: "Flavoured Teas",
      href: "/our-teas/flavoured-teas",
    },
  ];

  return (
    <div className="mt-10">
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-4"></div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-[80vh]">
          {/* Adjust height to 50% of the viewport */}
          <Image
            src="/assets/our-teas/flavoured/main-cover-v1.webp" // Replace with your image path
            alt="Exceptional"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Makes the image behave like background-size: cover
            className="shadow-lg"
          />

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          {/* Text */}

          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold`}
          >
            <div
              className={`${Josefin_Sans_font.className} lowercase flex justify-center text-center  text-[45px] md:text-[75px]`}
            >
              Flavoured Ceylon Black Tea
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-2 px-2">
          {/* First Column */}
          {teaData.map((tea, index) => (
            <TeaCard
              key={index}
              Josefin_Sans_font={Josefin_Sans_font}
              title={tea.title}
              imageSrc={tea.imageSrc}
              description={tea.description}
              packing={tea.packing}
              netWeight={tea.netWeight}
              productCode={tea.productCode}
              linkUrl={tea.linkUrl}
              reverse={tea.reverse}
              bgColor={tea.bgColor}
            />
          ))}
        </div>
      </div>

      {/*Loose teas  */}

      <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh]  order-1 md:order-2 overflow-hidden">
        <Image
          src="/assets/our-teas/flavoured/loose/11.webp"
          alt="huhuh"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-md "
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-[70vh] md:h-[120vh]">
          {/* Adjust height to 50% of the viewport */}
          <Image
            src="/assets/our-teas/flavoured/loose/12.webp" // Replace with your image path
            alt="Exceptional"
            layout="fill" // Ensures the image fills the container
            objectFit="cover" // Makes the image behave like background-size: cover
            className="shadow-lg  h-[100%]   object-bottom "
          />

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          {/* Text */}

          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold`}
          >
            <div
              className={`${Josefin_Sans_font.className} lowercase flex justify-center text-center  text-[45px] md:text-[75px]`}
            >
              Flavoured Ceylon Black Tea
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-2 px-2">
          {/* First Column */}
          {loosteaData.map((tea, index) => (
            <FlavouredTeaCard
              key={index}
              Josefin_Sans_font={Josefin_Sans_font}
              title={tea.title}
              imageSrc={tea.imageSrc}
              description={tea.description}
              packing={tea.packing}
              netWeight={tea.netWeight}
              productCode={tea.productCode}
              linkUrl={tea.linkUrl}
              reverse={tea.reverse}
              bgColor={tea.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

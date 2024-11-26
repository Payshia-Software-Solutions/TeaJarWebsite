import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config";
import Image from "next/image";
import { Josefin_Sans, Sulphur_Point } from "next/font/google";
import Link from "next/link";
import TeaCard from "@/components/Common/TeaCard";

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});

const teaData = [
  {
    title: "Cinnamon",
    imageSrc: "/assets/our-teas/flavoured/teas/peach.jpg",
    description:
      "A sweet and savoury brew infused with pieces of Sri Lanka's home grown, export quality cinnamon that is bound to lighten your day with its soothing tones and warm, heady aroma. Start your day with this robust blend of factory fresh Ceylon Black Tea and woody spice, as you inhale the distinctive aroma of this intoxicating herbal tea.",
    packing: "2g x 25 Enveloped Tea Bags x 56",
    netWeight: "50g",
    productCode: "KDUEXFL0005",
    linkUrl: "/products/-peach-flavored-25-enveloped-tea-bags",
    reverse: false,
    bgColor: "#b56f28",
  },
  {
    title: "Cardamom",
    imageSrc: "/assets/our-teas/flavoured/teas/cardamom.jpg",
    description:
      "This spicy, warm and almost citrusy characteristics of cardamom, make this herbal tea a potent and aromatic blend, ideal to relax and rejuvenate the body, mind and soul. Feel the joy as you close your eyes and take a sip of heaven, with this traditional blend of factory fresh Ceylon Black Tea infused with natural cardamom pieces.",
    packing: "2g x 25 Enveloped Tea Bags x 56",
    netWeight: "50g",
    productCode: "KDUEXFL0002",
    linkUrl: "/products/-peach-flavored-25-enveloped-tea-bags",
    reverse: true,
    bgColor: "#899c39",
  },
  {
    title: "Ginger",
    imageSrc: "/assets/our-teas/flavoured/teas/ginger.jpg",
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
    imageSrc: "/assets/our-teas/flavoured/teas/strawberry.jpg",
    description:
      "The deep red colour of strawberries in this mouthwatering blend makes this infusion tart and refreshing, with a touch of sweetness that indulges the senses. This blend of factory-fresh Ceylon Black Tea with natural strawberry pieces makes a delicate afternoon tea.",
    packing: "2g x 25 Enveloped Tea Bags x 56",
    netWeight: "50g",
    productCode: "KDUEXFL0005",
    linkUrl: "/products/-strawberry-flavored-25-enveloped-tea-bags",
    reverse: false,
    bgColor: "#f89a3b",
  },
  ,
  {
    title: "Peach",
    imageSrc: "/assets/our-teas/flavoured/teas/peach.jpg",
    description:
      "The familiar tang of a feel good, exotic fruity blend. A flavour explosion of mouth watering sweetness and juicy peach pieces, the bold colours of this infusion resemble warm sunsets on the beach tinged with golden hues.",
    packing: "2g x 25 Enveloped Tea Bags x 56",
    netWeight: "50g",
    productCode: "KDUEXFL0006",
    linkUrl: "/products/-peach-flavored-25-enveloped-tea-bags",
    reverse: true,
    bgColor: "#f89a3b",
  },
  ,
  {
    title: "Apple",
    imageSrc: "/assets/our-teas/flavoured/teas/apple.jpg",
    description:
      "A classic blend of everyone's fruity favourite with real apple pieces. This tea is perfect for any time of the year. The mildly sweet flavour of this delicious blend allows you to breathe in the aroma and be transported to summer days gone by.",
    packing: "2g x 25 Enveloped Tea Bags x 56",
    netWeight: "50g",
    productCode: "KDUEXFL0003",
    linkUrl: "/products/apple-flavoured-tea",
    reverse: false,
    bgColor: "#f89a3b",
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
    <div>
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-4"></div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-[80vh]">
          {/* Adjust height to 50% of the viewport */}
          <Image
            src="/assets/our-teas/flavoured/main-cover-v1.jpg" // Replace with your image path
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
              className={`${Josefin_Sans_font.className} lowercase flex justify-center text-center  text-[45px] md:text-[65px]`}
            >
              Flavoured Ceylon Black Tea
            </div>
            <div className="flex justify-center">
              <Breadcrumb
                className="mb-3 text-white"
                crumbs={crumbs}
                fontColor={"white"}
              />
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
    </div>
  );
};

export default page;

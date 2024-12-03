
import React from "react";
import ExclusiveTeaCard from "@/components/Exclusive/ExclusiveTeaCard";
import Image from "next/image";
import Link from "next/link";
import ExclusiveSmallCard from "@/components/Exclusive/ExclusiveSmallCard";
import { Josefin_Sans, Sulphur_Point } from "next/font/google";

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],

});

const teaData = [
  {
    title: 'Raspberry Flavoured Ceylon Black Tea',
    imageSrc: '/assets/our-teas/exclusive/21.webp',
    description:
      'Delight in a harmonious fusion of flavors with our Raspberry Flavored Ceylon Black Tea. Infused with succulent raspberry notes, Lychee particles, fragrant rose petals, and natural hibiscus. This exquisite blend transforms your tea ritual into a symphony of sweet, floral, and tart undertones, creating a truly enchanting experience with every sip.',
    packing: '100g Loose Tea x 30 Canisters',
    netWeight: '100g',
    productCode: 'KDUEXGS0003',
    linkUrl: '/products/ruby-soursop-flavour-100g-loose-tea',
    buttonText: 'Shop Now',
    bgColor: '#580b0a',
    reverse: false,
  },
  {
    title: 'BLUEBERRY MINT FLAVOURED CEYLON BLACK TEA',
    imageSrc: '/assets/our-teas/exclusive/22.webp',
    description:
      'Discover the perfect fusion of sophistication and freshness with our Blueberry Mint Ceylon Tea. Handpicked Ceylon leaves dance with plump blueberries and invigorating mint, creating a symphony of flavors. Antioxidant-rich and captivating, this blend elevates your tea experience, delivering a burst of fruity sweetness and minty delight in every revitalizing cup.',
    packing: '100g Loose Tea x 30 Canisters',
    netWeight: '100g',
    productCode: 'KDUEXGS0001',
    linkUrl: '/products/blue-sapphire-blueberry-mint-flavor-100g-loose-tea',
    buttonText: 'Shop Now',
    bgColor: '#1a2741',
    reverse: true,
  },
  {
    title: 'TROPICAL FLAVOURED CEYLON BLACK TEA',
    imageSrc: '/assets/our-teas/exclusive/23.webp',
    description:
      'Savor the essence of paradise with our Tropical Flavored Ceylon Black Tea. Infused with natural pineapple, mango, and passion fruit pieces, complemented by marigold and rose petals. This exquisite blend transports you to sun-drenched landscapes, offering a symphony of flavors that dance on your palate. Immerse yourself in tropical indulgence.',
    packing: '100g Loose Tea x 30 Canisters',
    netWeight: '100g',
    productCode: 'KDUEXGS0002',
    linkUrl: '/products/yellow-sapphire-vanilla-flavor-100g-loose-tea',
    buttonText: 'Shop Now',
    bgColor: '#bc8a2c',
    reverse: false,
  },
];

function Page() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[80vh] md:h-screen">
        <Image
          src="/assets/our-teas/exclusive/main-image-optimized.webp"
          alt="Exceptional"
          layout="fill"
          objectFit="cover"
          className="shadow-lg"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Text Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4">
          <h1
            className={`${Josefin_Sans_font.className} uppercase text-center text-[30px] sm:text-[40px] md:text-[50px] lg:text-[65px] font-bold`}
          >
            EXCLUSIVE PREMIUM QUALITY TEA
          </h1>
        </div>
      </div>

      {/* Exclusive Tea Card Section */}
      <div className="">
        <ExclusiveTeaCard />
      </div>

      {/* Tea Data Grid Section */}
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {teaData.map((tea, index) => (
            <ExclusiveSmallCard
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

export default Page;

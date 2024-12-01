import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config";
import Image from "next/image";
import { Corinthia } from "next/font/google";
import Link from "next/link";
import ExceptionalCard from "@/components/Exceptional/ExceptionalCard";
import Exceptionalmain from "@/components/Exceptional/ExceptionalMain";

const CorinthiaFont = Corinthia({
  weight: "400",
  subsets: ["latin"],
});

// Exceptional Teas Page Metadata
export const metadata = {
  title: "Exceptional Teas | Tea Jar - Finest Ceylon Tea in Sri Lanka",
  description:
    "Explore our collection of exceptional teas from the finest Ceylon tea estates. Experience the rich flavors and quality of premium tea blends.",
  keywords: [
    "Exceptional Teas",
    "Ceylon Teas",
    "Premium Tea",
    "Finest Ceylon Tea",
    "Premium Tea Blends",
    "Best Tea from Sri Lanka",
  ],
  openGraph: {
    title: "Exceptional Teas | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Discover our exceptional collection of Ceylon teas, sourced from the best tea estates in Sri Lanka. Enjoy premium quality tea blends with every sip.",
    url: "https://www.teajarceylon.com/exceptional-teas", // Replace with your actual URL
    images: [
      {
        url: "https://www.teajarceylon.com/assets/our-teas/exceptional/main-cover-new.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Exceptional Teas from Tea Jar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exceptional Teas | Tea Jar - Finest Ceylon Tea in Sri Lanka",
    description:
      "Taste the finest exceptional teas from Tea Jar. Sourced from the best tea estates in Sri Lanka for a premium tea experience.",
    image:
      "https://www.teajarceylon.com/assets/our-teas/exceptional/main-cover-new.jpg", // Replace with your image URL
  },
};

const page = async () => {
  const crumbs = [
    {
      label: "Home",
      href: "/",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    { label: "Our Teas", href: "#" },
    {
      label: "Exceptional Teas",
      href: "/our-teas/exceptional-teas",
    },
  ];

  const teaData = [
    {
      title: "Single Origin Ceylon Black Tea",
      imageSrc: "/assets/our-teas/exceptional/loose/37.jpg",
      description:
        "Award-winning, world-renowned Ceylon Orange Pekoe 1 tea manufactured in the region of Ratnapura, home to the world's largest orthodox black tea production factory, our very own state-of-the-art Galpadithanne Tea Factory. This single-origin tea is light in color with a delicate aroma and wonderful flavor.",
      packing: "125g Loose Tea x 30 Canisters",
      netWeight: "125g",
      productCode: "KDUEX0001",
      linkUrl: "/products/single-origin-ceylon-black-tea-loose-leaf-125g-",
      buttonText: "Shop Now",
      bgColor: "#da6828",
      reverse: false,
    },
    {
      title: "Pure Ceylon Green Tea",
      imageSrc: "/assets/our-teas/exceptional/loose/43.jpg",
      description:
        "This delightful Ceylon Tea is a perfect balance of a subtle fragrant green tea brew, complemented by gentle fresh herb notes.",
      packing: "175g Loose Tea x 30 Canisters",
      netWeight: "175g",
      productCode: "KDUEX0002",
      linkUrl: "/products/pure-ceylon-green-tea-loose-leaf-175g",
      buttonText: "Shop Now",
      bgColor: "#6c9a55",
      reverse: true,
    },
    {
      title: "Moroccan Mint Green Tea",
      imageSrc: "/assets/our-teas/exceptional/loose/45.jpg",
      description:
        "An aromatic twist on the classic Ceylon green tea, incorporating the essence of crisp mint and spearmint leaves. Refreshing way to cool off after a hard day's haggling.",
      packing: "125g Loose Tea x 30 Canisters",
      netWeight: "125g",
      productCode: "KDUEX0003",
      linkUrl: "/products/moroccan-mint-green-tea-loose-leaf-125g",
      buttonText: "Shop Now",
      bgColor: "#628ca0",
      reverse: false,
    },
    {
      title: "Pure Chamomile Flowers",
      imageSrc: "/assets/our-teas/exceptional/loose/46.jpg",
      description:
        "A fragrant infusion of golden chamomile flowers, enriches this herbal tea of sun-drenched warmth. A gentle and uplifting aroma giving you the perfect way to relax at the end of the day.",
      packing: "175g Loose Tea x 30 Canisters",
      netWeight: "175g",
      productCode: "KDUEX0004",
      linkUrl: "#",
      buttonText: "Shop Now",
      bgColor: "#e1b03b",
      reverse: false,
    },
    {
      title: "Earl Grey",
      imageSrc: "/assets/our-teas/exceptional/loose/41.jpg",
      description:
        "Our take on the typical British blend of fine Nuwara Eliya Ceylon Black tea is perfectly balanced with flavours of citrusy bergamot. We've even added a scattering of blue cornflower petals for an elegant final flourish. Renowned for its unique bergamot aroma.",
      packing: "100g Loose Tea x 30 Canisters",
      netWeight: "100g",
      productCode: "KDUEX0005",
      linkUrl: "/products/earl-grey-black-tea-loose-leaf-100g",
      buttonText: "Shop Now",
      bgColor: "#a6a8aa",
      reverse: true,
    },
    {
      title: "Jasmine Green Tea",
      imageSrc: "/assets/our-teas/exceptional/loose/47.jpg",
      description:
        "Replenish your senses with a delightful floral infusion of factory fresh pure Ceylon Green Tea, brewed with natural jasmine petals. Carefully selected from the best tea gardens in Sri Lanka, tea green, grassy tones and invigorating aroma of this brew is mildly sweet, giving it a delicately floral flavor that is completely exhilarating.",
      packing: "175g Loose Tea x 30 Canisters",
      netWeight: "175g",
      productCode: "KDUEX0006",
      linkUrl: "/products/-jasmine-green-tea-175g-loose-tea",
      buttonText: "Shop Now",
      bgColor: "#84964c",
      reverse: false,
    },
    {
      title: "Spice Chai Masala",
      imageSrc: "/assets/our-teas/exceptional/loose/40.jpg",
      description:
        "A vibrant coloured tea infused with different spices, this blend takes you to another level. Designed to tantalize every taste bud in your mouth, we have combined the spicy flavors of cardamom, ginger, clove, black pepper, and cinnamon to create the perfect balance of rich sweetness and delicate spice.",
      packing: "175g Loose Tea x 30 Canisters",
      netWeight: "175g",
      productCode: "KDUEX0007",
      linkUrl: "/products/spice-chai-masala-tea-175g-loose-tea",
      buttonText: "Shop Now",
      bgColor: "#b45a3a",
      reverse: false,
    },
    {
      title: "Rose with Vanilla",
      imageSrc: "/assets/our-teas/exceptional/loose/42.jpg",
      description:
        "A balance of fragrances come together to compose this smooth, refreshing blend. Delicate red rose petals infused with sweet vanilla extract and our factory-fresh Ceylon Black Tea create this most harmonious bouquet of flavor and aromas that will invigorate the senses. The smoky, woody tones of vanilla give this blend an earthy punch.",
      packing: "175g Loose Tea x 30 Canisters",
      netWeight: "175g",
      productCode: "KDUEX0008",
      linkUrl: "/products/rose-with-vanilla-175g-loose-tea",
      buttonText: "Shop Now",
      bgColor: "#cc5678",
      reverse: true,
    },
    {
      title: "Berry Delight",
      imageSrc: "/assets/our-teas/exceptional/loose/44.jpg",
      description:
        "Berry Delight tea is a flavourful blend combining Ceylon black tea with a medley of berries, creating a vibrant and aromatic infusion. The robust black tea base is complemented by the sweet and tangy notes of strawberries, blueberries, and raspberries. A delightful tea experience that balances richness with fruity freshness.",
      packing: "175g Loose Tea x 30 Canisters",
      netWeight: "175g",
      productCode: "KDUEX0009",
      linkUrl: "/products/bery-delight-loose-tea-175g",
      buttonText: "Shop Now",
      bgColor: "#944e66",
      reverse: false,
    },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-4"></div>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full h-[60vh]">
          {/* Adjust height to 50% of the viewport */}
          <Image
            src="/assets/our-teas/exceptional/main-cover-new.jpg" // Replace with your image path
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
            <div className={`${CorinthiaFont.className}`}>Exceptional</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-2 px-2">
          {/* First Column */}
          <div className="flex flex-col-reverse md:flex-col">
            <div className="h-[70vh] relative">
              <Image
                src="/assets/our-teas/exceptional/teas/black-tea.jpg"
                alt="Single Origin Ceylon Black Tea"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover object-bottom"
              />
            </div>
            <div className="p-6 md:p-10 text-center bg-orange-400 flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Single Origin Ceylon Black Tea
              </h3>
              <p>
                Award winning, world renowned Ceylon Orange Pekoe 1 tea
                manufactured in the region of Ratnapura, home to the world's
                largest orthodox black tea production factory, our very own
                state-of-the-art Galadarianne Tea Factory. This single origin
                tea is light in colour with a delicate aroma and wonderful
                flavour.
              </p>
              <p className="font-bold mt-2">
                Packing: 2g x 15 Pyramid Enveloped Tea Bags x 54
              </p>
              <p className="font-bold">Net Weight: 30g</p>
              <p className="font-bold">Product Code: KDUEXTB0004</p>

              <Link
                href={"/products/-single-origin-ceylon-black-tea-15-tea-bags"}
              >
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col">
            <div className="p-6 md:p-10 text-center bg-green-400 flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Pure Ceylon Green Tea
              </h3>
              <p>
                This delightful Ceylon Tea is a perfect balance of a subtle
                fragrant green tea brew, complemented by gentle fresh herb
                notes.
              </p>
              <p className="font-bold mt-2">
                Packing: 2g x 15 Pyramid Enveloped Tea Bags x 54
              </p>
              <p className="font-bold">Net Weight: 30g</p>
              <p className="font-bold">Product Code: KDUEXTB0003</p>

              <Link href={"/products/pure-ceylon-green-tea-15-tea-bags"}>
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="h-[70vh] relative">
              <Image
                src="/assets/our-teas/exceptional/teas/pure-ceylon-green-tea.jpg"
                alt="Single Origin Ceylon Black Tea"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover object-bottom"
              />
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col-reverse md:flex-col">
            <div className="h-[70vh] relative">
              <Image
                src="/assets/our-teas/exceptional/teas/moroccan-mint.jpg"
                alt="Single Origin Ceylon Black Tea"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover object-bottom"
              />
            </div>
            <div className="p-6 md:p-10 text-center bg-purple-400 flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Moroccan Mint Green Tea
              </h3>
              <p>
                An aromatic twist on the classic Ceylon green tea, incorporating
                the essence of crisp mint and spearmint leaves. Refreshing way
                to cool off after a hard day's haggling.
              </p>
              <p className="font-bold mt-2">
                Packing: 2g x 15 Pyramid Enveloped Tea Bags x 54
              </p>
              <p className="font-bold">Net Weight: 30g</p>
              <p className="font-bold">Product Code: KDUEXTB0002</p>

              <Link href={"/products/moraccan-mint-green-tea"}>
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Forth Column */}
          <div className="flex  flex-col">
            <div className="p-6 md:p-10 text-center bg-yellow-400 flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Pure Chamomile Flowers
              </h3>
              <p>
                A fragrant infusion of golden chamomile flowers, enriches this
                herbal tea of sun-drenched warmth. A gentle and uplifting aroma
                giving you the perfect way to relax at the end of the day.
              </p>
              <p className="font-bold mt-2">
                Packing: 2g x 15 Pyramid Enveloped Tea Bags x 54 Net Weight: 30g
              </p>
              <p className="font-bold">Net Weight: 30g</p>
              <p className="font-bold">Product Code: KDUEXTB0002</p>

              <Link href={"/products/-pure-chamomile-flowers-15-leaf-tea-bags"}>
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="h-[70vh] relative">
              <Image
                src="/assets/our-teas/exceptional/teas/chamomile-flowers.jpg"
                alt="Single Origin Ceylon Black Tea"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover object-bottom"
              />
            </div>
          </div>

          {/* Fifth Column */}
          <div className="flex flex-col">
            <div className="h-[70vh] relative">
              <Image
                src="/assets/our-teas/exceptional/teas/earl-gray.jpg"
                alt="Single Origin Ceylon Black Tea"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover object-bottom"
              />
            </div>
            <div className="p-6 md:p-10 text-center bg-[#a7a9ab] flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Earl Grey
              </h3>
              <p>
                Our take on the typical British blend of fine Nuwara Eliya
                Ceylon Black tea is perfectly balanced with flavours of citrusy
                bergamot, we've even added a scattering of blue cornflower
                petals for an elegant final flourish. Renowned for its unique
                bergamot aroma.
              </p>
              <p className="font-bold mt-2">
                Packing: 2g x 15 Pyramid Enveloped Tea Bags x 54
              </p>
              <p className="font-bold">Net Weight: 30g</p>
              <p className="font-bold">Product Code: KDUEXTB0001</p>

              <Link href={"/products/earl-gray-15-leaf-tea-bags"}>
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Sixth Column */}
          <div className="flex flex-col-reverse md:flex-col">
            <div className="p-6 md:p-10 text-center bg-[#96a85f] flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Jasmine Green Tea
              </h3>
              <p>
                Replenish your senses with a delightful floral infusion of
                factory fresh pure Ceylon Green Tea, brewed with natural jasmine
                petals. Carefully selected from the best tea gardens in Sri
                Lanka, tea green, grassy tones and invigorating aroma of this
                brew is mildly sweet, giving it a delicately floral flavor that
                is completely exhilarating.
              </p>
              <p className="font-bold mt-2">
                Packing: 2g x 15 Pyramid Enveloped Tea Bags x 54 Net Weight: 30g
              </p>
              <p className="font-bold">Net Weight: 30g</p>
              <p className="font-bold">Product Code: KDUEXTB0007</p>

              <Link href={"/products/jasmine-green-tea-15-leaf-tea-bags"}>
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="h-[70vh] relative">
              <Image
                src="/assets/our-teas/exceptional/teas/jasmine-green-tea.jpg"
                alt="Single Origin Ceylon Black Tea"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover object-bottom"
              />
            </div>
          </div>

          {/* Seventh Column */}
          <div className="flex flex-col">
            <div className="h-[70vh] relative">
              <Image
                src="/assets/our-teas/exceptional/teas/spice-chai-masala.jpg"
                alt="Single Origin Ceylon Black Tea"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover object-bottom"
              />
            </div>
            <div className="p-6 md:p-10 text-center bg-[#be6443] flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Spice Chai Masala
              </h3>
              <p>
                A vibrant coloured tea infused with different spices, this blend
                takes you to another level. Designed to tantalize every taste
                bud in your mouth, we have combined the spicy flavors of
                cardamom, ginger, clove, black pepper and cinnamon to create the
                perfect balance of rich sweetness and delicate spice.
              </p>
              <p className="font-bold mt-2">
                Packing: 2g x 15 Pyramid Enveloped Tea Bags x 54
              </p>
              <p className="font-bold">Net Weight: 30g</p>
              <p className="font-bold">Product Code: KDUEXTB0008</p>

              <Link href={"/products/spice-chai-masala-15-leaf-tea-bags"}>
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* 8th Column */}
          <div className="flex flex-col-reverse md:flex-col">
            <div className="p-6 md:p-10 text-center bg-[#ce587a] flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Rose With Vanilla
              </h3>
              <p>
                A balance of fragrances come together to compose this smooth,
                refreshing blend. Delicate red rose petals infused with sweet
                vanilla extract and our factory fresh Ceylon Black Tea, create
                this most harmonious bouquet of flavor and aromas that will
                invigorate the senses. The smoky, woody tones of vanilla give
                this blend an earthy punch.
              </p>
              <p className="font-bold mt-2">
                Packing: 2g x 15 Pyramid Enveloped Tea Bags x 54
              </p>
              <p className="font-bold">Net Weight: 30g</p>
              <p className="font-bold">Product Code: KDUEXTB0009</p>

              <Link href={"/products/-rose-with-vanilla-15-leaf-tea-bags"}>
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
            <div className="h-[70vh] relative">
              <Image
                src="/assets/our-teas/exceptional/teas/rose-with-vanilla.jpg"
                alt="Single Origin Ceylon Black Tea"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover object-bottom"
              />
            </div>
          </div>

          {/* 9th Column */}
          <div className="flex flex-col">
            <div className="h-[70vh] relative">
              <Image
                src="/assets/our-teas/exceptional/teas/berry-delight.jpg"
                alt="Single Origin Ceylon Black Tea"
                layout="fill"
                objectFit="cover"
                className="w-full object-cover object-bottom"
              />
            </div>
            <div className="p-6 md:p-10 text-center bg-[#934e65] flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Berry Delight
              </h3>
              <p>
                Berry delight tea is a flavourful blend combining Ceylon black
                tea with a medley of berries, creating a vibrant and aromatic
                infusion. The robust black tea base is complemented by the sweet
                and tangy notes of strawberries, blueberries, and raspberries. A
                delightful tea experience that balances richness with fruity
                freshness.
              </p>
              <p className="font-bold mt-2">
                Packing: 2g x 15 Pyramid Enveloped Tea Bags x 54
              </p>
              <p className="font-bold">Net Weight: 30g</p>
              <p className="font-bold">Product Code: KDUEXTB0006</p>

              <Link href={"/products/-bery-delight-15-leaf-tea-bags"}>
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*Exceptional Loose Tea  */}

      {/* Main Section */}
      <Exceptionalmain />

      {/* Cards Section */}
      <div className="mt-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {teaData.map((tea, index) => (
            <ExceptionalCard
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
};

export default page;

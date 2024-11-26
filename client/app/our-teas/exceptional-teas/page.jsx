import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config";
import Image from "next/image";
import { Corinthia } from "next/font/google";
import Link from "next/link";

const CorinthiaFont = Corinthia({
  weight: "400",
  subsets: ["latin"],
});

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
              <p className="font-bold">Product Code: KOUEXT80004</p>

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
              <p className="font-bold">Product Code: KOUEXT80003</p>

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
              <p className="font-bold">Product Code: KOUEXT80002</p>

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
            <div className="p-6 md:p-10 text-center bg-purple-400 flex-1">
              <h3 className="text-[25px] md:text-[30px] font-bold text-white uppercase">
                Earl Gray
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
              <p className="font-bold">Product Code: KOUEXT80001</p>

              <Link href={"/products/earl-gray-15-leaf-tea-bags"}>
                <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>

          {/* Sixth Column */}
          <div className="flex flex-col-reverse md:flex-col">
            <div className="p-6 md:p-10 text-center bg-green-400 flex-1">
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
            <div className="p-6 md:p-10 text-center bg-amber-400 flex-1">
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
            <div className="p-6 md:p-10 text-center bg-rose-400 flex-1">
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
            <div className="p-6 md:p-10 text-center bg-gray-400 flex-1">
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
    </div>
  );
};

export default page;

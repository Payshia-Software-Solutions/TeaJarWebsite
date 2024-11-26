import React from "react";

import Link from "next/link";
import Image from "next/image";
import {
  Italiana,
  Julius_Sans_One,
  Beau_Rivage,
  Indie_Flower,
  Kalam,
  Bad_Script,
} from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
});

const beauRivage = Beau_Rivage({
  weight: "400", // Specify the weight(s) available
  subsets: ["latin"], // Specify the subsets needed
});

const BadScript = Bad_Script({
  weight: "400", // Specify the weight(s) available
  subsets: ["latin"], // Specify the subsets needed
});

const KalamFont = Kalam({
  weight: "400", // Specify the weight(s) available
  subsets: ["latin"], // Specify the subsets needed
});
function MiniWording() {
  return (
    <section className="bg-babout py-8">
      <div className="mx-auto max-w-screen-xl px-8 py-4 sm:px-6 lg:px-10">
        <div className="relative">
          {/* Decorative quotation marks */}
          <span
            className={`absolute -top-4 left-0 text-white opacity-100 text-3xl md:text-6xl ${KalamFont.className}`}
          >
            "
          </span>
          <span
            className={`absolute -bottom-4 right-0 text-white opacity-100 text-3xl md:text-6xl font-serif ${KalamFont.className}`}
          >
            "
          </span>

          <blockquote className="px-4">
            <p
              className={`text-center text-white text-sm sm:text-3xl md:text-4xl leading-relaxed font-serif ${KalamFont.className}`}
            >
              Sri Lanka's iconic Ceylon tea, gifted from generation to
              generation. Two of the freshet leaves and bud are handpicked and
              manufactured at the state of the art tea factories in Sri Lanka.
              Mastering the art of world renowned, origin Ceylon tea since 1978.
            </p>
          </blockquote>
        </div>

        <div className={`${juliusSansOne.className} mt-4`}>
          <p className="text-center text-white text-sm md:text-xl">
            From us and ours,
          </p>
          <p className="text-center text-white text-sm md:text-xl">
            To you and yours
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <Image
            src={`/assets/images/chairman-sig.png`}
            width={100}
            height={100}
            alt="Chairman Signature"
            className="white-image"
          />
        </div>
      </div>
    </section>
  );
}

export default MiniWording;

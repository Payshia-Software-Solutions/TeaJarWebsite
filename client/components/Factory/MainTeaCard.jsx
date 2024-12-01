import Image from "next/image";
import Link from "next/link";
import { Sulphur_Point } from "next/font/google";

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});

const MainTeaCard = ({
  title = "CEYLON ORGANIC TEA",
  imageSrc = "/assets/our-teas/factory/58.jpg",
  description = "Our selection of organic tea features the finest Organic Ceylon Black and Green Tea, sourced from Sri Lanka's best tea estates. Produced using only sustainable agricultural methods and without the use of synthetic chemicals or pesticides. It's no surprise that these teas are an absolute treat for your body. We have introduced our range of organic teas as part of our commitment to healthy living.",
  linkUrl = "#",
  buttonText = "Shop Now",
  bgColor = "#6b7a41",
  reverse = false, // Default false for image above content
}) => {
  return (
    <div
      className={`w-full h-[600px] md:h-[700px] text-white shadow-lg border border-gray-200 flex flex-col lg:flex-row overflow-hidden ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="relative lg:w-2/3 h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div
        className="p-8 flex flex-col  justify-center  text-center items-center lg:w-1/3 h-full"
        style={{
          backgroundColor: bgColor, // Dynamic background color
        }}
      >
        {/* Title */}
        <h3
          className={`text-2xl sm:text-3xl md:text-5xl uppercase text-[#aab292] font-semibold mb-4 ${Josefin_Sans_font.className}`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base mb-6 leading-relaxed">
          {description}
        </p>

        {/* Button */}

      </div>
    </div>
  );
};

export default MainTeaCard;

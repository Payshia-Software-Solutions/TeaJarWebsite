import Image from "next/image";
import Link from "next/link";
import { Sulphur_Point } from "next/font/google";

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});

const TallTeaCard = ({
  title,
  imageSrc,
  description,
  linkUrl,
  packing,
  netWeight,
  productCode,
  buttonText,
  bgColor,
  titleColor,
  reverse = false, // Default false for image above content
}) => {
  return (
    <div
      className={`w-full h-auto lg:h-[800px] text-white px-1 pt-1 shadow-lg border border-gray-200 flex flex-col md:flex-row overflow-hidden ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="relative md:w-full lg:w-1/2 h-[600px] md:h-[700px] lg:h-auto">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div
        className="p-4 flex flex-col justify-center text-center items-center md:w-full lg:w-1/2 h-full"
        style={{
          backgroundColor: bgColor, // Dynamic background color
        }}
      >
        {/* Title */}
        <h3
          className={`text-lg sm:text-xl md:text-3xl lg:text-4xl uppercase font-semibold mb-4 ${Josefin_Sans_font.className}`}
          style={{
            color: titleColor, // Apply dynamic title color
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
          {description}
        </p>

        {/* Details */}
        <div className="mb-4 text-xs md:text-sm lg:text-base">
          <p className="font-semibold">Packing: {packing}</p>
          <p className="font-semibold">Net Weight: {netWeight}</p>
          <p className="font-semibold">Product Code: {productCode}</p>
        </div>

        {/* Button */}
        <Link href={linkUrl}>
          <button className="bg-[#7B1E1E] hover:bg-[#5a1515] text-white px-4 py-2 md:px-6 md:py-3 rounded transition duration-200 ease-in-out">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TallTeaCard;

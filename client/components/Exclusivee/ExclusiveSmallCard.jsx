import Image from "next/image";
import Link from "next/link";
import { Sulphur_Point } from "next/font/google";

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});

const ExclusiveSmallCard = ({
  title,
  imageSrc,
  description,
  packing,
  netWeight,
  productCode,
  linkUrl,
  buttonText,
  bgColor,
  reverse = false,
}) => {
  return (
    <div
      className={`w-full h-auto text-white shadow-lg border border-gray-200 flex flex-col overflow-hidden ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Image Section */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
      </div>

      {/* Content Section */}
      <div
        className="flex-1 p-4 sm:p-6 lg:p-8 text-center"
        style={{
          backgroundColor: bgColor,
        }}
      >
        {/* Title */}
        <h3
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 ${Josefin_Sans_font.className}`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base mb-4 leading-relaxed">{description}</p>

        {/* Details */}
        <div className="text-sm sm:text-base text-center mb-4">
          <p className="font-semibold">Packing: {packing}</p>
          <p className="font-semibold">Net Weight: {netWeight}</p>
          <p className="font-semibold">Product Code: {productCode}</p>
        </div>

        {/* Button */}
        <Link href={linkUrl}>
          <button className="bg-[#7B1E1E] hover:bg-[#5a1515] text-white px-4 py-2 w-full mt-4 transition duration-200 ease-in-out">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExclusiveSmallCard;

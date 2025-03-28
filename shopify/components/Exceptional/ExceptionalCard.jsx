import Image from "next/image";
import Link from "next/link";
import { Sulphur_Point } from "next/font/google";

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});

const ExceptionalCard = ({
  title,
  imageSrc,
  description,
  packing,
  netWeight,
  productCode,
  linkUrl,
  buttonText,
  bgColor,
  reverse = false, // Default false for image above content
}) => {
  return (
    <div
      className={`w-full h-auto  text-white shadow-lg border border-gray-200 flex flex-col overflow-hidden ${
        reverse ? "lg:flex-col-reverse" : "lg:flex-col"
      }`}
    >
      {/* Image Section */}
      <div className="relative h-[500px]  md:h-[700px] w-full">
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
        className="p-6 text-center flex-grow"
        style={{
          backgroundColor: bgColor, // Dynamic background color
        }}
      >
        {/* Title */}
        <h3
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${Josefin_Sans_font.className}`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm  mb-4 leading-relaxed">{description}</p>

        {/* Details */}
        <div className="text-center">
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

export default ExceptionalCard;

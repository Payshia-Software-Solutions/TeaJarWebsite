import Image from "next/image";
import Link from "next/link";
import { Sulphur_Point } from "next/font/google";

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});

const FactoryTeaCard = ({
    title,
    imageSrc,
    description,
    packing,
    netWeight,
    productCode,
    linkUrl,
    buttonText,
    bgColor ,
    reverse = false, // Default false for image above content
}) => {
  return (
    <div
      className={`w-full h-auto mx-1 mt-1 text-white shadow-lg border border-gray-200 flex flex-col lg:flex-row overflow-hidden ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="relative lg:w-1/2 h-[450px] lg:h-auto">
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
        className="p-6 flex flex-col justify-center lg:w-1/2"
        style={{
          backgroundColor: bgColor, // Dynamic background color
        }}
      >
        {/* Title */}
        <h3
          className={`text-3xl sm:text-3xl md:text-4xl font-semibold mb-4 ${Josefin_Sans_font.className}`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm mb-4 leading-relaxed">{description}</p>

        {/* Details */}
        <div className="mb-4">
          <p className="font-semibold">Packing: {packing}</p>
          <p className="font-semibold">Net Weight: {netWeight}</p>
          <p className="font-semibold">Product Code: {productCode}</p>
        </div>

        {/* Button */}
        <Link href={linkUrl}>
          <button className="bg-[#7B1E1E] hover:bg-[#5a1515] text-white px-6 py-2 transition duration-200 ease-in-out">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FactoryTeaCard;

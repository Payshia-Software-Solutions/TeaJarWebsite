import Image from "next/image";
import Link from "next/link";

const FlavouredTeaCard = ({
  Josefin_Sans_font,
  title,
  imageSrc,
  description,
  packing,
  netWeight,
  productCode,
  linkUrl,
  buttonText = "Shop Now",
  reverse = false, // Control layout direction
  bgColor,
}) => {
  return (
    <div className="">
      <div className={`flex ${reverse ? "flex-col-reverse" : "flex-col"}`}>
        {/* Title Section */}
        <div
          className={`${Josefin_Sans_font.className} flex justify-center items-center px-10 py-20 text-white text-[25px] md:text-[45px] lowercase`}
          style={{ backgroundColor: bgColor || "#b56f28" }}
        >
          {title}
        </div>

        {/* Image Section */}
        <div className="h-[70vh] relative">
          {}
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="w-full object-cover object-center"
          />
        </div>
      </div>
      {/* Content Section */}
      <div className="p-6 md:p-10 text-center bg-[#eddbca] flex-1 flex-grow">
        <p>{description}</p>
        <p className="font-bold mt-2">Packing: {packing}</p>
        <p className="font-bold">Net Weight: {netWeight}</p>
        <p className="font-bold">Product Code: {productCode}</p>

        <Link href={linkUrl}>
          <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full mt-3">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FlavouredTeaCard;

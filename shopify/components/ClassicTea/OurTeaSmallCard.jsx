import Image from "next/image";
import Link from "next/link";

const OurTeaSmallCard = ({
  title,
  description,
  packing,
  netWeight,
  productCode,
  imageSrc,
  productURL,
  reverse = false, // Add reverse prop to control layout
}) => {
  return (
  <div className="flex flex-col-reverse gap-2 p-2 md:flex-row w-full">

    {/* <div className="flex flex-col-reverse   md:flex-row w-full p-2 gap-2"> */}
      {/* Left Text Section */}
      <div
        className={`flex flex-col justify-center items-start bg-red-800 text-white p-6 w-full md:w-1/2 ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-6">
          {title}
        </h1>
        <p className="mb-4 text-sm sm:text-base">{description}</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
          dolores perspiciatis pariatur nisi quis, alias itaque cupiditate omnis
          , voluptate molestias nostrum! Excepturi molestiae quod porro itaque,
          repudiandae labore libero perferendis?
        </p>

        <p className="font-bold text-sm sm:text-base mt-6">
          Packing: {packing}
        </p>
        <p className="font-bold text-sm sm:text-base">
          Net Weight: {netWeight}
        </p>
        <p className="font-bold text-sm sm:text-base">
          Product Code: {productCode}
        </p>

        <Link href={productURL}>
          <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full sm:w-auto mt-3">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div
        className={`relative w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="h-full"
        />
      </div>
    </div>
  );
};

export default OurTeaSmallCard;

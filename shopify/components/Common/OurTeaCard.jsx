import Image from "next/image";
import Link from "next/link";

const OurTeaCard = ({
  title = "English Breakfast Tea",
  description = `Crafted on a single estate in Sri Lanka's upcountry, English breakfast tea embodies classic elegance and full-bodied flavor.
Its rich, malty notes and subtle sweetness create a perfect morning indulgence. With a deep amber hue and invigorating aroma, it reflects the heritage of Sri Lankan tea craftsmanship. Sip by sip, experience the essence of tradition and sophistication, making each cup a delightful journey through the verdant hills of Sri Lanka's renowned tea-growing region.`,
  packing = "2g x 25 Enveloped Tea Bags x 56",
  netWeight = "50g",
  productCode = "KDUEXEB0001",
  imageSrc = "/assets/our-teas/Classic/4.jpg", // Replace with actual image path
  productlink = "/products/english-breakfast-tea-25-enveloped-tea-bags",
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 p-2 h-auto md:min-h-screen  ">
      {/* Image Section */}
      <div className="relative w-full h-[50vh] md:h-full order-1 md:order-2  overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="top" // Keeps the image aligned towards the top
          className=""
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-start bg-red-800 text-white p-6 md:p-10 order-2 md:order-1 ">
        <div className="bg-gray-800 text-white px-6 py-4 max-w-[400px] mb-4 sm:max-w-[500px] flex justify-start items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider uppercase">
            {title}
          </h1>
        </div>
        <p className="mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
          {description}
        </p>
        <div className="mt-6">
          <p className="font-bold text-sm sm:text-base lg:text-lg">
            Packing: {packing}
          </p>
          <p className="font-bold text-sm sm:text-base lg:text-lg">
            Net Weight: {netWeight}
          </p>
          <p className="font-bold text-sm sm:text-base lg:text-lg">
            Product Code: {productCode}
          </p>
        </div>

        <div className="w-full mt-6">
          <Link href={productlink}>
            <button className="btn bg-theme text-white px-4 py-2 rounded-lg w-full sm:w-auto">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTeaCard;

import Image from "next/image";
import Link from "next/link";
import { Sulphur_Point } from "next/font/google";

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});

const ExclusiveTeaCard = ({
  title = "Exclusive Collection",
  description = `Crafted on a single estate in Sri Lanka's upcountry, English breakfast tea embodies classic elegance and full-bodied flavor.
Its rich, malty notes and subtle sweetness create a perfect morning indulgence. With a deep amber hue and invigorating aroma, it reflects the heritage of Sri Lankan tea craftsmanship. Sip by sip, experience the essence of tradition and sophistication, making each cup a delightful journey through the verdant hills of Sri Lanka's renowned tea-growing region.`,
  imageSrc = "/assets/our-teas/exclusive/24.jpg", // Replace with actual image path
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-auto p-4 gap-6">
      {/* Image Section */}
      <div className="relative w-full h-[50vh] md:h-[75vh] order-1 md:order-2 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-md"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center text-center bg-[#211f1f] text-[#FFC000] p-6 md:p-10 rounded-md">
        <h1
          className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 ${Josefin_Sans_font.className}`}
        >
          {title}
        </h1>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
          {description}
        </p>

        {/* Small Image */}
        <div className="w-32 sm:w-48 mt-6">
          <img
            src="/assets/our-teas/exclusive/sri-lanka.png"
            className="w-full h-auto"
            alt="Sri Lanka"
          />
        </div>
      </div>
    </div>
  );
};

export default ExclusiveTeaCard;

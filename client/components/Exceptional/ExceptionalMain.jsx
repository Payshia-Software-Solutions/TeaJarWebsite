import Image from "next/image";
import Link from "next/link";
import { Sulphur_Point } from "next/font/google";

const Josefin_Sans_font = Sulphur_Point({
  weight: "300",
  subsets: ["latin"],
});

const ExceptionalMain = ({
  title = "Exclusive Collection",
  imageSrc = "/assets/our-teas/exceptional/loose/56-optimized.webp", // Replace with actual image path
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      {/* Main Image Section */}
      <div className="relative w-full h-[100vh] order-1 md:order-2 overflow-hidden hidden md:block">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
          className="w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center text-center bg-[#211f1f] text-[#FFC000] p-6 w-full space-y-4">
        {/* Small Image */}
        <div className="w-48 sm:w-64 md:w-96">
          <img
            src="/assets/our-teas/exceptional/loose/exceptionalogo.png"
            className="w-full h-auto"
            alt="Sri Lanka"
          />
        </div>
        {/* Title */}
       
      </div>
    </div>
  );
};

export default ExceptionalMain;

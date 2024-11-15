import React, { useState } from "react";
import { Info } from "lucide-react";
import Link from "next/link";

const MintPayLogo = () => (
  <Link
    href="https://mintpay.lk/"
    target="_blank"
    rel="noopener noreferrer"
    className="no-underline"
  >
    <img
      className="inline-flex relative cursor-pointer h-5 w-auto align-middle"
      src="https://static.mintpay.lk/static/base/logo/mintpay-pill.png"
      alt="Mintpay"
    />
  </Link>
);

const KOKOLogo = () => (
  <Link
    href={`https://paykoko.com/customer-education`}
    target="_blank"
    rel="noopener noreferrer"
    className="no-underline"
  >
    <img
      className="inline-flex relative cursor-pointer h-5 w-auto align-middle"
      src="https://paykoko.com/img/logo1.7ff549c0.png"
      alt="Koko"
    />
  </Link>
);

const ProductCard = ({
  title = "Product Title",
  price = 4800,
  slug = "",
  id = "",
  images = [
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
  ],
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "LKR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(amount)
      .replace("LKR", "Rs");
  };

  const installmentAmount = Math.round(price / 3);

  return (
    <Link href={"/products/" + slug}>
      <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-md group">
        <div
          className="relative aspect-square cursor-pointer overflow-hidden"
          onMouseEnter={() => setCurrentImageIndex(1)}
          onMouseLeave={() => setCurrentImageIndex(0)}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} - View ${index + 1}`}
              className={`absolute top-0 left-0 object-cover w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-105 ${
                currentImageIndex === index
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>

        <div className="p-4 space-y-4">
          <h3 className="font-serif text-lg text-gray-800 leading-tight hover:text-gray-600 transition-colors duration-200">
            {title}
          </h3>

          <div className="space-y-2">
            <p className="text-black text-xl font-bold">{formatPrice(price)}</p>

            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-200">
                <span>or 3 X {formatPrice(installmentAmount)} with</span>
                <MintPayLogo />

                <Info className="w-4 h-4 cursor-pointer hover:text-blue-500 transition-colors duration-200" />
              </div>

              <div className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-200">
                <span>
                  or pay in 3 @ {formatPrice(installmentAmount)} with
                  <KOKOLogo />
                </span>

                <Info className="w-4 h-4 cursor-pointer hover:text-blue-500 transition-colors duration-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

import React, { useState } from "react";
import { Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const MintPayLogo = () => (
  <Link
    href="https://mintpay.lk/"
    target="_blank"
    rel="noopener noreferrer"
    className="no-underline"
  >
    <div className="inline-flex relative cursor-pointer h-5 w-auto align-middle">
      <Image
        src="https://static.mintpay.lk/static/base/logo/mintpay-pill.png"
        alt="Mintpay"
        width={100} // Specify width (or adjust as needed)
        height={20} // Specify height (or adjust as needed)
        className="object-contain" // Mimics the behavior of responsive images
      />
    </div>
  </Link>
);

const KOKOLogo = () => (
  <Link
    href={`https://paykoko.com/customer-education`}
    target="_blank"
    rel="noopener noreferrer"
    className="no-underline"
  >
    <div className="inline-flex relative cursor-pointer h-5 w-auto align-middle">
      <Image
        src="https://paykoko.com/img/logo1.7ff549c0.png"
        alt="Koko"
        width={100} // Specify width (or adjust as needed)
        height={20} // Specify height (or adjust as needed)
        className="object-contain" // Mimics the behavior of responsive images
      />
    </div>
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
  category,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "LKR",
      minimumFractionDigits: 2, // Ensures at least 2 decimal places
      maximumFractionDigits: 2, // Ensures no more than 2 decimal places
    })
      .format(amount)
      .replace("LKR", "Rs"); // Replaces 'LKR' with 'Rs'
  };

  const installmentAmount = Math.round(price / 3);

  const TeaTypes = {
    1: "Tea Bag",
    2: "Pyramid Tea Bag",
    3: "Loose Leaf Tea",
  };

  const TeaIcons = {
    1: "/assets/icons/teabag-icon.svg", // Icon for Tea Bag
    2: "/assets/icons/pyramid-tea-bags.png", // Icon for Pyramid Tea Bag
    3: "/assets/icons/loose-leaf-icon.svg", // Icon for Loose Leaf Tea
  };
  const teaType = TeaTypes[category]; // Get the tea type based on the category
  const teaIcon = TeaIcons[category]; // Get the icon URL based on the category
  if (!teaType || !teaIcon) return null; // Return nothing if category doesn't match

  const handleAddToCart = () => {
    const cartItem = {
      id,
      productName: title,
      price,
      imgUrl: images[0],
      quantity: 1,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${title} has been added to your cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };
  return (
    <Link href={"/products/" + slug}>
      <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-md group ">
        <div
          className="relative aspect-square cursor-pointer overflow-hidden"
          onMouseEnter={() => setCurrentImageIndex(1)}
          onMouseLeave={() => setCurrentImageIndex(0)}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-105 ${
                currentImageIndex === index
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
            >
              <Image
                src={image}
                alt={`${title} - View ${index + 1}`}
                style={{
                  objectFit: "cover",
                  width: "100%", // Ensure responsive scaling
                  height: "100%",
                }}
                width={300} // Specify fixed width
                height={200} // Makes the image fill the parent container
                priority={index === 0} // Optional: prioritize loading the first image
              />
            </div>
          ))}
        </div>

        <div className="p-2">
          <div className="h-10 md:h-14">
            <h3 className="text-sm lg:text-lg text-black font-bold leading-tight hover:text-gray-600 transition-colors duration-200">
              {title}
            </h3>
          </div>

          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-2">
              <Image
                src={teaIcon} // Dynamic icon based on category
                alt={`${teaType} icon`} // Dynamic alt text based on tea type
                width={20} // Specify fixed width
                height={20} // Adjusted height for proper scaling
              />
              <p className="hidden lg:block text-[12px]">{teaType}</p>{" "}
              {/* Dynamic text */}
            </div>
            <div className="text-black text-end font-bold text-lg lg:text-xl">
              {formatPrice(price)}
            </div>
          </div>

          {/* <div className="space-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-200 text-[10px]">
                <span>
                  or 3 X {formatPrice(installmentAmount)} with MintPay
                </span>
                <MintPayLogo />
              </div>

              <div className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-200 text-[10px]">
                <span>
                  or pay in 3 @ {formatPrice(installmentAmount)} with KOKO
                  <KOKOLogo />
                </span>
              </div>
            </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

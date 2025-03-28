import React, { useState } from "react";
import { ShoppingCart, Tag, Sparkles } from "lucide-react";
import Link from "next/link";
import { ShoppingCart, Tag, Sparkles } from "lucide-react";

import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const PromoTag = ({ specialPromo, specialPromoType }) => {
  const isPercentage = specialPromoType === "percentage";

  return (
    <div className="absolute top-3 right-0 z-20 flex items-center">
      {/* Main Tag */}
      <div
        className={`
        flex items-center gap-2 pr-3 pl-4 py-1.5
        ${isPercentage ? "bg-red-500" : "bg-blue-500"}
        text-white font-bold rounded-l-full
        shadow-lg transform hover:scale-105 transition-transform
        duration-300 ease-in-out
      `}
      >
        <Sparkles size={14} className="animate-pulse" />
        <span className="text-sm">
          {isPercentage ? (
            <>
              <span className="text-lg">{specialPromo}%</span> OFF
            </>
          ) : (
            <>
              <span className="text-lg">Rs {specialPromo}</span> OFF
            </>
          )}
        </span>
      </div>

      {/* Decorative Elements */}
      <div
        className={`
        absolute -bottom-2 right-0
        w-0 h-0
        border-t-[8px]
        ${isPercentage ? "border-t-red-700" : "border-t-blue-700"}
        border-r-[8px] border-r-transparent
      `}
      />
    </div>
  );
};

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
  imageStyle = null,
  specialPromo,
  specialPromoType,
  stockStatus,
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
    1: "/assets/icons/tea-bag.png", // Icon for Tea Bag
    2: "/assets/icons/teabag-icon.svg", // Icon for Pyramid Tea Bag
    3: "/assets/icons/loose-leaf-icon.svg", // Icon for Loose Leaf Tea
  };
  const teaType = TeaTypes[category]; // Get the tea type based on the category
  const teaIcon = TeaIcons[category]; // Get the icon URL based on the category
  if (!teaType || !teaIcon) return null; // Return nothing if category doesn't match

  // console.log(images[0]);
  const handleAddToCart = () => {
    // Calculate the discounted price based on specialPromoType
    let finalPrice = price;
    let rate = price;
    if (specialPromo && specialPromo > 0) {
      if (specialPromoType === "percentage") {
        finalPrice = price * (1 - specialPromo / 100); // Apply percentage discount
      } else if (specialPromoType === "fixed") {
        finalPrice = price - specialPromo; // Apply fixed value discount
      }
    }

    const cartItem = {
      id,
      productName: title,
      price: finalPrice,
      rate,
      imgUrl: images[0].split("/").pop(),
      quantity: 1,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === cartItem.id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
      cart[existingItemIndex].price = finalPrice; // Update the price as well
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Push to Google Tag Manager Data Layer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "add_to_cart",
      ecommerce: {
        currency: "LKR", // Update as per your currency
        value: parseFloat(cartItem.price), // Price of the item being added
        items: [
          {
            item_name: cartItem.productName, // Name of the product
            item_id: cartItem.id, // Product ID
            price: parseFloat(cartItem.price), // Product price
            quantity: 1, // Quantity added
          },
        ],
      },
    });

    // Send to Facebook Pixel
    fbq("track", "AddToCart", {
      content_name: cartItem.productName, // Name of the product
      content_ids: [cartItem.id], // Product ID
      content_type: "product", // Type of content
      value: parseFloat(cartItem.price), // Price of the item
      currency: "LKR", // Currency
      contents: [
        {
          id: cartItem.id, // Product ID
          quantity: 1, // Quantity added
        },
      ],
    });

    console.log("Item added to cart and sent to dataLayer!");

    toast.success(`${title} has been added to your cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // console.log("Product Status "+stockStatus);
  return (
    <Link href={"/products/" + slug}>
      <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-md group relative">
        {/* Promo Tag */}
        {specialPromo && specialPromo > 0 && (
          <PromoTag
            specialPromo={specialPromo}
            specialPromoType={specialPromoType}
          />
        )}
        <div
          className="relative aspect-square cursor-pointer overflow-hidden"
          onMouseEnter={() => setCurrentImageIndex(1)}
          onMouseLeave={() => setCurrentImageIndex(0)}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform group-hover:scale-105 ${currentImageIndex === index
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

          <div className="absolute z-10 w-full bottom-0 px-2 py-2 md:p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300 ease-in-out bg-slate-50">
            {stockStatus === 1 ? (
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevent navigation to the product page
                  handleAddToCart();
                }}
                className="hidden group-hover:flex w-full bg-theme text-white text-sm font-medium py-2 rounded shadow-md items-center justify-center gap-2 opacity-0 md:group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out"
              >
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            ) : (
              <button
                className="hidden group-hover:flex w-full bg-slate-400 text-white text-sm font-medium py-2 rounded shadow-md items-center justify-center gap-2 opacity-0 md:group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out cursor-not-allowed"
                disabled
              >
                Out of Stock
              </button>
            )}
          </div>
        </div>
        <div className="p-2 group">
          {/* Add to Cart Button */}
          {stockStatus === 1 ? (
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation to the product page
                handleAddToCart();
              }}
              name="add-to-cart-button"
              className="flex md:hidden w-full bg-theme text-white text-sm font-medium py-2 rounded shadow-md items-center justify-center gap-2 opacity-100 translate-y-0 group-hover:translate-y-0 mb-2"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          ) : (
            <button
              className="flex md:hidden w-full bg-slate-400 text-white text-sm font-medium py-2 rounded shadow-md items-center justify-center gap-2 opacity-100 translate-y-0 group-hover:translate-y-0 mb-2 cursor-not-allowed"
              disabled
            >
              Out of Stock
            </button>
          )}

          <div className="h-auto md:h-14 lg:h-16">
            <h3 className="text-sm lg:text-lg text-black font-bold leading-tight hover:text-gray-600 transition-colors duration-200 line-clamp-2">
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
              <p className="hidden xl:block text-[12px]">{teaType}</p>
              {/* Dynamic text */}
            </div>
            <div className="text-black text-end font-bold text-lg lg:text-xl">
              {specialPromo && specialPromo > 0 ? (
                <>
                  {/* If there is a discount, show the original price with a line-through on one line */}
                  <div className="text-gray-500 line-through">
                    {formatPrice(price)}
                  </div>
                  {/* Show the discounted price on the next line */}
                  <div className="text-green-600">
                    {/* Calculate discounted price based on discount type */}
                    {specialPromoType === "percentage"
                      ? formatPrice(price * (1 - specialPromo / 100))
                      : formatPrice(price - specialPromo)}
                  </div>
                </>
              ) : (
                // If no discount, just show the original price
                <div>{formatPrice(price)}</div>
              )}
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

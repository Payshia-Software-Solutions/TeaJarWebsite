import React, { useEffect, useState } from "react";
import { Star, ShoppingBag, Coffee, Scale } from "lucide-react";

const CURRENCY_SYMBOLS = {
  USD: "US$",
  LKR: "Rs.",
};

const ProductHeader = ({
  title,
  rating,
  bagsPerPack,
  servingsPerPack,
  gramsPerPack,
  price,
  currency = "LKR",
  inStock = true,
  onShippingClick,
  productId,
  specialPromo,
  specialPromoType,
}) => {
  const formatPrice = (price, currency) => {
    const formatter = new Intl.NumberFormat(
      currency === "LKR" ? "si-LK" : "en-US",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    );

    return `${CURRENCY_SYMBOLS[currency]}${formatter.format(price)}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h1>

      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-amber-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Product Specifications */}
      <div className="flex flex-wrap gap-6 mb-4 text-gray-600">
        {/* Bags Per Pack */}
        {bagsPerPack > 0 && (
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span>{bagsPerPack} bags per pack</span>
          </div>
        )}

        {/* Servings Per Pack */}
        {servingsPerPack > 0 && (
          <div className="flex items-center gap-2">
            <Coffee className="w-5 h-5" />
            <span>{servingsPerPack} servings per pack</span>
          </div>
        )}

        {/* Grams Per Pack */}
        {gramsPerPack > 0 && (
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5" />
            <span>{gramsPerPack} grams per pack</span>
          </div>
        )}
      </div>

      {/* Price and Shipping */}
      <div className="flex items-center gap-4 mt-4">
        <span
          className="text-3xl font-bold text-gray-800 amount"
          data-product-id={productId}
          data-product-name={title}
          data-product-amount={price}
        >
          {/* Check if there's a special promo */}
          {specialPromo && specialPromo > 0 ? (
            <>
              {}
              {/* Display the crossed price */}
              <span className="line-through text-gray-500 mr-2">
                {formatPrice(price, currency)}
              </span>

              {/* Calculate and display the discounted price */}
              {specialPromoType === "percentage" ? (
                <span className="text-3xl font-bold text-gray-800">
                  {formatPrice(
                    (price * (1 - specialPromo / 100)).toFixed(2),
                    currency
                  )}
                </span>
              ) : (
                <span className="text-3xl font-bold text-gray-800">
                  {formatPrice((price - specialPromo).toFixed(2), currency)}
                </span>
              )}
            </>
          ) : (
            // No promo, show original price
            <span className="text-3xl font-bold text-gray-800">
              {formatPrice(price, currency)}
            </span>
          )}
        </span>
      </div>

      <div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            <a
              href="#shipping"
              className="text-blue-600 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                onShippingClick?.();
              }}
            >
              Shipping
            </a>{" "}
            calculated at checkout.
          </span>
          <span
            className={`px-3 py-1 ${
              inStock ? "bg-green-500" : "bg-red-500"
            } text-white text-sm font-medium rounded`}
          >
            {inStock ? "IN STOCK" : "OUT OF STOCK"}
          </span>
        </div>
      </div>
    </div>
  );
};

// Default props
ProductHeader.defaultProps = {
  title: "Product Title",
  rating: 5,
  bagsPerPack: 0,
  servingsPerPack: 0,
  gramsPerPack: 0,
  price: 0.0,
  currency: "USD",
  inStock: true,
  onShippingClick: () => {},
};

export default ProductHeader;

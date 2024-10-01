import Link from "next/link";
import React from "react";

function TopSellerProduct({
  imgUrl,
  range,
  productName,
  miniDescription,
  price,
}) {
  return (
    <Link
      href="/products/cinnamon-flavored-tea"
      className="group relative block bg-black rounded-2xl border-2 w-full"
    >
      <img
        alt=""
        src={imgUrl}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-100 rounded-2xl"
      />

      <div className="relative p-4 sm:p-6 lg:p-8 flex items-end min-h-80 lg:min-h-[550px] w-full">
        <div className="w-full">
          <span className="text-xs lg:text-sm font-medium uppercase text-white bg-sky-950 p-2 opacity-90 group-hover:opacity-100">
            {range}
          </span>

          <p className="text-sm lg:text-2xl font-bold text-white mt-3">
            {productName}
          </p>

          <p className="text-sm lg:text-xl  text-white my-3">
            {price}
          </p>

          <button className="bg-white rounded-xl p-2 w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default TopSellerProduct;

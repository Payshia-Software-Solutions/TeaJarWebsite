import React from "react";
import Link from "next/link";

function ProductRangeCard({ rangeName, coverImg }) {
  return (
    <Link
      href="/products/cinnamon-flavored-tea"
      className="group relative block rounded-tr-[50px] overflow-hidden"
    >
      <img
        alt=""
        src={coverImg}
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-110 rounded-tr-[50px]"
      />

      <div className="relative p-4 sm:p-6 lg:p-8 flex items-end min-h-80 lg:min-h-[450px]">
        <div>
          <p className="text-sm md:text-3xl lg:text-4xl uppercase text-white mt-3">
            {rangeName}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductRangeCard;

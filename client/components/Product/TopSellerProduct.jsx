import React from "react";

function TopSellerProduct({ imgUrl, range, productName, miniDescription }) {
  return (
    <a href="#" className="group relative block bg-black">
      <img
        alt=""
        src={imgUrl}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-100"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
          {range}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">
          {productName}
        </p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">{miniDescription}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default TopSellerProduct;

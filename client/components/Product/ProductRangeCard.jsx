import React from "react";
function ProductRangeCard({ rangeName, coverImg }) {
  return (
    <a
      href="#"
      className="relative block rounded-tr-3xl border-2 border-gray-100 bg-white"
    >
      <div className="relative overflow-hidden -ml-6 -mt-6 h-80 w-full rounded-bl-3xl rounded-tr-3xl border border-gray-300">
        <img
          src={coverImg}
          alt={rangeName}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="p-4 text-center">
        <strong className="text-2xl font-bold uppercase text-gray-800 tracking-widest">
          {rangeName}
        </strong>
      </div>
    </a>
  );
}

export default ProductRangeCard;

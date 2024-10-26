"use client"; //This makes sure the component runs as a client component
import React, { useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

//font import
import { Italiana, Julius_Sans_One } from "next/font/google";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});

function ItemCard({ ProductName, price, Rate, imgURL, HoverimgURL }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="container max-w-lg bg-babout bg-opacity-40  mx-auto mt-2 p-4 rounded-lg"
      
    >
      <div
        className="flex justify-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link href="./Singleitem">
          <img
            src={hover ? HoverimgURL : imgURL}
            alt="Avatar"
            className="w-72 h-64 rounded-lg object-cover"
          />
        </Link>
      </div>

      <div className="text-white">
        {/* Product title */}
        <div className="mb-4">
          <div className={italiana.className}>
            <h4 className="text-2xl text-center mt-2 font-semibold py-1">
              {ProductName}
            </h4>
          </div>
        </div>

        {/* Product Rating */}
        <div className="flex justify-center">
          <ul className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <FontAwesomeIcon
                  icon={faStar}
                  className="sm:w-5 sm:h-5 w-4 h-4 text-yellow-400"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Rating */}
        <div className="text-center mt-1">
          <p className="sm:text-[1.2rem] text-md">{Rate}</p>
        </div>

        <div className="text-xl text-center">
          {/* Price */}
          <div className="">
            <h3 className="font-bold">{price}</h3>
          </div>

          <div className={italiana.className}>
            <Link href="#">
              <button className="bg-[#007b84] w-full p-3 rounded-full text-white">
                Add to Cart
              </button>
            </Link>
          </div>

          <div className={italiana.className}>
            <Link href="shop/green-tea">
              <button className="bg-white text-black w-full p-3 rounded-full font-semibold my-1 border-black border">
                View Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;

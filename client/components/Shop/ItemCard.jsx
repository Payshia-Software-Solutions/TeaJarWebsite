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

function ItemCard() {
  const [hover, setHover] = useState(false);
  

  return (
    <div className="container max-w-lg mx-auto bg-gray-100 p-2 rounded-lg">
      <div
        className="flex justify-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={
            hover
              ? "/assets/images/home/tea-cup2.png"
              : "/assets/products/1/apple.jpg"
          }
          alt="Avatar"
          className="w-64 h-64 rounded-lg object-cover"
        />
      </div>
      <div className="">
        {/**Product title  */}
        <div className={italiana.className}>
          <h4 className="text-2xl text-black text-center mt-2 font-semibold py-1">
            Tea Jar
          </h4>
        </div>
        {/** Product Rating  */}
        <div className="flex justify-center text-black">
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
        {/*Rating */}
        <div className="text-center my-2">
          <p className="sm:text-[1.2rem] text-md">4.8/5 (510)</p>
        </div>
        <div className="text-black text-xl text-center">
          {/**price  */}
          <div className="my-1">
            <h3 className="font-bold">$9.98</h3>
          </div>

          <div className={italiana.className}>
            <button className="bg-[#003865] w-full p-3 rounded-sm text-white">
              <Link href="shop/green-tea"> Add to Cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;

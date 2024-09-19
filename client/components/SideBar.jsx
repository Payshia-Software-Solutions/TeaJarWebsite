"use client"; // This makes sure the component runs as a client component

import React from "react";

import { useState } from "react";
import { FaBars } from "react-icons/fa"; // import an icon for the hamburger menu
//font import
import { Italiana, Julius_Sans_One } from "@next/font/google";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon for Mobile View */}
      <div className="md:hidden p-4 mt-8">
        <button onClick={toggleSidebar} className="text-2xl fixed">
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block bg-white p-4 shadow-lg rounded-md w-full md:w-72 fixed md:relative h-full md:h-auto z-10 md:z-auto`}
      >
        <div className="ml-5  ">
          {/* Tea by Type */}
          <div className="my-3">
            <div className={italiana.className}>
              <h2 className="text-2xl font-bold my-3">Tea by Type</h2>
            </div>
            <ul>
              <li className="my-1">
                <button className="text-black text-lg hover:text-gray-300">
                  Herbal
                </button>
              </li>
              <li className="my-1">
                <button className="text-black text-lg hover:text-gray-300">
                  Green
                </button>
              </li>
              <li className="my-1">
                <button className="text-black text-lg hover:text-gray-300">
                  Black
                </button>
              </li>
              <li className="my-1">
                <button className="text-black text-lg hover:text-gray-300">
                  White
                </button>
              </li>
              <li className="my-1">
                <button className="text-black text-lg hover:text-gray-300">
                  Matcha & Powders
                </button>
              </li>
            </ul>
          </div>
          <hr />

          {/* Rating Filter Section */}
          <div className="mb-6">
            <div className={italiana.className}>
              <h3 className="text-lg font-semibold mb-2">Rating</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">4☆ & up (143)</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">3☆ & up (9)</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">2☆ & up (2)</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">1☆ & up (2)</span>
              </label>
            </div>
          </div>
          <hr />

          {/* Ingredients Filter Section */}
          <div className="mb-6">
            <div className={italiana.className}>
              <h3 className="text-lg font-semibold mb-2 ">Ingredients</h3>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Bergamot (11)</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Blueberry (3)</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Chamomile (7)</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Cinnamon (9)</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Ginger (14)</span>
              </label>
            </div>
          </div>
          <hr />

          {/* Other Sections (Price, Certification, etc.) */}
          {/* Add other filter sections below */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

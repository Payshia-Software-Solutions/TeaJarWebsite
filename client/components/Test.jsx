"use client";

import React, { useState } from "react";


function Test() {
 
  return (
    <div>
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 h-screen ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-screen w-3/4 bg-navC shadow-lg transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav aria-label="Mobile Navigation" className="p-5">
            <div className="flex justify-center border-b mb-3 pb-3">
              <img
                img
                src="/assets/white-logo.png"
                alt=""
                className="w-[150px] mb-2"
              />
            </div>

            <ul className="flex flex-col gap-4 border-b mb-3 pb-3 font-italiana text-white">
              <li>
                <Link className=" transition hover:text-gray-500" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className=" transition hover:text-gray-500"
                  href="/our-teas"
                >
                  Our Teas
                </Link>
              </li>
              <li>
                <Link className=" transition hover:text-gray-500" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-gray-500" href="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className=" transition hover:text-gray-500" href="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className=" transition hover:text-gray-500"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className=" transition hover:text-gray-500" href="/faq">
                  FAQ
                </Link>
              </li>
            </ul>

            <div className="flex justify-between items-center gap-4 mt-5">
              <a
                className="flex-grow rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow text-center"
                href="#"
              >
                Login
              </a>

              <a
                className="rounded-md bg-navC px-5 py-2.5 text-sm font-medium text-[#2BB32A] border border-[#2BB32A]"
                href="#"
              >
                Shop Now
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Our Tea Dropdown */}
      <li
        className="relative group"
        onMouseEnter={() => toggleDropdown(true)}
        onMouseLeave={() => toggleDropdown(false)}
      >
        <button
          className="text-gray-500 bg-navC hover:text-gray-500/75 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Our Teas{" "}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isDropdownVisible && (
          <div
            id="dropdownDelay"
            className="absolute z-10 bg-navC divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDelayButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Green Tea
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Black Tea
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Herbal Tea
                </a>
              </li>
            </ul>
          </div>
        )}
      </li>
    </div>
  );
}

export default Test;

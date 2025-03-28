"use client";

import React from "react";
import { Poppins, Inter, M_PLUS_1 } from "next/font/google";
import { fabrandfayoutube } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const inter = Inter({
  weight: ["400", "500", "600", "700"], // Select the font weights you need
  subsets: ["latin"],
  display: "swap", // This ensures text is visible while fonts load
});

function Footer() {
  return (
    <div className={inter.className}>
      <footer className="bg-navC border-t-2 border-gray-700">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24 mt-0">
          {/* Back to top button */}
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <div
              className="inline-block rounded-full bg-white p-2 text-black shadow transition hover:bg-gray-200 sm:p-3 lg:p-4 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Footer Content */}
          <div className="lg:flex lg:items-end lg:justify-between">
            {/* Left Section (Logo) */}
            <div className="text-white">
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <img
                  src="/assets/white-logo.png"
                  alt="TeaJar Logo"
                  className="w-[180px]"
                />
              </div>
            </div>

            {/* Center Section (Links) */}
            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-center lg:gap-12">
              <li>
                <a
                  className="text-white transition hover:text-gray-400"
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-400"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-400"
                  href="#"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-400"
                  href="#"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-400"
                  href="#"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-gray-400"
                  href="#"
                >
                  Outlets
                </a>
              </li>
            </ul>

            {/* Right Section (Social Media) */}
            <div className="mt-12 flex justify-center lg:justify-end gap-6">
              <a href="#" className="text-white hover:text-gray-400">
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* YouTube icon */}
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Twitter icon */}
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Instagram icon */}
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  {/* Facebook icon */}
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright Section */}
          <p className="mt-12 text-center text-sm text-gray-400">
            © 2024 TeaJar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

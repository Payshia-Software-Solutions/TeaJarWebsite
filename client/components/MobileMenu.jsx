"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isTeasDropdownOpen, setIsTeasDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  return (
    <div
      className={`fixed inset-0 z-50  backdrop-blur-sm transition-opacity duration-300 ${
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-white text-black shadow-lg transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-100"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex items-center justify-center py-6">
          <Image
            src="/assets/tea-jar-logo.png"
            alt="Logo"
            width={250}
            height={250}
            className="h-auto w-1/2"
          />
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-4">
          {/* Home */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg font-medium transition hover:text-teal-400"
          >
            Home
          </Link>

          {/* Our Teas Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-lg font-medium transition hover:text-teal-400"
              onClick={() => setIsTeasDropdownOpen(!isTeasDropdownOpen)}
            >
              Our Teas
              <svg
                className={`w-5 h-5 transition-transform ${
                  isTeasDropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isTeasDropdownOpen && (
              <ul className="mt-2 space-y-2 pl-4">
                <li>
                  <Link
                    href="/our-teas/exceptional-teas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-teal-400"
                  >
                    Exceptional Teas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-teas/flavoured-teas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-teal-400"
                  >
                    Flavoured Teas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-teas/exclusive-teas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-teal-400"
                  >
                    Exclusive Teas
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* About Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-lg font-medium transition hover:text-teal-400"
              onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
            >
              About Us
              <svg
                className={`w-5 h-5 transition-transform ${
                  isAboutDropdownOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isAboutDropdownOpen && (
              <ul className="mt-2 space-y-2 pl-4">
                <li>
                  <Link
                    href="/tea-jar-story"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-teal-400"
                  >
                    Tea Jar Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tea-heritage"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-teal-400"
                  >
                    Our Tea Heritage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kdu-group"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-teal-400"
                  >
                    KDU Group
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Other Links */}
          <Link
            href="/shop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg font-medium transition hover:text-teal-400"
          >
            Shop
          </Link>
          <Link
            href="/blogs"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg font-medium transition hover:text-teal-400"
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg font-medium transition hover:text-teal-400"
          >
            Contact Us
          </Link>
        </nav>

        {/* Footer Actions */}
        <div className="mt-6 px-4">
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-3 text-center text-sm font-medium text-white bg-teal-600 rounded-md shadow transition hover:bg-teal-500"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

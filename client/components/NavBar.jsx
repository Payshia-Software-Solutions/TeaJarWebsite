"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { Italiana, Julius_Sans_One } from "next/font/google";
import { SlArrowDown } from "react-icons/sl";
import CartSideBar from "@/components/Cart/CartSideBar";
import { IoCartOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});

function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isTeasDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [isTeasDropdownOpen, setIsTeasDropdownOpen] = React.useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = React.useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  useEffect(() => {
    if (pathname !== "/") {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Drop down function
  const toggleTeasDropdown = (state) => {
    setIsDropdownVisible(state);
  };

  const toggleAboutDropdown = (state) => {
    setAboutDropdownVisible(state);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <header
        className={`fixed shadow top-0 left-0 w-full bg-navC transition-transform duration-300 z-50 ${
          isVisible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600 text-3xl font-bold" href="/">
                <img src="/assets/white-logo.png" alt="" className="h-12" />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <div className={juliusSansOne.className}>
                  <ul className="flex items-center gap-6 text-sm font-italiana">
                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/shop"
                      >
                        Shop
                      </Link>
                    </li>
                    <li
                      className="relative group"
                      onMouseEnter={() => toggleAboutDropdown(true)}
                      onMouseLeave={() => toggleAboutDropdown(false)}
                    >
                      <button
                        className="text-gray-500 bg-navC hover:text-gray-500/75 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
                        type="button"
                      >
                        <Link href="/about">About Us</Link>

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
                      {isAboutDropdownVisible && (
                        <div
                          id="dropdownAbout"
                          className="absolute z-10 bg-navC divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownAboutButton"
                          >
                            <li>
                              <a
                                href="/tea-jar-story"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Tea Jar Story
                              </a>
                            </li>
                            <li>
                              <a
                                href="/tea-heritage"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Our Tea Heritage
                              </a>
                            </li>
                            <li>
                              <a
                                href="/kdu-group"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                KDU Group
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/blogs"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-500 transition hover:text-gray-500/75"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>

                    {/* Our Tea Dropdown */}
                    <li
                      className="relative group"
                      onMouseEnter={() => toggleTeasDropdown(true)}
                      onMouseLeave={() => toggleTeasDropdown(false)}
                    >
                      <button
                        className="text-gray-500 bg-navC hover:text-gray-500/75 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
                        type="button"
                      >
                        <Link href="/our-teas">Our Teas</Link>

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
                      {isTeasDropdownVisible && (
                        <div
                          id="dropdownTeas"
                          className="absolute z-10 bg-navC divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownTeasButton"
                          >
                            <li>
                              <a
                                href="/our-teas/green"
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
                  </ul>
                </div>
              </nav>
            </div>

            <div className="flex items-center gap-4 content-end">
              <div className="hidden sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Login
                </a>

                <div className="flex">
                  <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className=" bg-navC  px-5 py-2.5 flex  text-[#2BB32A] border border-[#2BB32A]  rounded-md font-medium"
                  >
                    <IoCartOutline className=" w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="rounded bg-navC p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <IoCartOutline className="ml-3 w-6 h-6" />
                </button>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="rounded bg-navC p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        {/* Side Bar Cart */}
        {isMobileMenuOpen && (
          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        )}
        {/* Conditionally render the CartSideBar */}
        {isCartOpen && (
          <CartSideBar closeCart={closeCart} isCartOpen={isCartOpen} />
        )}
      </div>
    </div>
  );
}

export default NavBar;

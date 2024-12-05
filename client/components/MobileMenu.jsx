"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import config from "@/config"; // Import your configuration

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isTeasDropdownOpen, setIsTeasDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isShopByTeaDropdownOpen, setIsShopByTeaDropdownOpen] = useState(false);
  const [isTeaFormatDropdownOpen, setIsTeaFormatDropdownOpen] = useState(false);
  const [isTeaEditsDropdownOpen, setIsTeaEditsDropdownOpen] = useState(false);

  const [departmentsLoading, setDepartmentsLoading] = useState(true);
  const [departmentsError, setDepartmentsError] = useState(null);
  const [departments, setDepartments] = useState([]);

  // Fetch departments
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setDepartmentsLoading(true);
        const res = await fetch(`${config.API_BASE_URL}/departments`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setDepartments(data);
      } catch (error) {
        setDepartmentsError("Failed to fetch Departments");
        console.error(error);
      } finally {
        setDepartmentsLoading(false);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50  backdrop-blur-sm transition-opacity duration-300 ${
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <div
        className={`fixed top-0 overflow-auto right-0 h-screen w-3/4 max-w-sm bg-white text-black shadow-lg transition-transform duration-300 ${
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
            src="/assets/gold-logo.webp"
            alt="Logo"
            width={250}
            height={250}
            className="h-auto w-1/2"
          />
        </div>

        {/* Navigation */}
        <nav className="px-4 space-y-4 ">
          {/* Home */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg font-medium transition hover:text-green-400"
          >
            Home
          </Link>

          {/* Other Links */}
          {/* Shop Dropdown (Modified) */}
          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-lg font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
              onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
            >
              Shop
              <svg
                className={`w-5 h-5 transition-transform ${
                  isShopDropdownOpen ? "rotate-180" : ""
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
            {isShopDropdownOpen && (
              <ul className="mt-2 space-y-2 pl-4">
                <li>
                  <Link
                    href="/shop"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2 mb-2"
                  >
                    Shop All Teas
                  </Link>
                </li>

                {/* Tea Categories */}
                <li>
                  <button
                    className="flex items-center justify-between w-full py-2 text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                    onClick={() =>
                      setIsShopByTeaDropdownOpen(!isShopByTeaDropdownOpen)
                    }
                  >
                    Shop by Tea
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        isShopByTeaDropdownOpen ? "rotate-180" : ""
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
                  {isShopByTeaDropdownOpen && (
                    <ul className="mt-2 space-y-2 pl-4">
                      <li>
                        <Link
                          href="/shop/filter?category=1"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                        >
                          Black Tea
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop/filter?category=2"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                        >
                          Green Tea
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop/filter?category=3"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                        >
                          Herbal Tea
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Tea Formats */}
                <li>
                  <button
                    className="flex items-center justify-between w-full py-2 text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                    onClick={() =>
                      setIsTeaFormatDropdownOpen(!isTeaFormatDropdownOpen)
                    }
                  >
                    Tea Format
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        isTeaFormatDropdownOpen ? "rotate-180" : ""
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
                  {isTeaFormatDropdownOpen && (
                    <ul className="mt-2 space-y-2 pl-4">
                      <li>
                        <Link
                          href="/shop/filter?teaFormat=3"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                        >
                          Loose Leaf
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop/filter?teaFormat=1"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                        >
                          Tea Bags
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop/filter?teaFormat=2"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                        >
                          Luxury Leaf Tea Bags
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shop/filter?teaFormat=4"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                        >
                          Canisters
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Tea Edits */}
                <li>
                  <button
                    className="flex items-center justify-between w-full py-2 text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                    onClick={() =>
                      setIsTeaEditsDropdownOpen(!isTeaEditsDropdownOpen)
                    }
                  >
                    Shop by Collection
                    <svg
                      className={`w-5 h-5 transition-transform ${
                        isTeaEditsDropdownOpen ? "rotate-180" : ""
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
                  {isTeaEditsDropdownOpen && (
                    <ul className="mt-2 space-y-2 pl-4">
                      {departmentsLoading && <p>Loading Departments...</p>}
                      {departmentsError && <p>{departmentsError}</p>}
                      {departments.map((department) => (
                        <li key={department.id}>
                          <Link
                            href={`/shop/filter?department=${department.id}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                          >
                            {department.department_name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </div>

          {/* About Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-lg font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
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
                    className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                  >
                    Tea Jar Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tea-heritage"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                  >
                    Our Tea Heritage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kdu-group"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                  >
                    KDU Group
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Our Teas Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full py-2 text-lg font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
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
                    href="/our-teas/classic-teas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                  >
                    Classic Teas
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-teas/flavoured-teas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                  >
                    Flavoured Teas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-teas/exceptional-teas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                  >
                    Exceptional Teas
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-teas/exclusive-teas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                  >
                    Exclusive Teas
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-teas/factory-teas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                  >
                    Factory Teas
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-teas/organic-teas"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-sm font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
                  >
                    Organic Teas
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-lg font-medium transition hover:text-green-700 hover:bg-gray-100 hover:p-2"
          >
            Contact Us
          </Link>
        </nav>

        {/* Footer Actions */}
        {/* <div className="mt-6 px-4">
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-3 text-center text-sm font-medium text-white bg-teal-600 rounded-md shadow transition hover:bg-teal-500"
          >
            Login
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default MobileMenu;

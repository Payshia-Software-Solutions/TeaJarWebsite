"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { Italiana, Julius_Sans_One } from "next/font/google";
import { SlArrowDown } from "react-icons/sl";
import CartSideBar from "@/components/Cart/CartSideBar";
import { IoCartOutline, IoPerson, IoMenu } from "react-icons/io5";
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

  // const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
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
  const [isTeaDropdownVisible, setTeaDropdownVisible] = useState(false);
  const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [isOurTeasDropdownVisible, setOurTeasDropdownVisible] = useState(false);

  const handleAboutMouseEnter = () => {
    setTeaDropdownVisible(false); // Close the Tea dropdown
    setAboutDropdownVisible(true); // Open the About dropdown
    setOurTeasDropdownVisible(false); // Close the Tea dropdown
  };

  const handleOurTeasMouseEnter = () => {
    setAboutDropdownVisible(false); // Open the About dropdown
    setOurTeasDropdownVisible(true); // Close the Tea dropdown
  };

  // Search Function

  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false);

  // Mock product data
  const mockProducts = [
    { id: 1, name: "Green Tea", price: 10, image: "/assets/green-tea.jpg" },
    { id: 2, name: "Black Tea", price: 12, image: "/assets/black-tea.jpg" },
    { id: 3, name: "Matcha", price: 15, image: "/assets/matcha.jpg" },
    { id: 4, name: "Chai", price: 8, image: "/assets/chai.jpg" },
  ];
  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      // Filter products based on the query
      const filteredProducts = mockProducts.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setProducts(filteredProducts);
      setIsDropdownVisible(true);
    } else {
      setIsDropdownVisible(false);
    }
  };

  // Handle click outside (to close the dropdown)
  const handleBlur = () => {
    setTimeout(() => setIsSearchDropdownVisible(false), 200); // Delay to allow click events on items
  };
  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full bg-black text-white z-50 transition-transform duration-300 ${
          isVisible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Top Bar */}
        <div className="bg-[#FF2400] text-sm py-2 px-4 flex  justify-center items-center">
          <p>Free shipping from 1st December to 31st December</p>
        </div>

        {/* Main Navbar */}
        {/* Main Navbar */}
        <div className="px-4 py-0 md:py-4 max-w-7xl mx-auto">
          {/* Logo Row (Mobile-Responsive Centering) */}
          <div className="flex items-center justify-between md:hidden md:gap-4">
            {/* Logo */}
            <div className="w-full md:w-auto hidden md:flex justify-center md:justify-start mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-orange-500">
                <img src="/assets/white-logo.png" alt="" className="h-12" />
              </Link>
            </div>
          </div>

          {/* Navigation and Actions */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="w-full md:w-auto hidden md:flex justify-center md:justify-start mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-orange-500">
                <img src="/assets/white-logo.png" alt="" className="h-12" />
              </Link>
            </div>
            {/* Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
              <Link
                href="/"
                className="hover:text-gray-300"
                onMouseEnter={() => setTeaDropdownVisible(false)}
              >
                Home
              </Link>

              <Link href="/shop" className="relative">
                <button
                  onMouseEnter={() => setTeaDropdownVisible(true)}
                  className="hover:text-gray-300"
                >
                  Shop
                </button>
                {isTeaDropdownVisible && (
                  <div
                    onMouseLeave={() => setTeaDropdownVisible(false)}
                    className="fixed w-screen left-0 bg-emerald-950 text-white  "
                    style={{ top: "100%" }}
                  >
                    <div className="shadow-lg py-4 px-6 grid grid-cols-4 gap-6 max-w-7xl mx-auto">
                      {/* Column 1 */}
                      <div>
                        <h3 className="font-bold mb-3 text-gray-400">
                          SHOP TEA
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/shop/all-teas"
                              className="hover:text-gray-300"
                            >
                              Shop All Teas
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/shop/top-sellers"
                              className="hover:text-gray-300"
                            >
                              Top Sellers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/shop/bundle-save"
                              className="hover:text-gray-300"
                            >
                              Bundle Up & Save
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Column 2 */}
                      <div>
                        <h3 className="font-bold mb-3 text-gray-400">
                          SHOP BY TEA
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/tea/black-tea"
                              className="hover:text-gray-300"
                            >
                              Black Tea
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tea/green-tea"
                              className="hover:text-gray-300"
                            >
                              Green Tea
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tea/matcha"
                              className="hover:text-gray-300"
                            >
                              Matcha
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tea/chai"
                              className="hover:text-gray-300"
                            >
                              Chai
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Column 3 */}
                      <div>
                        <h3 className="font-bold mb-3 text-gray-400">
                          TEA FORMAT
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/format/loose-leaf"
                              className="hover:text-gray-300"
                            >
                              Loose Leaf
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/format/tea-bags"
                              className="hover:text-gray-300"
                            >
                              Tea Bags
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/format/refills"
                              className="hover:text-gray-300"
                            >
                              Refills
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/format/tins"
                              className="hover:text-gray-300"
                            >
                              Tins
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Column 4 */}
                      <div>
                        <h3 className="font-bold mb-3 text-gray-400">
                          TEA EDITS
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/edits/breakfast-tea"
                              className="hover:text-gray-300"
                            >
                              Breakfast Tea
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/edits/iced-tea"
                              className="hover:text-gray-300"
                            >
                              Iced Tea
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/edits/wellness"
                              className="hover:text-gray-300"
                            >
                              Wellness
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </Link>

              <div className="relative">
                <button
                  onMouseEnter={() => handleAboutMouseEnter(true)}
                  className="hover:text-gray-300"
                >
                  About Us
                </button>
                {isAboutDropdownVisible && (
                  <div
                    onMouseLeave={() => setAboutDropdownVisible(false)}
                    className="fixed w-screen left-0 bg-emerald-950 text-white  "
                    style={{ top: "100%" }}
                  >
                    <div className="shadow-lg py-4 px-6 grid grid-cols-4 gap-6 max-w-7xl mx-auto">
                      {/* Column 1 */}
                      <div>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/tea-jar-story"
                              className="hover:text-gray-300"
                            >
                              Tea Jar Story
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/tea-heritage"
                              className="hover:text-gray-300"
                            >
                              Our Tea Heritage
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/kdu-group"
                              className="hover:text-gray-300"
                            >
                              KDU Group
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onMouseEnter={() => handleOurTeasMouseEnter(true)}
                  className="hover:text-gray-300"
                >
                  Our Teas
                </button>
                {isOurTeasDropdownVisible && (
                  <div
                    onMouseLeave={() => setOurTeasDropdownVisible(false)}
                    className="fixed w-screen left-0 bg-emerald-950 text-white  "
                    style={{ top: "100%" }}
                  >
                    <div className="shadow-lg py-4 px-6 grid grid-cols-4 gap-6 max-w-7xl mx-auto">
                      {/* Column 1 */}
                      <div>
                        <h3 className="font-bold mb-3 text-gray-400">
                          SHOP TEA
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/shop/all-teas"
                              className="hover:text-gray-300"
                            >
                              Shop All Teas
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/shop/top-sellers"
                              className="hover:text-gray-300"
                            >
                              Top Sellers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/shop/bundle-save"
                              className="hover:text-gray-300"
                            >
                              Bundle Up & Save
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Column 2 */}
                      <div>
                        <h3 className="font-bold mb-3 text-gray-400">
                          SHOP BY TEA
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/tea/black-tea"
                              className="hover:text-gray-300"
                            >
                              Black Tea
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tea/green-tea"
                              className="hover:text-gray-300"
                            >
                              Green Tea
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tea/matcha"
                              className="hover:text-gray-300"
                            >
                              Matcha
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tea/chai"
                              className="hover:text-gray-300"
                            >
                              Chai
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Column 3 */}
                      <div>
                        <h3 className="font-bold mb-3 text-gray-400">
                          TEA FORMAT
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/format/loose-leaf"
                              className="hover:text-gray-300"
                            >
                              Loose Leaf
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/format/tea-bags"
                              className="hover:text-gray-300"
                            >
                              Tea Bags
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/format/refills"
                              className="hover:text-gray-300"
                            >
                              Refills
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/format/tins"
                              className="hover:text-gray-300"
                            >
                              Tins
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Column 4 */}
                      <div>
                        <h3 className="font-bold mb-3 text-gray-400">
                          TEA EDITS
                        </h3>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/edits/breakfast-tea"
                              className="hover:text-gray-300"
                            >
                              Breakfast Tea
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/edits/iced-tea"
                              className="hover:text-gray-300"
                            >
                              Iced Tea
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/edits/wellness"
                              className="hover:text-gray-300"
                            >
                              Wellness
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                onMouseEnter={() => setOurTeasDropdownVisible(false)}
                href="/contact"
                className="hover:text-gray-300"
              >
                Contact Us
              </Link>
            </nav>

            {/* Search and User Actions */}
            <div className="flex justify-between items-center gap-4">
              {/* Search Box */}
              <div className="w-full md:w-auto  md:hidden justify-center md:justify-start mb-4 md:mb-0">
                <Link href="/" className="text-2xl font-bold text-orange-500">
                  <img src="/assets/white-logo.png" alt="" className="h-12" />
                </Link>
              </div>

              <div className="flex-grow relative hidden md:flex">
                <input
                  type="text"
                  className="w-full bg-gray-700 text-sm text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Find products"
                  value={query}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <div className="flex gap-4">
                  <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="hover:text-gray-300"
                  >
                    <IoCartOutline className="w-6 h-6" />
                  </button>

                  <button className="hover:text-gray-300 hidden md:flex">
                    <IoPerson className="w-6 h-6" />
                  </button>

                  <button
                    className="hover:text-gray-300 flex md:hidden"
                    onClick={toggleMobileMenu}
                  >
                    <IoMenu className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Product Dropdown */}
      {isSearchDropdownVisible && products.length > 0 && (
        <div className="absolute bg-white border border-gray-300 mt-2 w-full rounded-lg shadow-lg z-50">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 p-4 hover:bg-gray-100 cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div>
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No results */}
      {isSearchDropdownVisible && products.length === 0 && (
        <div className="absolute bg-white border border-gray-300 mt-2 w-full rounded-lg shadow-lg z-50 p-4 text-gray-500">
          No products found.
        </div>
      )}
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

"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { Italiana, Julius_Sans_One } from "next/font/google";
import { SlArrowDown } from "react-icons/sl";
import CartSideBar from "@/components/Cart/CartSideBar";
import { IoCartOutline, IoPerson, IoMenu } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { FaTruck } from "react-icons/fa";

import config from "@/config"; // Import your configuration

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
  const searchRef = useRef(null);

  // const [isAboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [isTeasDropdownOpen, setIsTeasDropdownOpen] = React.useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = React.useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const [selectedDepartmentIds, setSelectedDepartmentIds] = useState([]);
  const [departmentsLoading, setDepartmentsLoading] = useState(true);
  const [departmentsError, setDepartmentsError] = useState(null);
  const [departments, setDepartments] = useState([]);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "LKR",
      minimumFractionDigits: 2, // Ensures at least 2 decimal places
      maximumFractionDigits: 2, // Ensures no more than 2 decimal places
    })
      .format(amount)
      .replace("LKR", "Rs"); // Replaces 'LKR' with 'Rs'
  };

  const TeaTypes = {
    1: "Tea Bag",
    2: "Pyramid Tea Bag",
    3: "Loose Leaf Tea",
  };

  const TeaIcons = {
    1: "/assets/icons/tea-bag.png", // Icon for Tea Bag
    2: "/assets/icons/teabag-icon.svg", // Icon for Pyramid Tea Bag
    3: "/assets/icons/loose-leaf-icon.svg", // Icon for Loose Leaf Tea
  };
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
    setTeaDropdownVisible(false); // Close the Tea dropdown
    setOurTeasDropdownVisible(true); // Close the Tea dropdown
  };

  const handleShopMouseEnter = () => {
    setAboutDropdownVisible(false); // Open the About dropdown
    setTeaDropdownVisible(true); // Close the Tea dropdown
  };

  // Search Function

  const [products, setProducts] = useState([]);
  const [isSearchDropdownVisible, setIsSearchDropdownVisible] = useState(false);
  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${config.API_BASE_URL}/products`);
        const data = await response.json();
        setProducts(data); // Assuming the endpoint returns an array of products
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // console.log(products);
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Update the query state as user types
  // Update query and filter products
  const handleInputChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    const filtered = products
      .map((product) => {
        const teaType = TeaTypes[product.category_id];
        const teaIcon = TeaIcons[product.category_id];
        if (!teaType || !teaIcon) return null; // Skip products without matching categories
        return {
          ...product,
          teaType,
          teaIcon, // Add teaType and teaIcon to product object
        };
      })
      .filter(
        (product) =>
          product &&
          product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    setFilteredProducts(filtered);
  };

  // console.log(filteredProducts);

  const handleBlur = () => {
    // Optional: Hide search results or do other operations when input loses focus
  };

  // Detect clicks outside of the search bar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setQuery(""); // Clear the search query to hide the dropdown
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full bg-black text-white z-50 transition-transform duration-300 ${
          isVisible ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Top Bar */}
        <div className="bg-[#D22B2B] text-sm py-2 px-4 flex justify-center items-center text-white">
          <FaTruck className="w-5 h-5 mr-2" />
          <p className="text-center whitespace-nowrap">
            Enjoy Free Shipping from December 1st to 31st!
          </p>
        </div>

        {/* Main Navbar */}
        <div className="px-4 py-0 md:py-4 max-w-7xl mx-auto">
          {/* Logo Row (Mobile-Responsive Centering) */}
          <div className="flex items-center justify-between md:hidden md:gap-4">
            {/* Logo */}
            <div className="w-full md:w-auto hidden md:flex justify-center md:justify-start mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-orange-500">
                <img src="/assets/gold-logo.webp" alt="" className="h-12" />
              </Link>
            </div>
          </div>

          {/* Navigation and Actions */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="w-full md:w-auto hidden md:flex justify-center md:justify-start mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-orange-500">
                <img src="/assets/gold-logo.webp" alt="" className="h-12" />
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
                  onMouseEnter={() => handleShopMouseEnter(true)}
                  className="hover:text-gray-300"
                >
                  Shop
                </button>
                {isTeaDropdownVisible && (
                  <div
                    onMouseLeave={() => setTeaDropdownVisible(false)}
                    className="fixed w-screen left-0 bg-emerald-950 text-white shadow-md"
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
                            <Link href="/shop" className="hover:text-gray-300">
                              Shop All Teas
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/products/christmas-tea-advent-calendar--24-individually-wrapped-tea-bags"
                              className="hover:text-gray-300"
                            >
                              Advent Calender
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
                              href="/shop/filter?category=1"
                              className="hover:text-gray-300"
                            >
                              Black Tea
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/shop/filter?category=2"
                              className="hover:text-gray-300"
                            >
                              Green Tea
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/shop/filter?category=3"
                              className="hover:text-gray-300"
                            >
                              Herbal Tea
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
                              href="/shop/filter?teaFormat=3"
                              className="hover:text-gray-300"
                            >
                              Loose Leaf
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/shop/filter?teaFormat=1"
                              className="hover:text-gray-300"
                            >
                              Tea Bags
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/shop/filter?teaFormat=2"
                              className="hover:text-gray-300"
                            >
                              Luxury Leaf Tea Bags
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/shop/filter?teaFormat=4"
                              className="hover:text-gray-300"
                            >
                              Canisters
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
                          {departmentsLoading && <p>Loading Departments...</p>}
                          {departmentsError && <p>{departmentsError}</p>}
                          {departments.map((department) => (
                            <li key={department.id}>
                              <Link
                                href={`/shop/filter?department=${department.id}`}
                                className="hover:text-gray-300"
                              >
                                {department.department_name}
                              </Link>
                            </li>
                          ))}
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
                    className="fixed w-screen left-0 bg-emerald-950 text-white  shadow-md"
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
                    className="fixed w-screen left-0 bg-emerald-950 text-white shadow-md"
                    style={{ top: "100%" }}
                  >
                    <div className="shadow-lg py-4 px-6 grid grid-cols-4 gap-6 max-w-7xl mx-auto">
                      {/* Column 1 */}
                      <div>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/our-teas/classic-teas"
                              className="hover:text-gray-300"
                            >
                              Classic Teas
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/our-teas/flavoured-teas"
                              className="hover:text-gray-300"
                            >
                              Flavoured Teas
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/our-teas/exceptional-teas"
                              className="hover:text-gray-300"
                            >
                              Exceptional Teas
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/our-teas/exclusive-teas"
                              className="hover:text-gray-300"
                            >
                              Exclusive Teas
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/our-teas/factory-teas"
                              className="hover:text-gray-300"
                            >
                              Factory Teas
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              href="/our-teas/organic-teas"
                              className="hover:text-gray-300"
                            >
                              Organic Teas
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
                  <img
                    src="/assets/gold-logo.webp"
                    alt=""
                    className="h-8 mt-2"
                  />
                </Link>
              </div>

              <div ref={searchRef} className="flex-grow relative flex">
                <input
                  type="text"
                  className="w-full bg-gray-700 text-sm text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Find products"
                  value={query}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
                {/* Display the filtered products */}
                {query && (
                  <div className="fixed md:absolute left-0 md:left-auto bg-white w-full md:w-[16vw] mt-11 md:mt-12 border border-gray-300 rounded-md shadow-md z-10">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.slice(0, 5).map((product) => (
                        <Link
                          href={`/products/${product.slug}`}
                          key={product.product_id} // Move the key to the Link component for optimization
                          onClick={() => setQuery("")} // Clear search query on click
                        >
                          <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            <Image
                              src={`${config.ADMIN_BASE_URL}/pos-system/assets/images/products/${product.product_id}/${product.image_path}`}
                              alt={product.product_name}
                              className="object-cover rounded mr-4"
                              width={50}
                              height={50}
                            />
                            <div>
                              <p className="text-[12px] leading-1 font-medium text-black w-full">
                                {product.product_name}
                              </p>
                              <p className="text-[10px] text-gray-500 flex gap-2 justify-start items-center md:justify-between">
                                <Image
                                  src={product.teaIcon} // Dynamic icon based on category
                                  alt={`${product.teaType} icon`} // Dynamic alt text based on tea type
                                  width={12} // Specify fixed width
                                  height={4} // Adjusted height for proper scaling
                                />
                                {formatPrice(product.selling_price)}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-gray-500">
                        No results found
                      </div>
                    )}
                  </div>
                )}
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
                alt={product.product_name}
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

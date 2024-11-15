"use client"; // This makes sure the component runs as a client component

import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa"; // import an icon for the hamburger menu
//font import
import { Italiana, Julius_Sans_One } from "next/font/google";
import config from "@/config";

const italiana = Italiana({
  weight: "400", // Italiana only comes with regular weight (400)
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400", // Julius Sans One only has a regular weight
  subsets: ["latin"],
});

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [categories, setCategories] = useState([]);
  const [categories_error, setCategoriesError] = useState(null);
  const [categories_loading, setCategoriesLoading] = useState(true);

  const [departments, setDepartments] = useState([]);
  const [departments_error, setDepartmentsError] = useState(null);
  const [departments_loading, setDepartmentsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategoriesLoading(true);
        const res = await fetch(`${config.API_BASE_URL}/categories`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        setCategoriesError("Failed to fetch Categories");
        console.error("Failed to fetch Categories:", error);
      } finally {
        setCategoriesLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setDepartmentsLoading(true);
        const res = await fetch(`${config.API_BASE_URL}/departments`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setDepartments(data);
      } catch (error) {
        setDepartmentsError("Failed to fetch Departments");
        console.error("Failed to fetch Departments:", error);
      } finally {
        setDepartmentsLoading(false);
      }
    };
    fetchDepartments();
  }, []);

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
        } md:block p-4 bg-gray-50 bg-opacity-10 rounded-md w-full md:w-72 h-full z-10 sticky top-0`}
      >
        <div className=" text-black ">
          {/* Tea by Type */}
          <div className="my-3 ">
            <div className={italiana.className}>
              <h2 className="text-2xl font-bold my-3">Tea by Categories</h2>
            </div>
            <div className={juliusSansOne.className}>
              <ul>
                {categories_loading && <p>Loading Categories...</p>}
                {categories_error && <p>{categories_error}</p>}
                {categories.map((category) => (
                  <li className="my-1">
                    <button className=" text-lg hover:text-gray-300">
                      {category.category_name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="border-black border-t-2 mx-auto mb-6" />

          <div className="my-3 ">
            <div className={italiana.className}>
              <h2 className="text-2xl font-bold my-3">Tea by Range</h2>
            </div>
            <div className={juliusSansOne.className}>
              <ul>
                {departments_loading && <p>Loading Departments...</p>}
                {departments_error && <p>{departments_error}</p>}
                {departments.map((department) => (
                  <li className="my-1">
                    <button className=" text-lg hover:text-gray-300">
                      {department.department_name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

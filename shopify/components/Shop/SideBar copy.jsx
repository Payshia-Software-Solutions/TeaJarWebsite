"use client"; // This makes sure the component runs as a client component

import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa"; // import an icon for the hamburger menu
// font import
import { Italiana, Julius_Sans_One } from "next/font/google";
import config from "@/config";
import { useRouter } from "next/navigation"; // Use `next/navigation` instead of `next/router` for client-side

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
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [selectedDepartmentIds, setSelectedDepartmentIds] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const [isClient, setIsClient] = useState(false); // State to check if it's client-side
  const [categories, setCategories] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [sections, setSections] = useState([]);

  const [categories_error, setCategoriesError] = useState(null);
  const [departments_error, setDepartmentsError] = useState(null);
  const [sections_error, setSectionsError] = useState(null);

  const [categories_loading, setCategoriesLoading] = useState(true);
  const [departments_loading, setDepartmentsLoading] = useState(true);
  const [sections_loading, setSectionsLoading] = useState(true);

  // Use Next.js Router
  const router = useRouter();

  // Check if component is mounted in the browser (client-side)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle changes in filters
  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    setSelectedCategoryIds((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleDepartmentChange = (e) => {
    const departmentId = e.target.value;
    setSelectedDepartmentIds((prev) =>
      prev.includes(departmentId)
        ? prev.filter((id) => id !== departmentId)
        : [...prev, departmentId]
    );
  };

  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);

  // Construct URL with query parameters
  const buildFilterUrl = () => {
    let url = "/shop/filter?";
    const params = [];

    // Add the filters to the query parameters array
    if (selectedCategoryIds.length > 0) {
      params.push(`category=${selectedCategoryIds.join(",")}`);
    }
    if (selectedDepartmentIds.length > 0) {
      params.push(`department=${selectedDepartmentIds.join(",")}`);
    }
    if (minPrice) {
      params.push(`minPrice=${minPrice}`);
    }
    if (maxPrice) {
      params.push(`maxPrice=${maxPrice}`);
    }

    // Add the sort option
    if (sortOrder) {
      params.push(`sort=${sortOrder}`);
    }

    // Join the parameters with `&` and return the full URL
    if (params.length > 0) {
      url += params.join("&");
    }

    return url;
  };

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchSections = async () => {
      try {
        setSectionsLoading(true);
        const res = await fetch(`${config.API_BASE_URL}/sections`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setSections(data);
      } catch (error) {
        setSectionsError("Failed to fetch Sections");
        console.error("Failed to fetch Sections:", error);
      } finally {
        setSectionsLoading(false);
      }
    };
    fetchSections();
  }, []);

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

  // Ensure that the router is only accessed on the client-side
  if (!isClient) {
    return null; // Return null or a loading state until the client is mounted
  }

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
                {sections_loading && <p>Loading Sections...</p>}
                {sections_error && <p>{sections_error}</p>}
                {sections.map((section) => (
                  <li key={section.id} className="my-1">
                    <label className="text-lg hover:text-gray-300">
                      <input
                        type="checkbox"
                        value={section.id} // Use ID here
                        checked={selectedCategoryIds.includes(section.id)}
                        onChange={handleCategoryChange}
                        className="mr-2"
                      />
                      {section.section_name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-black border-t-2 mx-auto mb-6" />

          {/* Tea by Range */}
          <div className="my-3 ">
            <div className={italiana.className}>
              <h2 className="text-2xl font-bold my-3">Tea by Range</h2>
            </div>
            <div className={juliusSansOne.className}>
              <ul>
                {departments_loading && <p>Loading Departments...</p>}
                {departments_error && <p>{departments_error}</p>}
                {departments.map((department) => (
                  <li key={department.id} className="my-1">
                    <label className="text-lg hover:text-gray-300">
                      <input
                        type="checkbox"
                        value={department.id} // Use ID here
                        checked={selectedDepartmentIds.includes(department.id)}
                        onChange={handleDepartmentChange}
                        className="mr-2"
                      />
                      {department.department_name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price Range */}
          <hr className="border-black border-t-2 mx-auto mb-6" />
          <div className="my-3 ">
            <div className={italiana.className}>
              <h2 className="text-2xl font-bold my-3">Price Range</h2>
            </div>
            <div className={juliusSansOne.className}>
              <label>
                Min Price:
                <input
                  type="number"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  className="border border-gray-300 rounded p-2 w-full"
                />
              </label>
              <br />
              <label>
                Max Price:
                <input
                  type="number"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="border border-gray-300 rounded p-2 w-full"
                />
              </label>
            </div>
          </div>

          {/* Sort By */}
          <hr className="border-black border-t-2 mx-auto mb-6" />
          <div className="my-3">
            <div className={italiana.className}>
              <h2 className="text-2xl font-bold my-3">Sort By</h2>
            </div>
            <div className={juliusSansOne.className}>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Sort by</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
                <option value="newestFirst">Newest First</option>
                <option value="oldestFirst">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Apply Filters Button */}
          <button
            onClick={() => router.push(buildFilterUrl())}
            className="bg-black text-white p-2 rounded mt-4 w-full"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

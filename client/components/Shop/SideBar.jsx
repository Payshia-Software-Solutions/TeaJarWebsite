"use client"; // Ensures this component runs as a client component
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa"; // Icon for the hamburger menu
import { Italiana, Julius_Sans_One } from "next/font/google"; // Import Google Fonts
import config from "@/config"; // Import your configuration
import { useRouter } from "next/navigation"; // Use the new Next.js router

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
  const [selectedTeaFormatIds, setSelectedTeaFormatIds] = useState([]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const [categories, setCategories] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [sections, setSections] = useState([]);
  const [teaFormats, setTeaFormats] = useState([]);

  const [categoriesError, setCategoriesError] = useState(null);
  const [departmentsError, setDepartmentsError] = useState(null);
  const [sectionsError, setSectionsError] = useState(null);
  const [teaFormatsError, setTeaFormatsError] = useState(true);

  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [departmentsLoading, setDepartmentsLoading] = useState(true);
  const [sectionsLoading, setSectionsLoading] = useState(true);
  const [teaFormatsLoading, setTeaFormatsLoading] = useState(true);

  const router = useRouter();

  // Toggle the sidebar visibility
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Fetch sections
  useEffect(() => {
    const fetchSections = async () => {
      try {
        setSectionsLoading(true);
        const res = await fetch(`${config.API_BASE_URL}/sections`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setSections(data);
      } catch (error) {
        setSectionsError("Failed to fetch Sections");
        console.error(error);
      } finally {
        setSectionsLoading(false);
      }
    };
    fetchSections();
  }, []);

  // Fetch Tea Formats
  useEffect(() => {
    const fetchTeaFormats = async () => {
      try {
        setTeaFormatsLoading(true);
        const res = await fetch(`${config.API_BASE_URL}/categories`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setTeaFormats(data);
      } catch (error) {
        setTeaFormatsError("Failed to fetch Sections");
        console.error(error);
      } finally {
        setTeaFormatsLoading(false);
      }
    };
    fetchTeaFormats();
  }, []);
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   // Ensure this is only run client-side
  //   if (typeof window === "undefined") return;
  //   const categoryParams = searchParams.get("category");
  //   const departmentParams = searchParams.get("department");

  //   if (categoryParams) {
  //     setSelectedCategoryIds(categoryParams.split(",").map(Number));
  //   }

  //   if (departmentParams) {
  //     setSelectedDepartmentIds(departmentParams.split(",").map(Number));
  //   }
  // }, [searchParams]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setCategoriesLoading(true);
        const res = await fetch(`${config.API_BASE_URL}/categories`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        setCategoriesError("Failed to fetch Categories");
        console.error(error);
      } finally {
        setCategoriesLoading(false);
      }
    };
    fetchCategories();
  }, []);

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

  // Handle category checkbox change
  // const handleCategoryChange = (e) => {
  //   const categoryId = Number(e.target.value); // Ensure the ID is a number
  //   setSelectedCategoryIds((prev) =>
  //     prev.includes(categoryId)
  //       ? prev.filter((id) => id !== categoryId)
  //       : [...prev, categoryId]
  //   );
  // };

  // Handle category checkbox change
  const handleCategoryChange = (e) => {
    const categoryId = Number(e.target.value); // Ensure the ID is a number
    const updatedCategoryIds = selectedCategoryIds.includes(categoryId)
      ? selectedCategoryIds.filter((id) => id !== categoryId)
      : [...selectedCategoryIds, categoryId];

    setSelectedCategoryIds(updatedCategoryIds);

    // Redirect with updated filters
    const url = buildFilterUrl(
      updatedCategoryIds,
      selectedDepartmentIds,
      minPrice,
      maxPrice,
      sortOrder,
      selectedTeaFormatIds
    );
    router.push(url);
  };

  // Handle department checkbox change
  // const handleDepartmentChange = (e) => {
  //   const departmentId = Number(e.target.value); // Ensure the ID is a number
  //   setSelectedDepartmentIds((prev) =>
  //     prev.includes(departmentId)
  //       ? prev.filter((id) => id !== departmentId)
  //       : [...prev, departmentId]
  //   );
  // };

  // Handle department checkbox change
  const handleDepartmentChange = (e) => {
    const departmentId = Number(e.target.value); // Ensure the ID is a number
    const updatedDepartmentIds = selectedDepartmentIds.includes(departmentId)
      ? selectedDepartmentIds.filter((id) => id !== departmentId)
      : [...selectedDepartmentIds, departmentId];

    setSelectedDepartmentIds(updatedDepartmentIds);

    // Redirect with updated filters
    const url = buildFilterUrl(
      selectedCategoryIds,
      updatedDepartmentIds,
      minPrice,
      maxPrice,
      sortOrder,
      selectedTeaFormatIds
    );
    router.push(url);
  };

  // Handle department checkbox change
  const handleTeaFormatChange = (e) => {
    const teaFormatId = Number(e.target.value); // Ensure the ID is a number
    const updatedTeaFormatIds = selectedTeaFormatIds.includes(teaFormatId)
      ? selectedTeaFormatIds.filter((id) => id !== teaFormatId)
      : [...selectedTeaFormatIds, teaFormatId];

    setSelectedTeaFormatIds(updatedTeaFormatIds);

    // Redirect with updated filters
    const url = buildFilterUrl(
      selectedCategoryIds,
      updatedDepartmentIds,
      minPrice,
      maxPrice,
      sortOrder,
      selectedTeaFormatIds
    );
    router.push(url);
  };

  const buildFilterUrl = (
    categories = [],
    departments = [],
    min = "",
    max = "",
    sort = "",
    teaFormats = []
  ) => {
    const params = [];
    if (categories.length > 0) {
      params.push(`category=${categories.join(",")}`);
    }
    if (departments.length > 0) {
      params.push(`department=${departments.join(",")}`);
    }
    if (min) {
      params.push(`minPrice=${min}`);
    }
    if (max) {
      params.push(`maxPrice=${max}`);
    }
    if (sort) {
      params.push(`sort=${sort}`);
    }
    if (teaFormats.length > 0) {
      params.push(`teaFormat=${teaFormats.join(",")}`);
    }
    return `/shop/filter?${params.join("&")}`;
  };

  // Build URL with filters
  // const buildFilterUrl = () => {
  //   const params = [];
  //   if (selectedCategoryIds.length > 0) {
  //     params.push(`category=${selectedCategoryIds.join(",")}`);
  //   }
  //   if (selectedDepartmentIds.length > 0) {
  //     params.push(`department=${selectedDepartmentIds.join(",")}`);
  //   }
  //   if (minPrice) {
  //     params.push(`minPrice=${minPrice}`);
  //   }
  //   if (maxPrice) {
  //     params.push(`maxPrice=${maxPrice}`);
  //   }
  //   if (sortOrder) {
  //     params.push(`sort=${sortOrder}`);
  //   }
  //   return `/shop/filter?${params.join("&")}`;
  // };

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
        <div className="text-black">
          {/* Tea by Type */}
          <div className="my-3">
            <div className={italiana.className}>
              <h2 className="text-2xl font-bold my-3">Tea by Categories</h2>
            </div>
            <div className={juliusSansOne.className}>
              {sectionsLoading ? (
                <p>Loading Sections...</p>
              ) : sectionsError ? (
                <p>{sectionsError}</p>
              ) : (
                <ul>
                  {sections.map((section) => (
                    <li key={section.id} className="my-1">
                      <label className="text-lg hover:text-gray-300">
                        <input
                          type="checkbox"
                          value={section.id}
                          checked={selectedCategoryIds.includes(section.id)}
                          onChange={handleCategoryChange}
                          className="mr-2"
                        />
                        {section.section_name}
                      </label>
                    </li>
                  ))}
                </ul>
              )}
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
                {departmentsLoading && <p>Loading Departments...</p>}
                {departmentsError && <p>{departmentsError}</p>}
                {departments.map((department) => (
                  <li key={department.id} className="my-1">
                    <label className="text-lg hover:text-gray-300">
                      <input
                        onClick={() => router.push(buildFilterUrl())}
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

          <hr className="border-black border-t-2 mx-auto mb-6" />

          {/* Tea by Range */}
          <div className="my-3 ">
            <div className={italiana.className}>
              <h2 className="text-2xl font-bold my-3">Tea Format</h2>
            </div>
            <div className={juliusSansOne.className}>
              <ul>
                {teaFormatsLoading && <p>Loading Tea Formats...</p>}
                {teaFormatsError && <p>{teaFormatsError}</p>}
                {teaFormats.map((teaFormat) => (
                  <li key={teaFormat.id} className="my-1">
                    <label className="text-lg hover:text-gray-300">
                      <input
                        onClick={() => router.push(buildFilterUrl())}
                        type="checkbox"
                        value={teaFormat.id} // Use ID here
                        checked={selectedTeaFormatIds.includes(teaFormat.id)}
                        onChange={handleTeaFormatChange}
                        className="mr-2"
                      />
                      {teaFormat.category_name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other sections like Price Range, Sort By, etc., here... */}
          {/* Sort By */}
          <hr className="border-black border-t-2 mx-auto mb-6" />
          <div className="my-3">
            <div className={italiana.className}>
              <h2 className="text-2xl font-bold my-3">Sort By</h2>
            </div>
            <div className={juliusSansOne.className}>
              <select
                value={sortOrder}
                onChange={(e) => {
                  const newSortOrder = e.target.value;
                  setSortOrder(newSortOrder);

                  // Redirect with updated sort order
                  const url = buildFilterUrl(
                    selectedCategoryIds,
                    selectedDepartmentIds,
                    minPrice,
                    maxPrice,
                    newSortOrder
                  );
                  router.push(url);
                }}
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
          {/* <button
            onClick={() => router.push(buildFilterUrl())}
            className="bg-black text-white p-2 rounded mt-4 w-full"
          >
            Apply Filters
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;

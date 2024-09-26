"use client";
import React, { useState } from "react";
import SideBarCard from "@/components/Common/SideBarCard";

function Rightsidebar() {
  // State to track if the sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle between true and false
  };

  // Only render the sidebar if isSidebarOpen is true
  if (!isSidebarOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-screen bg-white shadow-lg w-84 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Your Cart (3 items)</h2>

        {/* X button to close the sidebar */}
        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        ADD <span className="text-green-500">$45.06</span> FOR FREE DELIVERY!
      </p>

      <div className="mt-6">
        {/* Add SideBarCard component */}
        <SideBarCard />
        <SideBarCard />

        <SideBarCard />
        <SideBarCard />
        <SideBarCard />
         <SideBarCard />


        <hr />

        <div className="mt-4">
          <p className="text-lg font-bold">Subtotal: $29.94</p>
          <button className="bg-teal-600 text-white py-2 px-4 rounded mt-4 w-full hover:bg-teal-500">
            VIEW CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rightsidebar;

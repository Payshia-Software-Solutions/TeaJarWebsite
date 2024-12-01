"use client";

import { useState, useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader"; // Your custom loader component

const ClientPreloader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Start preloader and NProgress when route changes
    setLoading(true);
    NProgress.start();

    // Stop after a short delay
    const timeout = setTimeout(() => {
      NProgress.done();
      setFade(true); // Trigger fade-out
      setTimeout(() => setLoading(false), 300); // Complete fade-out after 300ms
    }, 500); // Adjust delay as needed

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${
            fade ? "opacity-0 transition-opacity duration-300" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      )}
      <div className={fade ? "opacity-100" : "opacity-0"}>{children}</div>
    </>
  );
};

export default ClientPreloader;

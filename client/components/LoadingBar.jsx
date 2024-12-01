"use client";

import { useState, useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader"; // Your custom loader component

export default function LoadingBar() {
  const [loading, setLoading] = useState(false);
  const [fade, setFade] = useState(false);
  const [hidden, setHidden] = useState(false); // Track hiding after fade-out
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    setHidden(false);
    NProgress.start();

    const timeout = setTimeout(() => {
      NProgress.done();
      setFade(true);
      setTimeout(() => {
        setLoading(false); // Stop loader
        setHidden(true); // Completely hide loader after fade-out
        setFade(false); // Reset fade state for next load
      }, 300); // 300ms for fade duration
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && !hidden && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-white ${
            fade ? "preloader-fade-out" : "preloader-fade"
          }`}
        >
          <Loader />
        </div>
      )}
    </>
  );
}

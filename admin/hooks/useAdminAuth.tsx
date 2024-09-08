"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      setIsLoading(false);
      return;
    }

    // Perform an API call to validate the token
    const validateToken = async () => {
      try {
        const response = await fetch("/api/validate-token", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error("Token validation failed:", error);
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, [router]);

  return { isAuthenticated, isLoading };
}

export default useAdminAuth;

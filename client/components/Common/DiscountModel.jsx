"use client";

import { useState, useEffect } from "react";

export default function DiscountModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            backgroundColor: "#fce1b8",
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            maxWidth: "400px",
            width: "90%",
          }}
        >
          <div className="w-100 my-2">
            <img src="./assets/images/discount.png" alt="" />
          </div>
          <form>
            <input
              type="email"
              placeholder="Email address"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              required
            />
            <button
              type="submit"
              style={{
                backgroundColor: "#d32f2f",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Get 10% OFF
            </button>
          </form>
          <button
            onClick={handleClose}
            style={{
              marginTop: "10px",
              backgroundColor: "transparent",
              border: "none",
              color: "#d32f2f",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            NO, THANKS
          </button>
        </div>
      </div>
    )
  );
}

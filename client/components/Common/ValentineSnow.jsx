"use client";
import React, { useEffect, useState } from "react";

const ValentineSnow = () => {
  const [hearts, setHearts] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeout;
    if (isVisible) {
      timeout = setTimeout(() => setIsVisible(false), 30000); // Show for 30s
    } else {
      timeout = setTimeout(() => setIsVisible(true), 10000); // Hide for 10s
    }
    return () => clearTimeout(timeout);
  }, [isVisible]);

  useEffect(() => {
    const heartCount = 20; // Reduced number of hearts
    const newHearts = Array.from({ length: heartCount }).map((_, i) => {
      // Logic to favor sides: 40% left, 40% right, 20% middle
      const positionRandom = Math.random();
      let leftPosition;

      if (positionRandom < 0.4) {
        leftPosition = Math.random() * 20; // 0-20vw (Left side)
      } else if (positionRandom > 0.6) {
        leftPosition = 80 + Math.random() * 20; // 80-100vw (Right side)
      } else {
        leftPosition = 20 + Math.random() * 60; // 20-80vw (Middle - sparse)
      }

      return {
        id: i,
        left: leftPosition + "vw",
        animationDuration: Math.random() * 3 + 4 + "s", // Slower: 4-7s
        animationDelay: Math.random() * 5 + "s", // Spread out start times
        fontSize: Math.random() * 1.5 + 1 + "rem", // 1rem - 2.5rem
      };
    });
    setHearts(newHearts);
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute top-[-10%] text-red-500 opacity-70 animate-fall"
          style={{
            left: heart.left,
            animationDuration: heart.animationDuration,
            animationDelay: heart.animationDelay,
            fontSize: heart.fontSize,
          }}
        >
          ❤️
        </div>
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.7;
          }
          50% {
            transform: translateY(50vh) translateX(20px);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(-20px);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default ValentineSnow;

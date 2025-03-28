import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const LazyLoadSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={clsx(
        "opacity-0 translate-y-10 transition-all duration-700 ease-in-out",
        { "opacity-100 translate-y-0": isVisible }
      )}
    >
      {children}
    </div>
  );
};

export default LazyLoadSection;

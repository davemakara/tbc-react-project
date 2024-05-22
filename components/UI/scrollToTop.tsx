"use client";

import { useEffect, useState } from "react";
import { RiArrowUpDoubleFill } from "react-icons/ri";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-mainLightBG hover:bg-green3 inline-flex items-center rounded-md p-3 text-[#000] shadow-sm transition-opacity`}
      >
        <RiArrowUpDoubleFill className="h-6 w-8" />
      </button>
    </div>
  );
};

export default ScrollToTop;

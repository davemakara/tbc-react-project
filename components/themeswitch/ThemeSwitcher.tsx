"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { MdOutlineDownloading } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!mounted) return <MdOutlineDownloading className="w-7 h-7" />;

  if (resolvedTheme === "dark") {
    return (
      <MdSunny
        className="w-7 h-7 text-darkYellow cursor-pointer"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <MdDarkMode
        className="w-7 h-7 text-[#000] cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    );
  }

  return null;
};

export default ThemeSwitcher;

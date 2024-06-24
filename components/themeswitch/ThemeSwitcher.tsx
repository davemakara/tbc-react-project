"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { MdOutlineDownloading } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { AiOutlineMoon } from "react-icons/ai";

const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!mounted) return <MdOutlineDownloading className="text-3xl" />;

  if (resolvedTheme === "dark") {
    return (
      <LuSun
        className="text-3xl text-white hover:text-red cursor-pointer"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <AiOutlineMoon
        className="text-3xl text-[#000] hover:text-red cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    );
  }

  return null;
};

export default ThemeSwitcher;

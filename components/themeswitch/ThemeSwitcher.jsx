"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { MdOutlineDownloading } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { GiMoon } from "react-icons/gi";

import SunIcon from "../../public/icons/SunIcon.png";
import SunDark from "../../public/icons/sun-dark.png";

import smth from "../../public/app-logo.png";

const ThemeSwitcher = () => {
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
        className="w-7 h-7 text-darkYellow"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <GiMoon
        className="w-7 h-7 text-[#000]"
        onClick={() => setTheme("dark")}
      />
    );
  }
};

export default ThemeSwitcher;

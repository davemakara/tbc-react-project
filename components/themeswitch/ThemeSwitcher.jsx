"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import SunIcon from "../../public/icons/SunIcon.png";
import MoonIcon from "../../public/icons/MoonIcon.png";
import SunBlack from "../../public/icons/sun-black.png";
import SunDark from "../../public/icons/sun-dark.png";

import smth from "../../public/app-logo.png";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  if (!mounted)
    return (
      <Image
        src={smth}
        width={26}
        height={26}
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <Image
        src={SunIcon}
        alt="sun"
        width={26}
        height={26}
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Image
        src={SunDark}
        alt="moon"
        width={26}
        height={26}
        onClick={() => setTheme("dark")}
      />
    );
  }
};

export default ThemeSwitcher;

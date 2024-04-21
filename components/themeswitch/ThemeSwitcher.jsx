"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import SunIcon from "../../public/icons/SunIcon.png";
import MoonIcon from "../../public/icons/MoonIcon.png";

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
        width={36}
        height={36}
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
        width={30}
        height={30}
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Image
        src={MoonIcon}
        alt="moon"
        width={30}
        height={30}
        onClick={() => setTheme("dark")}
      />
    );
  }
};

export default ThemeSwitcher;

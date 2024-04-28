"use client";

import Link from "next/link";

import BurgerMenu from "./BurgerMenu";

import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="h-full flex relative">
      <ul className="hidden lg:flex h-full text-[0.8rem] md:text-[1.1rem] xl:text-[1.2rem] xxl:text-[1.3rem]">
        <Link
          href="/"
          className="px-[1.2rem] xl:px-[1.5rem] transition-colors duration-500 ease text-[#000] dark:text-[#f4f4f4] hover:text-[#ffc700] dark:hover:text-[#ffc700] font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">
            {t("home")}
          </li>
        </Link>
        <Link
          href="/products"
          className="px-[1.2rem] xl:px-[1.5rem] text-[#000] dark:text-[#f4f4f4] hover:text-[#ffc700] dark:hover:text-[#ffc700] transition-colors duration-500 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">
            {t("products")}
          </li>
        </Link>
        <Link
          href="/profile"
          className="px-[1.2rem] xl:px-[1.5rem] text-[#000] dark:text-[#f4f4f4] hover:text-[#ffc700] dark:hover:text-white transition-colors duration-500 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">
            {t("profile")}
          </li>
        </Link>
        <Link
          href="/blog"
          className="px-[1.2rem] xl:px-[1.5rem] text-[#000] dark:text-[#f4f4f4] hover:text-[#ffc700] dark:hover:text-white transition-colors duration-400 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">
            {t("blog")}
          </li>
        </Link>
        <Link
          href="/contact"
          className="px-[1.2rem] xl:px-[1.5rem] text-[#000] dark:text-[#f4f4f4] hover:text-[#ffc700] dark:hover:text-white transition-all duration-400 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">
            {t("contact")}
          </li>
        </Link>
      </ul>
      <span className="w-[30px] h-[30px] relative p-1 cursor-pointer self-center block lg:hidden">
        <BurgerMenu />
      </span>
    </nav>
  );
};

export default Navigation;

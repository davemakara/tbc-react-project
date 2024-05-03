"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "../../locales/client";
import { NAVIGATION_LINKS } from "../../constants";

const Navigation = () => {
  const pathname = usePathname();
  const t = useI18n();

  return (
    <nav className="h-full flex relative">
      <ul className="hidden lg:flex h-full text-[0.8rem] md:text-[1.1rem] xl:text-[1.2rem] xxl:text-[1.3rem]">
        {NAVIGATION_LINKS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`${
                isActive
                  ? "px-[1.2rem] xl:px-[1.5rem] transition-colors duration-500 ease text-silver dark:text-[#f4f4f4] hover:text-silver dark:hover:text-[#f4f4f4] font-semibold"
                  : "px-[1.2rem] xl:px-[1.5rem] transition-colors duration-500 ease text-[#000] dark:text-red hover:text-silver dark:hover:text-[#f4f4f4] font-semibold"
              }`}
            >
              <li className="h-full flex items-center cursor-pointer">
                {item.page}
              </li>
            </Link>
          );
        })}

        {/* 
        <Link
          href="/"
          className="px-[1.2rem] xl:px-[1.5rem] transition-colors duration-500 ease text-[#000] dark:text-red hover:text-[#ffc700] dark:hover:text-[#f4f4f4] font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">
            {t("home")}
          </li>
        </Link>
        <Link
          href="/products"
          className="px-[1.2rem] xl:px-[1.5rem] text-[#000] dark:text-red hover:text-[#ffc700] dark:hover:text-[#f4f4f4] transition-colors duration-500 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">Products</li>
        </Link>
        <Link
          href="/profile"
          className="px-[1.2rem] xl:px-[1.5rem] text-[#000] dark:text-red hover:text-[#ffc700] dark:hover:text-white transition-colors duration-500 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">Profile</li>
        </Link>
        <Link
          href="/blog"
          className="px-[1.2rem] xl:px-[1.5rem] text-[#000] dark:text-red hover:text-[#ffc700] dark:hover:text-white transition-colors duration-400 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">Blog</li>
        </Link>
        <Link
          href="/contact"
          className="px-[1.2rem] xl:px-[1.5rem] text-[#000] dark:text-red hover:text-[#ffc700] dark:hover:text-white transition-all duration-400 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">Contact</li>
        </Link> */}
      </ul>
    </nav>
  );
};

export default Navigation;

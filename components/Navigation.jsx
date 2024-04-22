import Link from "next/link";
import Image from "next/image";

import BurgerMenu from "./BurgerMenu";

const Navigation = () => {
  return (
    <nav className="h-full flex relative">
      <ul className="hidden md:flex h-full text-[0.8rem] md:text-[1.1rem] xl:text-[1.1rem]">
        <Link
          href="/"
          className="px-[1.2rem] lg:px-[1.5rem] text-[#000] dark:text-[#ffc700] hover:text-[#ffc700] dark:hover:text-white transition-colors duration-400 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">Home</li>
        </Link>
        <Link
          href="/products"
          className="px-[1.2rem] lg:px-[1.5rem] text-[#000] dark:text-[#ffc700] hover:text-[#ffc700] dark:hover:text-white transition-colors duration-400 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">Products</li>
        </Link>
        <Link
          href="/profile"
          className="px-[1.2rem] lg:px-[1.5rem] text-[#000] dark:text-[#ffc700] hover:text-[#ffc700] dark:hover:text-white transition-colors duration-400 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">Profile</li>
        </Link>
        <Link
          href="/blog"
          className="px-[1.2rem] lg:px-[1.5rem] text-[#000] dark:text-[#ffc700] hover:text-[#ffc700] dark:hover:text-white transition-colors duration-400 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">Blog</li>
        </Link>
        <Link
          href="/contact"
          className="px-[1.2rem] lg:px-[1.5rem] text-[#000] dark:text-[#ffc700] hover:text-[#ffc700] dark:hover:text-white transition-all duration-400 ease font-semibold"
        >
          <li className="h-full flex items-center cursor-pointer">Contact</li>
        </Link>
      </ul>
      <span className="w-[30px] h-[30px] relative p-1 cursor-pointer self-center block md:hidden">
        <BurgerMenu />
      </span>
    </nav>
  );
};

export default Navigation;

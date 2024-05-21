"use client";

import { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

import Image from "next/image";

import Navigation from "./Navigation";

import AppLogo from "../../public/musicLogo.png";

import ThemeSwitcher from "../themeswitch/ThemeSwitcher";
import LanguageSwitcher from "../languageswitch/LanguageSwitcher";
import BurgerMenu from "./BurgerMenu";
import SignOutBtn from "./sign-out-btn/SignOutBtn";
import Cart from "./cart/Cart";

// export const dynamic = "force-dynamic";

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);

    if (!menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // lg:bg-[#AAC8A7] dark:lg:bg-mainDarkBG
  return (
    <header className="absolute z-10 top-0 w-full h-[80px] flex justify-between items-center px-[1.5rem] lg:px-[1.5rem] xl:px-[5.5rem] xxl:px-[8rem] bg-mainLightBG dark:bg-mainDarkBG bg-opacity-50 dark:bg-opacity-50">
      <span className="w-2/5 h-[60px]">
        <Image
          src={AppLogo}
          alt="App logo"
          className="p-1 cursor-pointer"
          width={60}
          height={60}
        />
      </span>

      <Navigation />

      <div className="block lg:hidden absolute right-0 z-20 pr-6">
        {menuIsOpen ? (
          <GrClose className="w-7 h-7" onClick={toggleMenu} />
        ) : (
          <FaBars className="w-7 h-7" onClick={toggleMenu} />
        )}
      </div>
      {menuIsOpen && (
        <BurgerMenu toggleMenu={toggleMenu} menuOpened={menuIsOpen} />
      )}
      <div className="lg:hidden absolute right-1/2 transform translate-x-1/2 z-9 pl-4">
        <Cart />
      </div>

      <div className="h-full w-2/5 hidden lg:flex items-center justify-end gap-[15px]">
        <Cart />
        <span className="mr-[2px]">
          <LanguageSwitcher />
        </span>

        <div className="p-[1px]">
          <ThemeSwitcher />
        </div>

        <SignOutBtn />
      </div>
    </header>
  );
};

export default Header;

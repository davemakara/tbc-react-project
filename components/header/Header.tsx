"use client";

import { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

import Image from "next/image";

import Navigation from "./Navigation";

import AppLogo from "../../public/app-logo.png";

import ThemeSwitcher from "../themeswitch/ThemeSwitcher";
import LanguageSwitcher from "../languageswitch/LanguageSwitcher";
import BurgerMenu from "./BurgerMenu";
import SignOutBtn from "./sign-out-btn/SignOutBtn";

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
  return (
    <div className="sticky z-10 top-0 w-full h-[80px] lg:h-[100px] bg-[#DDDDDD] dark:bg-[#2C3333]">
      <header className="w-full h-full flex justify-between items-center lg:rounded-b-full lg:border-b-2 bg-[#AAC8A7] dark:bg-mainDarkBG lg:border-mainDarkBG dark:lg:border-mainDarkBG lg:shadow-md lg:shadow-mainDarkBG dark:lg:shadow-mainDarkBG px-[1.5rem] lg:px-[1.5rem] xl:px-[5.5rem] xxl:px-[7rem]">
        <span className="w-2/5 h-[60px] relative">
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

        <div className="h-full w-2/5 hidden lg:flex items-center justify-end">
          <span className="lg:mr-[15px]">
            <LanguageSwitcher />
          </span>

          <div className="p-[2px] lg:mr-[15px] cursor-pointer">
            <ThemeSwitcher />
          </div>

          <SignOutBtn />
        </div>
      </header>
    </div>
  );
};

export default Header;

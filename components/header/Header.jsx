"use client";

import { FaSignOutAlt } from "react-icons/fa";

import Image from "next/image";

import Navigation from "./Navigation";

import AppLogo from "../../public/app-logo.png";

import { handleLogout } from "../../scripts/logout";
import ThemeSwitcher from "../themeswitch/ThemeSwitcher";

import { useTranslation } from "react-i18next";
import i18n from "../../app/i18n";
import LanguageSwitcher from "../languageswitch/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="sticky z-10 top-0 w-full h-[100px] bg-mainLightBG dark:bg-mainDarkBG">
      <header className="w-full h-full flex justify-between items-center lg:rounded-b-full lg:border-b-2 lg:border-mainDarkBG dark:lg:border-[#6420AA] lg:shadow-md lg:shadow-mainDarkBG dark:lg:shadow-[#6420AA] px-[1.1rem] lg:px-[1.5rem] xl:px-[5.5rem] xxl:px-[7rem]">
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
        <div className="h-full w-2/5 flex items-center justify-end">
          <span className="hidden lg:flex">
            <LanguageSwitcher />
          </span>

          <div className="p-[2px] lg:mr-[15px] cursor-pointer">
            <ThemeSwitcher />
          </div>

          <FaSignOutAlt
            className="w-6 h-6 cursor-pointer text-[#000] dark:text-[#f4f4f4] hover:text-red hover:dark:text-red"
            onClick={() => {
              handleLogout().then(() => window.location.reload());
            }}
          />

          {/* <button
            className="hidden lg:flex p-1 text-[14px] md:text-[16px] border-2 shadow-sm shadow-mainDarkBG dark:shadow-sm dark:shadow-[#f4f4f4] border-[#000] dark:border-white hover:bg-red rounded font-semibold text-[#000] dark:text-white"
            onClick={() => {
              handleLogout().then(() => window.location.reload());
            }}
          >
            {t("signout")}
          </button> */}
        </div>
      </header>
    </div>
  );
};

export default Header;

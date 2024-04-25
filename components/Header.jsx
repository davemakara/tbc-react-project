"use client";

import Image from "next/image";

import Navigation from "./Navigation";

import AppLogo from "../public/app-logo.png";

import { handleLogout } from "../scripts/logout";
import ThemeSwitcher from "./themeswitch/ThemeSwitcher";

import { useTranslation } from "react-i18next";
import i18n from "../app/i18n";
import LanguageSwitcher from "./languageswitch/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="sticky z-10 top-0 w-full h-[100px] bg-mainLightBG dark:bg-mainDarkBG">
      <header className="w-full h-full flex justify-around md:justify-between items-center md:rounded-b-full md:border-b-2 md:border-mainDarkBG dark:md:border-white md:shadow-md md:shadow-mainDarkBG dark:md:shadow-[#f4f4f4] px-[1.1rem] lg:px-[1.5rem] xl:px-[5.5rem] xxl:px-[7rem]">
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
          <LanguageSwitcher />
          <div className="p-[2px] mr-[15px] cursor-pointer">
            <ThemeSwitcher />
          </div>

          <button
            className="p-1 text-[14px] md:text-[16px] xl:text-[1.2rem] bg-slate-500 border-none rounded font-semibold text-[#000] dark:text-white"
            onClick={() => {
              handleLogout().then(() => window.location.reload());
            }}
          >
            {t("signout")}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;

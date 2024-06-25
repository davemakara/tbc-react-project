"use client";

import Link from "next/link";

import { useI18n } from "../../locales/client";

import { IoHome } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

import LanguageSwitcher from "../languageswitch/LanguageSwitcher";
import ThemeSwitcher from "../themeswitch/ThemeSwitcher";
import ProfileInfo from "./profileInfo/ProfileInfo";

interface BurgerMenuProps {
  toggleMenu: () => void;
  menuOpened: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ toggleMenu, menuOpened }) => {
  const t = useI18n();

  const handleLinkClick = () => {
    toggleMenu();
  };
  return (
    <section
      className={`absolute top-0 left-0 z-10 w-full bg-mainLightBG overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpened ? "h-screen" : "h-0"
      } flex flex-col lg:hidden items-center justify-center bg-[#DDDDDD] dark:bg-mainDarkBG bg-opacity-95 dark:bg-opacity-95 px-10`}
    >
      <div className="flex justify-center my-4">
        <ProfileInfo />
      </div>

      <ul className="w-full sm:w-4/5 md:w-3/5 mt-1 mb-6 sm:mt-2">
        <Link href="/" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[18px] text-[#000] dark:text-[#f4f4f4] hover:text-red hover:dark:text-red flex items-center justify-between border-b-[1px] mb-2">
            {t("home")} <IoHome />
          </li>
        </Link>
        <Link href="/store" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[18px] text-[#000] dark:text-[#f4f4f4] hover:text-red hover:dark:text-red flex items-center justify-between border-b-[1px] mb-2">
            {t("store")} <FaStore />
          </li>
        </Link>

        <Link href="/blog" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[18px] text-[#000] dark:text-[#f4f4f4] hover:text-red hover:dark:text-red flex items-center justify-between border-b-[1px] mb-2">
            {t("blog")} <IoNewspaperSharp />
          </li>
        </Link>
        <Link href="/events" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[18px] text-[#000] dark:text-[#f4f4f4] hover:text-red hover:dark:text-red flex items-center justify-between border-b-[1px] mb-2">
            {t("events")} <FaCalendarAlt />
          </li>
        </Link>
        <Link href="/contact" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[18px] text-[#000] dark:text-[#f4f4f4] hover:text-red hover:dark:text-red flex items-center justify-between border-b-[1px] mb-2">
            {t("contact")} <BiSolidContact />
          </li>
        </Link>
      </ul>
      <div className="w-full sm:w-4/5 md:w-3/5 py-3 flex justify-around">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </section>
  );
};

export default BurgerMenu;

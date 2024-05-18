"use client";

import Link from "next/link";

import { useI18n } from "../../locales/client";

import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbLogicAnd } from "react-icons/tb";
import { LuContact2 } from "react-icons/lu";

import LanguageSwitcher from "../languageswitch/LanguageSwitcher";
import ThemeSwitcher from "../themeswitch/ThemeSwitcher";

import { handleLogout } from "../../scripts/logout";

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
      className={`absolute top-0 left-0 z-10 w-full overflow-hidden transition-all duration-1000 ease-in-out ${
        menuOpened ? "h-screen" : "h-0"
      } flex flex-col lg:hidden items-center justify-center bg-[#DDDDDD] dark:bg-mainDarkBG2 px-10`}
    >
      <div className="w-full sm:w-4/5 md:w-3/5 py-7 flex justify-around">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <ul className="w-full sm:w-4/5 md:w-3/5 mt-1 mb-6 sm:mt-2">
        <Link href="/" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[20px] text-[#000] dark:text-[#f4f4f4] hover:text-green hover:dark:text-darkYellow flex items-center justify-between border-b-[1px] mb-2">
            {t("home")} <IoHomeOutline />
          </li>
        </Link>
        <Link href="/products" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[20px] text-[#000] dark:text-[#f4f4f4] hover:text-green hover:dark:text-darkYellow flex items-center justify-between border-b-[1px] mb-2">
            {t("products")} <MdOutlineProductionQuantityLimits />
          </li>
        </Link>
        <Link href="/profile" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[20px] text-[#000] dark:text-[#f4f4f4] hover:text-green hover:dark:text-darkYellow flex items-center justify-between border-b-[1px] mb-2">
            {t("profile")} <CgProfile />
          </li>
        </Link>
        <Link href="/blog" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[20px] text-[#000] dark:text-[#f4f4f4] hover:text-green hover:dark:text-darkYellow flex items-center justify-between border-b-[1px] mb-2">
            {t("blog")} <TbLogicAnd />
          </li>
        </Link>
        <Link href="/contact" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[20px] text-[#000] dark:text-[#f4f4f4] hover:text-green hover:dark:text-darkYellow flex items-center justify-between border-b-[1px] mb-2">
            {t("contact")} <LuContact2 />
          </li>
        </Link>
      </ul>

      <button
        className="px-3 py-2 bg-red rounded"
        onClick={() => {
          handleLogout().then(() => window.location.reload());
        }}
      >
        {t("signOut")}
      </button>
    </section>
  );
};

export default BurgerMenu;

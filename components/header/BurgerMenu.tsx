import Link from "next/link";

import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbLogicAnd } from "react-icons/tb";
import { LuContact2 } from "react-icons/lu";

import LanguageSwitcher from "../languageswitch/LanguageSwitcher";
import ThemeSwitcher from "../themeswitch/ThemeSwitcher";

import { handleLogout } from "../../scripts/logout";

interface BurgerMenuProps {
  toggleMenu: () => void; // Define the prop here
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ toggleMenu }) => {
  const handleLinkClick = () => {
    toggleMenu();
  };
  return (
    <section className="absolute top-0 left-0 z-10 w-full h-screen flex flex-col lg:hidden items-center justify-center bg-mainLightBG dark:bg-mainDarkBG px-10">
      <ul className="w-full sm:w-4/5 md:w-3/5 mt-10">
        <Link href="/" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[20px] text-[#000] dark:text-[#f4f4f4] hover:text-green hover:dark:text-darkYellow flex items-center justify-between border-b-[1px] mb-2">
            Home <IoHomeOutline />
          </li>
        </Link>
        <Link href="/products" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[20px] text-[#000] dark:text-[#f4f4f4] hover:text-green hover:dark:text-darkYellow flex items-center justify-between border-b-[1px] mb-2">
            Products <MdOutlineProductionQuantityLimits />
          </li>
        </Link>
        <Link href="/profile" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[20px] text-[#000] dark:text-[#f4f4f4] hover:text-green hover:dark:text-darkYellow flex items-center justify-between border-b-[1px] mb-2">
            Profile <CgProfile />
          </li>
        </Link>
        <Link href="/blog" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[20px] text-[#000] dark:text-[#f4f4f4] hover:text-green hover:dark:text-darkYellow flex items-center justify-between border-b-[1px] mb-2">
            Blog <TbLogicAnd />
          </li>
        </Link>
        <Link href="/contact" onClick={handleLinkClick}>
          <li className="w-full p-4 text-[20px] text-[#000] dark:text-[#f4f4f4] hover:text-green hover:dark:text-darkYellow flex items-center justify-between border-b-[1px] mb-2">
            Contact <LuContact2 />
          </li>
        </Link>
      </ul>
      <div className="w-full sm:w-4/5 md:w-3/5 py-7 flex justify-around">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
      <button
        className="px-3 py-2 bg-darkYellow rounded"
        onClick={() => {
          handleLogout().then(() => window.location.reload());
        }}
      >
        Sign Out
      </button>
    </section>
  );
};

export default BurgerMenu;

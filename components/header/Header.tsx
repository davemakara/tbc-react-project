import Image from "next/image";

import Navigation from "./Navigation";

import AppLogo from "../../public/music_note.png";

import ThemeSwitcher from "../themeswitch/ThemeSwitcher";
import LanguageSwitcher from "../languageswitch/LanguageSwitcher";
import BurgerMenuicon from "./burgerMenuicon/BurgerMenuIcon";
import ProfileInfo from "./profileInfo/ProfileInfo";
import Cart from "./cart/Cart";

const Header: React.FC = () => {
  return (
    <header className="absolute z-10 top-0 w-full h-[80px] flex justify-between items-center px-[1.5rem] lg:px-[1.5rem] xl:px-[5.5rem] xxl:px-[8rem] bg-mainLightBG dark:bg-mainDarkBG bg-opacity-50 dark:bg-opacity-50 transition-colors duration-300">
      <span className="hidden w-1/5 lg:w-2/5 h-[60px] lg:flex lg:items-center">
        <Image
          src={AppLogo}
          alt="App logo"
          className="p-1 cursor-pointer w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
          width={60}
          height={60}
        />
      </span>
      <Navigation />

      <div className="w-full h-full flex justify-between items-center lg:hidden">
        <div className="w-2/5">
          <Image
            src={AppLogo}
            alt="App logo"
            width={60}
            height={60}
            className="w-[50px] h-[50px]"
          />
        </div>

        <BurgerMenuicon />
        <div className="w-2/5 flex justify-end">
          <Cart />
        </div>
      </div>
      {/* <div className="lg:hidden absolute right-1/2 transform translate-x-1/2 z-9">
        <ProfileInfo />
      </div> */}
      <div className="h-full w-2/5 hidden lg:flex items-center justify-end gap-[15px]">
        <Cart />

        <LanguageSwitcher />

        <div className="p-[1px]">
          <ThemeSwitcher />
        </div>

        <ProfileInfo />
      </div>
      {/* <a href="/api/auth/login">Login</a> */}
    </header>
  );
};

export default Header;

import Image from "next/image";

import Navigation from "./Navigation";

import AppLogo from "../../public/music_note.png";

import ThemeSwitcher from "../themeswitch/ThemeSwitcher";
import LanguageSwitcher from "../languageswitch/LanguageSwitcher";
import ProfileBtn from "./profile-btn/ProfileBtn";
import BurgerMenuicon from "./burgerMenuicon/BurgerMenuIcon";
import ProfileInfo from "./profileInfo/ProfileInfo";
import Cart from "./cart/Cart";

// export const dynamic = "force-dynamic";

const Header: React.FC = () => {
  // console.log(user?.sub);

  // lg:bg-[#AAC8A7] dark:lg:bg-mainDarkBG
  return (
    <header className="absolute z-10 top-0 w-full h-[80px] flex justify-between items-center px-[1.5rem] lg:px-[1.5rem] xl:px-[5.5rem] xxl:px-[8rem] bg-mainLightBG dark:bg-mainDarkBG bg-opacity-50 dark:bg-opacity-50 transition-colors duration-300">
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

      <BurgerMenuicon />
      {/* <div className="lg:hidden absolute right-1/2 transform translate-x-1/2 z-9 pl-4">
        <Cart />
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

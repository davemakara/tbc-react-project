"use client";

import Image from "next/image";

import styles from "./Header.module.css";

import Navigation from "./Navigation";

import AppLogo from "../public/app-logo.png";

import { handleLogout } from "../scripts/logout";
import ThemeSwitcher from "./themeswitch/ThemeSwitcher";

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles["logo-wrapper"]}>
        <Image
          src={AppLogo}
          alt="App logo"
          className={styles.logo}
          width={70}
          height={70}
        />
      </span>

      <Navigation />

      <div className={styles["lang-signout-box"]}>
        <select>
          <option value="en">EN</option>
          <option value="ge">GE</option>
        </select>
        <ThemeSwitcher />
        <button
          className="px-2 py-1 bg-slate-500 border-none rounded bg-darkYellow"
          onClick={() => {
            handleLogout().then(() => window.location.reload());
          }}
        >
          Sign out
        </button>
      </div>
    </header>
  );
};

export default Header;

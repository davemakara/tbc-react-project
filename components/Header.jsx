"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./Header.module.css";

import Navigation from "./Navigation";

import AppLogo from "../public/app-logo.png";
import SignOut from "../public/sign-out.png";

import { useContextLanguage } from "../store/language";
import { handleLogout } from "../scripts/logout";

const Header = () => {
  const [curLanguage, setCurLanguage] = useState();

  const { language, changeLanguage } = useContextLanguage();

  return (
    <header className={styles.header}>
      <span className={styles["logo-wrapper"]}>
        <Image src={AppLogo} alt="App logo" className={styles.logo} fill />
      </span>

      <Navigation />

      <div className={styles["lang-signout-box"]}>
        <select onChange={(e) => changeLanguage(e.currentTarget.value)}>
          <option value="en">EN</option>
          <option value="ge">GE</option>
        </select>
        <Image
          src={SignOut}
          alt="sign out"
          width={26}
          height={26}
          onClick={() => {
            handleLogout().then(() => window.location.reload());
          }}
        />
      </div>
    </header>
  );
};

export default Header;

"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";

import styles from "./Header.module.css";

import Navigation from "./Navigation";

import AppLogo from "../public/app-logo.png";
import SignOut from "../public/sign-out.png";

import { logout } from "../app/actions";
import { useContextLanguage } from "../store/language";

// import useLanguage from "../hooks/useLanguage";

const Header = () => {
  const [curLanguage, setCurLanguage] = useState();
  // const language = useLanguage(curLanguage);

  const { language, changeLanguage } = useContextLanguage();

  return (
    <header className={styles.header}>
      <span className={styles["logo-wrapper"]}>
        <Image src={AppLogo} alt="App logo" className={styles.logo} fill />
      </span>

      <Navigation />

      <div className={styles["lang-signout-box"]}>
        <select onChange={(e) => changeLanguage(e.currentTarget.value)}>
          <option value="en">
            {/* <Image src={UKflag} alt="uk flag" width={10} height={5} /> */}
            EN
          </option>
          <option value="ge">GE</option>
        </select>
        <Image
          src={SignOut}
          alt="sign out"
          width={26}
          height={26}
          onClick={() => {
            logout();
          }}
        />
      </div>
    </header>
  );
};

export default Header;

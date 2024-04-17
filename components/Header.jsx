"use client";

import Image from "next/image";

import styles from "./Header.module.css";

import Navigation from "./Navigation";

import outputLogo from "../public/output-onlinepngtools.png";
import menuIcon from "../public/burger-bar.png";

import { logout } from "../app/actions";

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles["logo-wrapper"]}>
        <Image src={outputLogo} alt="logo" className={styles.logo} fill />
      </span>

      <Navigation />
      <Image
        src={menuIcon}
        alt="menu icon"
        className={styles["menu-icon"]}
        fill
      />
      <button
        onClick={() => {
          logout();
        }}
      >
        Sign out
      </button>
    </header>
  );
};

export default Header;

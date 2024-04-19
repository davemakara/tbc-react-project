"use client";

import Link from "next/link";
import Image from "next/image";

import styles from "./Navigation.module.css";

import BurgerMenu from "./BurgerMenu";

const Navigation = () => {
  return (
    <nav className={styles["main-navigation"]}>
      <ul className={styles["main-nav-ul"]}>
        <Link href="/">
          <li>HOME</li>
        </Link>
        <Link href="/products">
          <li>PRODUCTS</li>
        </Link>
        <Link href="/profile">
          <li>PROFILE</li>
        </Link>
        <Link href="/blog">
          <li>BLOG</li>
        </Link>
        <Link href="/contact">
          <li>CONTACT</li>
        </Link>
      </ul>
      <span className={styles["menu-icon"]}>
        <BurgerMenu />
      </span>
    </nav>
  );
};

export default Navigation;

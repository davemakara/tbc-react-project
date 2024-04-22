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
          <li>Home</li>
        </Link>
        <Link href="/products">
          <li>Products</li>
        </Link>
        <Link href="/profile">
          <li>Profile</li>
        </Link>
        <Link href="/blog">
          <li>Blog</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <span className={styles["menu-icon"]}>
        <BurgerMenu />
      </span>
    </nav>
  );
};

export default Navigation;

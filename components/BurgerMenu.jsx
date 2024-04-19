import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import styles from "./BurgerMenu.module.css";

import BurgerMenuImg from "../public/burger-menu.png";
import BurgerMenuClose from "../public/burger-menu-close.png";

const BurgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <div className={styles["menuToggle"]}>
      <Image
        src={menuIsOpen ? BurgerMenuClose : BurgerMenuImg}
        alt="menu icon"
        width={30}
        height={30}
        onClick={toggleMenu}
      />
      {/* <ul className={styles["menu"]}>
        <li>
          <Link href="/">Home</Link>
        </li>

        <Link href="/">
          <li>About</li>
        </Link>
        <Link href="/">
          <li>Info</li>
        </Link>
        <Link href="/">
          <li>Contact</li>
        </Link>
        <Link href="/">
          <li>Show me more</li>
        </Link>
      </ul> */}
    </div>
  );
};

export default BurgerMenu;

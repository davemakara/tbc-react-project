import { useState } from "react";

import styles from "./BurgerMenu.module.css";

import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

const BurgerMenu: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <div className={styles["menuToggle"]}>
      {menuIsOpen ? (
        <GrClose className="w-7 h-7" onClick={toggleMenu} />
      ) : (
        <FaBars className="w-7 h-7" onClick={toggleMenu} />
      )}

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

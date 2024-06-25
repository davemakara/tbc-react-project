"use client";

import { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import BurgerMenu from "../BurgerMenu";

const BurgerMenuicon = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);

    if (!menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <>
      {" "}
      <div className="w-[50px] h-[50px] flex justify-center items-center lg:hidden relative">
        {menuIsOpen ? (
          <GrClose className="w-7 h-7 absolute z-20" onClick={toggleMenu} />
        ) : (
          <FaBars className="w-7 h-7 absolute z-20" onClick={toggleMenu} />
        )}
      </div>
      {menuIsOpen && (
        <BurgerMenu toggleMenu={toggleMenu} menuOpened={menuIsOpen} />
      )}
    </>
  );
};

export default BurgerMenuicon;

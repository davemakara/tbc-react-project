"use client";

import Image from "next/image";

import Navigation from "./Navigation";

import outputLogo from "../public/output-onlinepngtools.png";
import menuIcon from "../public/burger-bar.png";

const Header = () => {
  return (
    <header className="header">
      <span className="logo-wrapper">
        <Image src={outputLogo} alt="logo" className="logo" fill />
      </span>

      {/* <img src={outputLogo} alt="logo" className="logo" /> */}
      <Navigation />
      <Image src={menuIcon} alt="menu icon" className="menu-icon" fill />
    </header>
  );
};

export default Header;

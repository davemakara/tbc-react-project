import Navigation from "./Navigation";

import outputLogo from "../assets/image/output-onlinepngtools.png";
import menuIcon from "../assets/image/burger-bar.png";

const Header = () => {
  return (
    <header className="header">
      <img src={outputLogo} alt="logo" className="logo" />
      <Navigation />
      <img src={menuIcon} alt="menu icon" className="menu-icon" />
    </header>
  );
};

export default Header;

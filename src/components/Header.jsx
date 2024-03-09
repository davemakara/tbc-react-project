import Navigation from "./Navigation";

import outputLogo from "../assets/image/output-onlinepngtools.png";

const Header = () => {
  return (
    <header className="header">
      <img src={outputLogo} alt="logo" className="logo" />
      <Navigation />
    </header>
  );
};

export default Header;

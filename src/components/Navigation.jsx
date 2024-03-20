import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <NavLink to="/">
          <li>HOME</li>
        </NavLink>
        <a href="#">
          <li>PRODUCTS</li>
        </a>
        <a href="#">
          <li>PAYMENTS</li>
        </a>
        <NavLink to="/contact">
          <li>CONTACT</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;

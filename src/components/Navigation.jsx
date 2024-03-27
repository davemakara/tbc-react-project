import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <NavLink to="/">
          <li>HOME</li>
        </NavLink>
        <NavLink to="/profile">
          <li>PROFILE</li>
        </NavLink>
        <NavLink to="/blog">
          <li>BLOG</li>
        </NavLink>
        <NavLink to="/contact">
          <li>CONTACT</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;

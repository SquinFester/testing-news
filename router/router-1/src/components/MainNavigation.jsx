import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const handleActive = ({ isActive }) =>
    isActive ? classes.active : undefined;

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={handleActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={handleActive}>
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;

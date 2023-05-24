import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  const isActiveCheck = ({ isActive }) => (isActive ? "text-red-500" : "");

  return (
    <header>
      <nav>
        <ul>
          <li className="w-fit hover:text-pink-400">
            <NavLink to="/" className={isActiveCheck}>
              Home
            </NavLink>
          </li>
          <li className="w-fit hover:text-pink-400">
            <NavLink to="/events" className={isActiveCheck}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavbar;

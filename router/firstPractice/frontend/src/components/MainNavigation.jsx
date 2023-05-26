import { NavLink } from "react-router-dom";

const MainNavbar = () => {
  const liClass = "w-fit hover:text-amber-200";

  const isActiveCheck = ({ isActive }) =>
    isActive ? "text-amber-100" : liClass;

  return (
    <header className="flex h-12 items-center border-b-2 border-neutral-500 text-lg font-medium">
      <nav className="mx-auto w-2/3">
        <ul className="flex flex-row gap-5">
          <li>
            <NavLink to="/" className={isActiveCheck}>
              Home
            </NavLink>
          </li>
          <li>
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

import { NavLink } from "react-router-dom";

const EventNav = () => {
  const linkClass =
    "bg-gray-500 text-lg py-1 px-8 text-center rounded-md shadow-md transition ease-in-out hover:scale-105 hover:text-lg hover:bg-amber-400";

  const isActiveCheck = ({ isActive }) =>
    isActive ? `${linkClass} bg-amber-400` : linkClass;

  return (
    <nav className="mx-auto mb-5">
      <ul className="flex justify-between gap-5">
        <li>
          <NavLink to="" className={isActiveCheck} end>
            All Events
          </NavLink>
        </li>
        <li>
          <NavLink to="new" className={isActiveCheck}>
            New Event
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default EventNav;

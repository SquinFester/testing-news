import { NavLink } from "react-router-dom";

import { Page } from "./MainNavigation";

const LINKS: Page[] = [
  {
    id: 3213,
    name: "All Events",
    path: "/events",
  },
  {
    id: 43123,
    name: "New Event",
    path: "new",
  },
];

const EventsNavigation = () => {
  const acviteClass =
    "bg-yellow-200 py-1 w-5/12 text-black rounded-md shadow-md text-center";
  const inactiveClass =
    "bg-gray-500 py-1 w-5/12 rounded-md shadow-md text-center hover:bg-yellow-300 tranform duration-300";

  return (
    <nav>
      <ul className="w-full flex justify-around mb-5">
        {LINKS.map((link) => (
          <NavLink
            to={link.path}
            key={link.id}
            className={({ isActive }) =>
              isActive ? acviteClass : inactiveClass
            }
            end
          >
            <li>{link.name}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default EventsNavigation;

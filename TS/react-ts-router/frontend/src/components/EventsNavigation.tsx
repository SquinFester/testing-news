import { NavLink } from "react-router-dom";

import { Page } from "./MainNavigation";

const LINKS: Page[] = [
  {
    id: 1,
    name: "All Events",
    path: "/events",
  },
  {
    id: 2,
    name: "New Event",
    path: "new",
  },
];

const EventsNavigation = () => {
  return (
    <nav>
      <ul>
        {LINKS.map((link) => (
          <NavLink to={link.path} key={link.id}>
            {link.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default EventsNavigation;

import { NavLink } from "react-router-dom";

export interface Page {
  id: number;
  name: string;
  path: string;
}

const PAGES: Page[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Events",
    path: "/events",
  },
];

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          {PAGES.map((page) => (
            <NavLink to={page.path} key={page.id}>
              {page.name}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

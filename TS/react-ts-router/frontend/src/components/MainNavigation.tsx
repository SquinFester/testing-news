import { NavLink } from "react-router-dom";

import NewsletterSingup from "./NewsletterSingup";

export type Page = {
  id: number;
  name: string;
  path: string;
};

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
  {
    id: 3,
    name: "NewsLetter",
    path: "/newsletter",
  },
];

const MainNavigation = () => {
  const navLink = "hover:text-yellow-300";

  return (
    <header className="bg-zinc-800 flex justify-between items-center">
      <div className="h-12 w-2/3 mx-auto flex items-center justify-between">
        <nav>
          <ul className="flex gap-5 w-full">
            {PAGES.map((page) => (
              <li key={page.id}>
                <NavLink
                  to={page.path}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-200 " : navLink
                  }
                >
                  {page.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <NewsletterSingup />
      </div>
    </header>
  );
};

export default MainNavigation;

import { Outlet } from "react-router-dom";

import MainNavbar from "../components/MainNavigation";

export default function Root() {
  return (
    <>
      <MainNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

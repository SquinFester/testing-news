import { Outlet, useNavigation } from "react-router-dom";

import MainNavbar from "../components/MainNavigation";

export default function Root() {
  const navigation = useNavigation();

  return (
    <>
      <MainNavbar />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}

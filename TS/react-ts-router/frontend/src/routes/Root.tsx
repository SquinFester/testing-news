import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main className="screen-height w-2/3 mx-auto mt-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;

import { Outlet } from "react-router-dom";

const EventsRoot = () => {
  return (
    <section className="mx-auto w-1/2 text-green-500">
      <Outlet />
    </section>
  );
};

export default EventsRoot;

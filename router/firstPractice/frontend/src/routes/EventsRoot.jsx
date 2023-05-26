import { Outlet } from "react-router-dom";
import EventNav from "../components/EventNav";

const EventsRoot = () => {
  return (
    <>
      <EventNav />
      <Outlet />
    </>
  );
};

export default EventsRoot;

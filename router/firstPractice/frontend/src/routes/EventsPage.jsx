import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
};

export default EventsPage;

export const loader = async () => {
  try {
    const response = await fetch("http://localhost:8080/events");
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const events = useLoaderData();

  return <EventsList events={events} />;
};

export default EventsPage;

export const loader = async () => {
  try {
    const response = await fetch("http://localhost:8080/events");
    const data = await response.json();
    return data.events;
  } catch (error) {
    console.log(error.message);
  }
};

import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}
interface FetchedData {
  events: Event[];
}

const Events = () => {
  const data = useLoaderData() as FetchedData;
  const events = data.events;

  return (
    <>
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </>
  );
};

export default Events;

export const loader = async () => {
  return fetch("http://localhost:8080/events");
};

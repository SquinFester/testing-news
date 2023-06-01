import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
};
type FetchedData = {
  events: Event[];
};

const Events = () => {
  const data = useLoaderData() as FetchedData;
  const events = data.events;

  return (
<<<<<<< HEAD
    <section className="flex flex-col gap-5">
=======
    <section className="flex gap-5 flex-col">
>>>>>>> 1dc63d5b43494801d70be7de3893820b465ad729
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </section>
  );
};

export default Events;

export const loader = async () => {
  return await fetch("http://localhost:8080/events");
};

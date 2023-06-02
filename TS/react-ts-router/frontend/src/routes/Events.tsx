import { Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";
import EventList from "../components/EventList";

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
  const { events } = useLoaderData() as FetchedData;

  return (
    <Suspense fallback={<p>loading</p>}>
      <Await resolve={events}>
        {(loadEvents) => <EventList events={loadEvents} />}
      </Await>
    </Suspense>
  );
};

export default Events;

export const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events/");
  const data = await response.json();
  return data.events;
};

export const loader = async () => {
  return defer({ events: loadEvents() });
};

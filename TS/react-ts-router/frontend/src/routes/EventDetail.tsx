import { Suspense } from "react";

import { redirect, defer, Await, useRouteLoaderData } from "react-router-dom";
import { Event, loadEvents } from "./Events";
import EventList from "../components/EventList";
import EventItem from "../components/EventItem";

export type FetchedEvent = {
  event: Event;
  eventsList: Event[];
};

const EventDetail = () => {
  const { event, eventsList } = useRouteLoaderData(
    "event-detail"
  ) as FetchedEvent;

  return (
    <>
      <Suspense fallback={<p>Loading..</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading..</p>}>
        <Await resolve={eventsList}>
          {(loadedEvents) => <EventList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetail;

const loadEvent = async (id: string) => {
  const url = `http://localhost:8080/events/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.event;
};

export const loader = async ({ params }: any) => {
  const id = params.eventID;
  return defer({
    event: await loadEvent(id),
    eventsList: loadEvents(),
  });
};

export const action = async ({ request, params }: any) => {
  await fetch(`http://localhost:8080/events/${params.eventID}`, {
    method: request.method,
  });
  return redirect("/events");
};

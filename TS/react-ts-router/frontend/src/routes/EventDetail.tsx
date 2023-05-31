import { Link, useRouteLoaderData } from "react-router-dom";
import { Event } from "./Events";

export type FetchedEvent = {
  event: Event;
};

const EventDetail = () => {
  const data = useRouteLoaderData("event-detail") as FetchedEvent;
  const event = data.event;

  return (
    <div>
      EventDetail {event.id}--- <Link to={"edit"}>Edit</Link>
    </div>
  );
};

export default EventDetail;

export const loader = async ({ params }: any) => {
  return await fetch(`http://localhost:8080/events/${params.eventID}`);
};

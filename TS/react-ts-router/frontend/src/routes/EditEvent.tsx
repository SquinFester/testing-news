import { useRouteLoaderData } from "react-router-dom";

import { FetchedEvent } from "./EventDetail";
import EventForm from "../components/EventForm";

const EditEvent = () => {
  const data = useRouteLoaderData("event-detail") as FetchedEvent;
  const event = data.event;

  return (
    <div>
      <EventForm event={event} />
    </div>
  );
};

export default EditEvent;

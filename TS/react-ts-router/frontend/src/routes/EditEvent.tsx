import { useRouteLoaderData } from "react-router";

import { FetchedEvent } from "./EventDetail";

import EditForm from "../components/EventForm";

const EditEvent = () => {
  const data = useRouteLoaderData("event-detail") as FetchedEvent;
  const event = data.event;

  return (
    <div>
      <EditForm event={event} />
    </div>
  );
};

export default EditEvent;

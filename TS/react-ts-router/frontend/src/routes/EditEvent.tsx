import { useRouteLoaderData } from "react-router-dom";

import { FetchedEvent } from "./EventDetail";
import EditForm from "../components/EditForm";

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

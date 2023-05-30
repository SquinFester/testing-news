import { useRouteLoaderData } from "react-router-dom";

import { FetchedEvent } from "../routes/EventDetail";

const EditForm = () => {
  const data = useRouteLoaderData("event-detail") as FetchedEvent;
  const event = data.event;

  return <form>EditForm</form>;
};

export default EditForm;

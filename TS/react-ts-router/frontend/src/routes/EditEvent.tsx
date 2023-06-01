<<<<<<< HEAD
import { useRouteLoaderData } from "react-router";

import { FetchedEvent } from "./EventDetail";

import EditForm from "../components/EventForm";
=======
import { useRouteLoaderData } from "react-router-dom";

import { FetchedEvent } from "./EventDetail";
import EventForm from "../components/EventForm";
>>>>>>> 1dc63d5b43494801d70be7de3893820b465ad729

const EditEvent = () => {
  const data = useRouteLoaderData("event-detail") as FetchedEvent;
  const event = data.event;

  return (
<<<<<<< HEAD
    <div>
      <EditForm event={event} />
    </div>
=======
    <section>
      <EventForm event={event} />
    </section>
>>>>>>> 1dc63d5b43494801d70be7de3893820b465ad729
  );
};

export default EditEvent;

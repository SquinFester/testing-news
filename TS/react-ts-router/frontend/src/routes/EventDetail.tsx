import {
  Link,
  redirect,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import { Event } from "./Events";

export type FetchedEvent = {
  event: Event;
};

const EventDetail = () => {
  const submit = useSubmit();
  const data = useRouteLoaderData("event-detail") as FetchedEvent;
  const event = data.event;

  const startDeleteHandler = () => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  };

  return (
<<<<<<< HEAD
    <div>
      EventDetail {event.id}--- <Link to={"edit"}>Edit</Link>
    </div>
=======
    <section>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu>
        <Link to={"edit"}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </section>
>>>>>>> 1dc63d5b43494801d70be7de3893820b465ad729
  );
};

export default EventDetail;

export const loader = async ({ params }: any) => {
  return await fetch(`http://localhost:8080/events/${params.eventID}`);
};

export const action = async ({ request, params }: any) => {
  await fetch(`http://localhost:8080/events/${params.eventID}`, {
    method: request.method,
  });
  return redirect("/events");
};

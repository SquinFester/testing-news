import { Link, useSubmit } from "react-router-dom";
import { Event } from "../routes/Events";

type EventPrompt = {
  event: Event;
};

const EventItem = ({ event }: EventPrompt) => {
  const submit = useSubmit();

  const startDeleteHandler = () => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  };

  return (
    <>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu>
        <Link to={"edit"}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </>
  );
};

export default EventItem;

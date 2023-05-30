import { Event } from "../routes/Events";

const EventItem = (props: any) => {
  const event: Event = props.event;

  return <div> {event.description}</div>;
};

export default EventItem;

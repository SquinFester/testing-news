import { Link } from "react-router-dom";

import { Event } from "../routes/Events";

type EventsProps = {
  events: Event[];
};

const EventItem = ({ events }: EventsProps) => {
  const renderEvents = () =>
    events.map((event) => (
      <Link to={event.id} key={event.id}>
        <div className="flex p-1 justify-between hover:bg-neutral-500 rounded-xl hover:scale-105 transition shadow-md bg-neutral-600">
          <img
            src={event.image}
            alt={event.title}
            className="w-1/2 rounded-xl rounded-r-none"
          />
          <div className="text-right pr-2">
            <h1 className="text-xl  font-medium">{event.title}</h1>
            <p className="italic">{event.date}</p>
          </div>
        </div>
      </Link>
    ));

  return <section className="flex flex-col gap-5">{renderEvents()}</section>;
};

export default EventItem;

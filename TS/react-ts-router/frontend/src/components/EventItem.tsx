import { Link } from "react-router-dom";

import { Event } from "../routes/Events";

const EventItem = ({ id, title, description, date, image }: Event) => {
  return (
    <Link to={id}>
      <div className="flex p-1 justify-between hover:bg-neutral-500 rounded-xl hover:scale-105 transition shadow-md bg-neutral-600">
        <img
          src={image}
          alt={title}
          className="w-1/2 rounded-xl rounded-r-none"
        />
        <div className="text-right pr-2">
          <h1 className="text-xl  font-medium">{title}</h1>
          <p className="italic">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventItem;

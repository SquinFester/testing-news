import { Link } from "react-router-dom";

import { Event } from "../routes/Events";

const EventItem = ({ id, title, description, date, image }: Event) => {
  return (
    <Link to={id}>
      {description}
      {id}
    </Link>
  );
};

export default EventItem;

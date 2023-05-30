import { Event } from "../routes/Events";

const EventItem = ({ id, title, description, date, image }: Event) => {
  return (
    <div>
      {description}
      {id}
    </div>
  );
};

export default EventItem;

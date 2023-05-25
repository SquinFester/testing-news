import { Link } from "react-router-dom";

const EventItem = ({ event }) => {
  const { id, title, date, image, description } = event;

  return (
    <div>
      EventItem {id}
      <Link to="edit">Edit</Link>
    </div>
  );
};

export default EventItem;

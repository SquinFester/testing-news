import { Link, useParams } from "react-router-dom";

const EventDetail = () => {
  const { eventID } = useParams();

  return (
    <div>
      EventDetail --- {eventID} <Link to={"edit"}>Edit</Link>
    </div>
  );
};

export default EventDetail;

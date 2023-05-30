import { Link, useRouteLoaderData } from "react-router-dom";

const EventDetail = () => {
  const data = useRouteLoaderData("event-detail");
  console.log(data);

  return (
    <div>
      EventDetail --- <Link to={"edit"}>Edit</Link>
    </div>
  );
};

export default EventDetail;

export const loader = async ({ params }: any) => {
  return await fetch(`http://localhost:8080/events/${params.eventID}`);
};

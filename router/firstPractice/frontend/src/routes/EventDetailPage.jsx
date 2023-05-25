import { json, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  try {
    const id = params.eventId;
    const response = await fetch("http://localhost:8080/events/" + id);
    return response;
  } catch (error) {
    throw json({ message: "sth went wrong" }, { status: 500 });
  }
};

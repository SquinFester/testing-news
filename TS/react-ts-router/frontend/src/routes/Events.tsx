import { useLoaderData } from "react-router-dom";

const Events = () => {
  const events = useLoaderData();
  console.log(events);

  return <div>Events</div>;
};

export default Events;

export const loader = async () => {
  try {
    const response = await fetch("http://localhost:8080/events");
    return response;
  } catch (error) {}
};

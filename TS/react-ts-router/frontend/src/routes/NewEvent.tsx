import { json, redirect } from "react-router";

import EventForm from "../components/EventForm";

const NewEvent = () => {
  return (
    <>
      <EventForm />
    </>
  );
};

export default NewEvent;

export const action = async ({ request }: any) => {
  const data = await request.formData();

  const enteredData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enteredData),
  });

  if (!response.ok) {
    throw json({ message: "could not save event" });
  }

  return redirect("/events");
};

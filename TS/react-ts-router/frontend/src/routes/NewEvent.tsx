<<<<<<< HEAD
import { json, redirect } from "react-router";
=======
import { redirect, json } from "react-router-dom";
>>>>>>> 1dc63d5b43494801d70be7de3893820b465ad729

import EventForm from "../components/EventForm";

const NewEvent = () => {
  return (
<<<<<<< HEAD
    <>
      <EventForm />
    </>
=======
    <section>
      <EventForm />
    </section>
>>>>>>> 1dc63d5b43494801d70be7de3893820b465ad729
  );
};

export default NewEvent;

export const action = async ({ request }: any) => {
  const data = await request.formData();
<<<<<<< HEAD

  const enteredData = {
=======
  const eventData = {
>>>>>>> 1dc63d5b43494801d70be7de3893820b465ad729
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
<<<<<<< HEAD
    body: JSON.stringify(enteredData),
  });

  if (!response.ok) {
    throw json({ message: "could not save event" });
=======
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: "Could not save event" }, { status: 500 });
>>>>>>> 1dc63d5b43494801d70be7de3893820b465ad729
  }

  return redirect("/events");
};

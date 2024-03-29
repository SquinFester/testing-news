import {
  Link,
  Form,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";

import { Event } from "../routes/Events";

type EventProps = {
  event?: Event;
  method?: "post" | "patch";
};

type Error = {
  errors: string;
};

const EventForm = ({ method, event }: EventProps) => {
  const data = useActionData() as Error;
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <Form method={method} className="flex flex-col gap-3">
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-xl font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="text-black rounded-lg p-1"
          defaultValue={event?.title}
          required={true}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="image" className="text-xl font-medium">
          Image
        </label>
        <input
          type="url"
          id="image"
          name="image"
          className="text-black rounded-lg p-1"
          defaultValue={event?.image}
          required={true}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="text-xl font-medium">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="text-black rounded-lg p-1"
          defaultValue={event?.date}
          required={true}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-xl font-medium">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="text-black rounded-lg p-1"
          defaultValue={event?.description}
          required={true}
        />
      </div>
      <div className="mt-4 flex gap-2 justify-end">
        <button
          className="w-20 py-1 rounded-md bg-neutral-700 shadow-md hover:bg-gray-500 transition"
          disabled={isSubmitting}
        >
          <Link to="..">Cancel</Link>
        </button>
        <button
          type="submit"
          className="w-20 py-1 rounded-md bg-gray-500 shadow-md hover:bg-yellow-300 hover:text-black transition"
          disabled={isSubmitting}
        >
          Save
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

export const action = async ({ request, params }: any) => {
  const method = request.method;
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const id = params.eventID ? params.eventID : "";
  let url = `http://localhost:8080/events/${id}`;

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event" }, { status: 500 });
  }

  return redirect("/events");
};

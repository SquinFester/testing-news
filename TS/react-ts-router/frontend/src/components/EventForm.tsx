import { Link, Form } from "react-router-dom";

import { Event } from "../routes/Events";

<<<<<<< HEAD
type EventProp = {
  event?: Event;
};

const EditForm = ({ event }: EventProp) => {
=======
type EventProps = {
  event?: Event;
};

const EventForm = ({ event }: EventProps) => {
>>>>>>> 1dc63d5b43494801d70be7de3893820b465ad729
  return (
    <Form method="post" className="flex flex-col gap-3">
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
<<<<<<< HEAD
        <button className="w-20 py-1 rounded-md bg-neutral-700 shadow-md hover:bg-neutral-400 transition">
=======
        <button className="w-20 py-1 rounded-md bg-neutral-700 shadow-md hover:bg-gray-500 transition">
>>>>>>> 1dc63d5b43494801d70be7de3893820b465ad729
          <Link to="..">Cancel</Link>
        </button>
        <button
          type="submit"
<<<<<<< HEAD
          className="w-20 py-1 rounded-md bg-gray-500  shadow-md disabled:cursor-not-allowed hover:bg-yellow-300 hover:text-black transition"
=======
          className="w-20 py-1 rounded-md bg-gray-500 shadow-md hover:bg-yellow-300 hover:text-black transition"
>>>>>>> 1dc63d5b43494801d70be7de3893820b465ad729
        >
          Save
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

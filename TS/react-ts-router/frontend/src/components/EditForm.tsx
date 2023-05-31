import { Link, useRouteLoaderData } from "react-router-dom";

import { Event } from "../routes/Events";
import { FetchedEvent } from "../routes/EventDetail";
import { useForm } from "react-hook-form";

const EditForm = () => {
  const data = useRouteLoaderData("event-detail") as FetchedEvent;
  const event = data.event;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Event>({
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((e) => {
    console.log(e);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-xl font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="text-black rounded-lg p-1"
          defaultValue={event.title}
          {...register("title", { required: true })}
        />
        {errors.title && <span>Title is required</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="image" className="text-xl font-medium">
          Image
        </label>
        <input
          type="url"
          id="image"
          className="text-black rounded-lg p-1"
          defaultValue={event.image}
          {...register("image", { required: true })}
        />
        {errors.image && <span>Image is required</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="text-xl font-medium">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="text-black rounded-lg p-1"
          defaultValue={event.date}
          {...register("date", { required: true })}
        />
        {errors.date && <span>Date is required</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-xl font-medium">
          Description
        </label>
        <textarea
          id="description"
          className="text-black rounded-lg p-1"
          defaultValue={event.description}
          {...register("description", { required: true })}
        />
        {errors.title && <span>Description is required</span>}
      </div>
      <div className="mt-4 flex gap-2 justify-end">
        <button className="w-20 py-1 rounded-md bg-neutral-700 shadow-md">
          <Link to="..">Cancel</Link>
        </button>
        <button
          type="submit"
          className="w-20 py-1 rounded-md bg-gray-500  shadow-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditForm;

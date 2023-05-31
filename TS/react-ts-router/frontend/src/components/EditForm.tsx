import { useRouteLoaderData } from "react-router-dom";

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
      <button
        type="submit"
        className="bg-yellow-200 text-black w-1/2 mx-auto py-1 rounded-md mt-3 shadow-md font-medium hover:bg-yellow-300 hover:text-neutral-500 transition "
      >
        Send
      </button>
    </form>
  );
};

export default EditForm;

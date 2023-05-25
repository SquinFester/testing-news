const EventForm = ({ event }) => {
  return (
    <form className="text-black">
      <>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          defaultValue={event.title}
        />
      </>
      <>
        <label htmlFor="image">image</label>
        <input
          type="url"
          name="image"
          id="image"
          required
          defaultValue={event.image}
        />
      </>
      <>
        <label htmlFor="date">date</label>
        <input
          type="date"
          name="date"
          id="date"
          required
          defaultValue={event.date}
        />
      </>
      <>
        <label htmlFor="description">description</label>
        <textarea
          name="description"
          id="description"
          required
          defaultValue={event.description}
        ></textarea>
      </>
    </form>
  );
};

export default EventForm;

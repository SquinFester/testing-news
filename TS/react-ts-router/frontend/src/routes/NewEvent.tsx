import EventForm from "../components/EventForm";

const NewEvent = () => {
  return (
    <section>
      <EventForm method={"post"} />
    </section>
  );
};

export default NewEvent;

const EventsList = ({ events }) => {
  return (
    <>
      <h1>All Events</h1>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            <div>
              <img src={e.image} alt={e.title} />
              <div>
                <h2>{e.title}</h2>
                <p>{e.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsList;

import { Link } from "react-router-dom";

const EventsList = ({ events }) => {
  return (
    <>
      <h1>All Events</h1>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            <Link to={e.id}>
              <img src={e.image} alt={e.title} />
              <div>
                <h2>{e.title}</h2>
                <p>{e.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsList;

import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "01",
    titile: "Some Event",
  },
  {
    id: "02",
    titile: "Some Event2",
  },
  {
    id: "03",
    titile: "Some Event3",
  },
];

const EventsPage = () => {
  return (
    <div>
      EventsPage
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.titile}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;

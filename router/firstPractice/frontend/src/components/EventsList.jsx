import { Link } from "react-router-dom";

const EventsList = ({ events }) => {
  return (
    <>
      <h1 className="header mb-5">All Events</h1>
      <ul className="flex flex-col gap-6">
        {events.map((e) => (
          <li key={e.id}>
            <Link
              to={e.id}
              className=" group flex justify-between rounded-2xl bg-[#2d2e2e] p-1 shadow-md transition ease-in-out hover:scale-105 hover:bg-neutral-600"
            >
              <img
                src={e.image}
                alt={e.title}
                className="w-1/2 rounded-xl rounded-r-none "
              />
              <div className="pr-2">
                <h2 className="text-lg font-medium">{e.title}</h2>
                <p className="mt-2 text-right italic text-zinc-400 group-hover:text-zinc-300">
                  {e.date}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsList;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import EventsRoot from "./routes/EventsRoot";
import Home from "./routes/Home";
import Events, { loader as eventsLoader } from "./routes/Events";
import EventDetail, {
  loader as detailLoader,
  action as deleteEvent,
} from "./routes/EventDetail";
import NewEvent from "./routes/NewEvent";
import EditEvent from "./routes/EditEvent";
import Error from "./routes/Error";
import { action } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            id: "events",
            loader: eventsLoader,
          },
          {
            path: ":eventID",
            id: "event-detail",
            loader: detailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
                action: deleteEvent,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: action,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: action,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

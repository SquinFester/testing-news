import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import EventsRoot from "./routes/EventsRoot";
import Home from "./routes/Home";
import Events, { loader as eventsLoader } from "./routes/Events";
<<<<<<< HEAD
import EventDetail, { loader as detailLoader } from "./routes/EventDetail";
=======
import EventDetail, {
  loader as detailLoader,
  action as deleteEvent,
} from "./routes/EventDetail";
>>>>>>> 1dc63d5b43494801d70be7de3893820b465ad729
import NewEvent, { action as newEventAction } from "./routes/NewEvent";
import EditEvent from "./routes/EditEvent";
import Error from "./routes/Error";

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
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: newEventAction,
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

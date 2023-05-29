import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import EventsRoot from "./routes/EventsRoot";
import Home from "./routes/Home";
import Events, { loader as eventsLoader } from "./routes/Events";
import EventDetail from "./routes/EventDetail";
import NewEvent from "./routes/NewEvent";
import EditEvent from "./routes/EditEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
            children: [
              {
                index: true,
                element: <EventDetail />,
              },
              {
                path: ":eventID/edit",
                element: <EditEvent />,
              },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
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

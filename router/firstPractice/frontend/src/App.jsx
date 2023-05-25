import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import HomePage from "./routes/HomePage";
import EventsPage, { loader as eventLoader } from "./routes/EventsPage";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./routes/EventDetailPage";
import NewEventPage from "./routes/NewEventPage";
import EditEventPage from "./routes/EditEventPage";
import EventsRoot from "./routes/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
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

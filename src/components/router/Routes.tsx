import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { ErrorPage } from "./RouteError";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Outlet />
        </>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/projects",
          element: <Outlet />,
          children: [
            { path: "", element: <h1>Projects</h1> },
            { path: ":id", element: <></> },
          ],
        },
        {
          path: "/news",
          element: <Outlet />,
          children: [
            { path: "", element: <h1>News</h1> },
            { path: ":id", element: <></> },
          ],
        },
        {
          path: "/team",
          element: <Outlet />,
          children: [
            { path: "", element: <h1>Team</h1> },
            { path: ":id", element: <></> },
          ],
        },
        {
          path: "/mission",
          element: <h1>Mission</h1>,
          children: [],
        },
        {
          path: "/story",
          element: <h1>Story</h1>,
          children: [],
        },
        {
          path: "/contact",
          element: <h1>Contact us</h1>,
          children: [],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { ErrorPage } from "./RouteError";
import { Navbar } from "../navbar/Navbar";
import { Projects } from "../../pages/projects/Projects";
import { News } from "../../pages/news/News";
import { Team } from "../../pages/team/Team";
import { Mission } from "../../pages/mission/Mission";
import { Story } from "../../pages/story/Story";
import { Contact } from "../../pages/contact/Contact";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
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
            { path: "", element: <Projects /> },
            { path: ":id", element: <></> },
          ],
        },
        {
          path: "/news",
          element: <Outlet />,
          children: [
            { path: "", element: <News /> },
            { path: ":id", element: <></> },
          ],
        },
        {
          path: "/team",
          element: <Outlet />,
          children: [
            { path: "", element: <Team /> },
            { path: ":id", element: <></> },
          ],
        },
        {
          path: "/mission",
          element: <Mission />,
          children: [],
        },
        {
          path: "/story",
          element: <Story />,
          children: [],
        },
        {
          path: "/contact",
          element: <Contact />,
          children: [],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

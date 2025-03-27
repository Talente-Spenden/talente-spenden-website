import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { ErrorPage } from "./RouteError";
import { Navbar } from "../navbar/Navbar";
import { Projects } from "../../pages/projects/Projects";
import { CharityTrack } from "../../pages/charityTrack/CharityTrack";
import { Team } from "../../pages/team/Team";
import { Mission } from "../../pages/mission/Mission";
import { Story } from "../../pages/story/Story";
import { Contact } from "../../pages/contact/Contact";
import { Footer } from "../footer/Footer";
import { EntrepreneurshipTrack } from "../../pages/entrepreneurshipTrack/EntrepreneurshipTrack";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Outlet />
          <Footer />
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
          path: "/tracks",
          element: <Outlet />,
          children: [
            { path: "", element: <CharityTrack /> },
            { path: ":id", element: <></> },
          ],
        },
        {
          path: "/charity",
          element: <CharityTrack />,
          children: [],
        },
        {
          path: "/entrepreneurship",
          element: <EntrepreneurshipTrack />,
          children: [],
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
          path: "/join",
          element: <Contact />,
          children: [],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

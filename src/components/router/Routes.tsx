import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { ErrorPage } from "./RouteError";
import { Navbar } from "../navbar/Navbar";
import { CharityTrack } from "../../pages/charityTrack/CharityTrack";
import { Team } from "../../pages/team/Team";
import { Contact } from "../../pages/contact/Contact";
import { Footer } from "../footer/Footer";
import { EntrepreneurshipTrack } from "../../pages/entrepreneurshipTrack/EntrepreneurshipTrack";
import { ScrollToTop } from "../scrollToTop/ScrollToTop";
import { Imprint } from "../../pages/imprint/Imprint";
import { DataProtection } from "../../pages/dataProtection/DataProtection";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <ScrollToTop />
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
          path: "/join",
          element: <Contact />,
          children: [],
        },
        {
          path: "/imprint",
          element: <Imprint />,
          children: [],
        },
        {
          path: "/dataprotection",
          element: <DataProtection />,
          children: [],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

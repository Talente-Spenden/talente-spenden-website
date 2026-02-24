import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./RouteError";

import { GradientGenerator } from "../../pages/gradientGenerator/GradientGenerator";

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
          element: <GradientGenerator />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

import { Outlet, useRoutes } from "react-router-dom";

import { Public } from "@/pages/public";
import LandingPage from "@/pages/landing";
import InquiryPage from "@/pages/inquiry";

const NonrequireAuth = () => <Outlet />;

const Routes = () => {
  const routes = useRoutes([
    {
      element: <NonrequireAuth />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/inquiry",
          element: <InquiryPage />,
        },
      ],
    },
    {
      element: <NonrequireAuth />,
      children: [
        {
          path: "/pharmacy",
          element: <Public />,
        },
      ],
    },
  ]);

  return routes;
};

export default Routes;

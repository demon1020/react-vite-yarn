//PLOP_TEMPLATE: public ROUTE IMPORTS
import { RoutePaths } from "../../constants/routes";
import Home from "./Home";
import LandingPage from "./LandingPage";
import Login from "./Login";

export default [
  //PLOP_TEMPLATE: public ROUTE DEFINITIONS
  {
    path: RoutePaths.HOME,
    element: <Home />,
  },
  {
    path: RoutePaths.LANDING_PAGE,
    element: <LandingPage />,
  },
  {
    path: RoutePaths.LOGIN,
    element: <Login />,
  },
];

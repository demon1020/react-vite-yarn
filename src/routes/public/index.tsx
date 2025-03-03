//PLOP_TEMPLATE: public ROUTE IMPORTS
import NotFound from "./NotFound";
import Register from "./Register";
import { RoutePaths } from "../../constants/routes";
import LandingPage from "./LandingPage";
import Login from "./Login";
import SettingsView from "../../components/modules/Settings";
import TaskListingView from "../../components/modules/TaskListing";

export default [
  //PLOP_TEMPLATE: public ROUTE DEFINITIONS
  {
    path: RoutePaths.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: RoutePaths.REGISTER,
    element: <Register />,
  },
  {
    path: RoutePaths.LANDING_PAGE,
    element: <LandingPage />,
  },
  {
    path: RoutePaths.LOGIN,
    element: <Login />,
  },
  {
    path: RoutePaths.SETTINGS,
    element: <SettingsView />,
  },

  {
    path: RoutePaths.TODOS,
    element: <TaskListingView />,
  },
];

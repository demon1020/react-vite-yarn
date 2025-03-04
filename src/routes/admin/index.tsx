//PLOP_TEMPLATE: admin ROUTE IMPORTS
import { RoutePaths } from "../../constants/routes";
import Dashboard from "./Dashboard";
import SettingsView from "../../components/modules/Settings";
import TaskListingView from "../../components/modules/TaskListing";

export default [
  //PLOP_TEMPLATE: admin ROUTE DEFINITIONS
  {
    // index: true,
    path: RoutePaths.DASHBOARD,
    element: <Dashboard />,
    children: [
      {
        path: RoutePaths.SETTINGS,
        element: <SettingsView />,
      },

      {
        index: true,
        path: RoutePaths.TODOS,
        element: <TaskListingView />,
      },
    ],
  },
];

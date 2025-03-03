//PLOP_TEMPLATE: admin ROUTE IMPORTS
import { Children } from "react";
import { RoutePaths } from "../../constants/routes";
import Dashboard from "./Dashboard";
import SettingsView from "../../components/modules/Settings";
import TaskListingView from "../../components/modules/TaskListing";

export default [
  //PLOP_TEMPLATE: admin ROUTE DEFINITIONS
  {
    path: RoutePaths.DASHBOARD,
    element: <Dashboard />,
    Children: [
      {
        path: RoutePaths.SETTINGS,
        element: <SettingsView />,
      },

      {
        path: RoutePaths.TODOS,
        element: <TaskListingView />,
      },
    ],
  },
];

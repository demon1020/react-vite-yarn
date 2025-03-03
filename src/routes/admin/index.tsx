//PLOP_TEMPLATE: admin ROUTE IMPORTS
import { RoutePaths } from "../../constants/routes";
import Dashboard from "./Dashboard";

export default [
  //PLOP_TEMPLATE: admin ROUTE DEFINITIONS
  {
    path: RoutePaths.DASHBOARD,
    element: <Dashboard />,
    
  },
];

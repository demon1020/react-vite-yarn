import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./public";
import adminRoutes from "./admin";

//PLOP_TEMPLATE: MAIN ROUTE IMPORTS

const router = createBrowserRouter([
  //PLOP_TEMPLATE: MAIN ROUTE DEFINITIONS
  ...adminRoutes,
  ...publicRoutes,
]);

export default router;

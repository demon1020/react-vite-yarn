import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./public";
//PLOP_TEMPLATE: MAIN ROUTE IMPORTS

const router = createBrowserRouter([
  //PLOP_TEMPLATE: MAIN ROUTE DEFINITIONS
  ...publicRoutes,
]);

export default router;

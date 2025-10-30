import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import ClassesPage from "../features/classes/pages/ClassesPage";
import ClassDetailsPage from "../features/classes/pages/ClassDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <DashboardPage/>
      },
      {
        path: "/my_classes",
        element: <ClassesPage/>
      },
      {
        path: "/my_classes/:_id",
        element: <ClassDetailsPage/>
      }
    ]
  },
]);

export default router;
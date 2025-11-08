import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import ClassesPage from "../features/classes/pages/ClassesPage";
import ClassDetailsPage from "../features/classes/pages/ClassDetailsPage";
import Home from "../features/common/Home";
import SignInSignUp from "../features/auth/SignInSignUp";

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
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/sign_in",
        element: <SignInSignUp/>
      }
    ]
  },
]);

export default router;
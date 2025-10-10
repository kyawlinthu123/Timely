import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import MyClassesContent from "../pages/MyClassesContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Dashboard/>
      },
      {
        path: "/my-classes",
        element: <MyClassesContent/>
      }
    ]
  },
]);

export default router;
import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import MyClassesContent from "../pages/MyClassesContent";
import SingleClassDetails from "../components/MyClasses/SingleClassDetails";

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
      },
      {
        path: "/class-details",
        element: <SingleClassDetails/>
      }
    ]
  },
]);

export default router;
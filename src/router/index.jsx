import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import MyClasses from "../pages/Myclasses/MyClasses";
import AddClassForm from "../pages/Myclasses/AddClassForm";
import ClassList from "../pages/Myclasses/ClassList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "my-classes",
        element: <MyClasses/>
      },
      {
        path: "add-class",
        element: <AddClassForm/>
      },
      {
        path: "class-list",
        element: <ClassList/>
      }
    ]
  },
]);

export default router;
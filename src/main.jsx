import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import ClassesProvider from "./contexts/ClassesContext";
import AssignmentsProvider from "./contexts/AssignmentsContext";

createRoot(document.getElementById("root")).render(
  <ClassesProvider>
    <AssignmentsProvider>
    <RouterProvider router={router} />
    </AssignmentsProvider>
  </ClassesProvider>
);

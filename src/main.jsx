import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import ClassesProvider from "./contexts/ClassesContext";

createRoot(document.getElementById("root")).render(
  <ClassesProvider>
    <RouterProvider router={router} />
  </ClassesProvider>
);

import { createBrowserRouter } from "react-router-dom";
import Category from "../Category";
import Dashboard from "../Dashboard";
import RegisterAdmin from "../RegisterAdmin";
import Template from "../Template";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/categories",
        element: <Category />,
      },
      {
        path: "/register",
        element: <RegisterAdmin />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Category from "../views/Category";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import RegisterAdmin from "../views/RegisterAdmin";
import Template from "../components/Template";

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
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

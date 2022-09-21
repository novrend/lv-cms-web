import { createBrowserRouter } from "react-router-dom";
import Category from "../Category";
import Dashboard from "../Dashboard";
import Login from "../Login";
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
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

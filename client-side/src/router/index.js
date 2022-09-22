import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Content from "../views/Content";
import ContentDetail from "../views/ContentDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Content />,
      },
      {
        path: "product/:id",
        element: <ContentDetail />,
      },
      {
        path: "/:category",
        element: <Content />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";
import Content from "../Content";
import ContentDetail from "../ContentDetail";

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
    ],
  },
]);

export default router;

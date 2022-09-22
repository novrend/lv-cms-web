import { createBrowserRouter } from "react-router-dom";
import Template from "../components/Template";
import Banner from "../components/Banner";
import Content from "../views/Content";
import ContentDetail from "../views/ContentDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "",
        element: <Banner />,
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

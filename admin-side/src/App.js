import "./App.css";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import EditProduct from "./EditProduct";
import Backdrop from "./Backdrop";
import AddProduct from "./AddProduct";
import ModalConfirmation from "./ModalConfirmation";
import EditCategory from "./EditCategory";
import AddCategory from "./AddCategory";
import RegisterAdmin from "./RegisterAdmin";
import Category from "./Category";
import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export default App;

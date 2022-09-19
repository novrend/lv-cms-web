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

function App() {
  return (
    <div className="flex overflow-hidden bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div
        className="hidden fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/90"
        id="sidebarBackdrop"
      ></div>
      <div
        id="main-content"
        className="relative w-full h-screen overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
      >
        <main>
          {/* <Dashboard /> */}
          {/* <Category /> */}
          <RegisterAdmin />

          {/* <AddProduct />
          <EditProduct />
          <ModalConfirmation />
          <EditCategory />
          <AddCategory />
          <Backdrop /> */}
        </main>
      </div>
    </div>
  );
}

export default App;

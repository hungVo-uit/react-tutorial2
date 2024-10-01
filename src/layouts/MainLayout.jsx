import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import "react-toastify/ReactToastify.css"
import { ToastContainer } from "react-toastify";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;

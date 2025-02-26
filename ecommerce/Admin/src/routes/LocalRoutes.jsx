// In LocalRoutes.tsx (or wherever the routing logic is defined)
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/AuthContext";
import Add from "../Pages/Add";
import Login from "../Pages/Login";
import Lista from "../Pages/Lista";
import Entrega from "../Pages/Entrega";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./PrivatesRoute";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
  <div className="md:w-[70%] w-full mx-auto md:ml-[max(5vw,25px)] ml-0 my-2 text-gray-600 text-base">
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export const LocalRoutes = () => {
  return (
    <AuthProvider>
      <ToastContainer />
      <div className="flex flex-col md:flex-row sm:items-start justify-center items-center w-full">
        <NavbarWrapper />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/add"
          element={
            <Layout>
              <PrivateRoute element={<Add />} />
            </Layout>
          }
        />
        <Route
          path="/lista"
          element={
            <Layout>
              <PrivateRoute element={<Lista />} />
            </Layout>
          }
        />
        <Route
          path="/status"
          element={
            <Layout>
              <PrivateRoute element={<Entrega />} />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
};

const NavbarWrapper = () => {
  const location = useLocation();
  const showNavbarRoutes = ["/add", "/lista", "/status"];

  return showNavbarRoutes.includes(location.pathname) ? <Navbar /> : null;
};

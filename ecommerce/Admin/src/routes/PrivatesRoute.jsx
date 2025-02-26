import PropTypes from "prop-types"; 
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CircularProgress } from "@mui/material";

const PrivateRoute = ({ element }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress color="inherit" />
      </div>
    );
  }

  return user ? element : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  element: PropTypes.node.isRequired, 
};

export default PrivateRoute;

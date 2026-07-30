import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Wraps pages that require login. If there's no user, redirect to /login.
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="page-loader">Loading...</div>;

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;

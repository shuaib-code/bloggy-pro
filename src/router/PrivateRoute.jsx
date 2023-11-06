import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, reloading } = useAuth();
  const location = useLocation();
  if (reloading) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-lg font-bold">Loading...</h1>
        </div>
      </>
    );
  }
  return user ? (
    children
  ) : (
    <Navigate state={location.pathname} to="/login"></Navigate>
  );
};

export default PrivateRoute;

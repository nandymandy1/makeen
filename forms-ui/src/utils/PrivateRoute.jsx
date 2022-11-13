import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuth } = useSelector((state) => state.Auth);
  return !isAuth ? <Navigate to="/auth/login" /> : <Outlet />;
};

export default PrivateRoute;

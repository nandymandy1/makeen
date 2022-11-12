import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.Auth);
  return isAuth ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateRoutes;

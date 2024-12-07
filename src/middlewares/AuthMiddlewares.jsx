import { Navigate, Outlet } from "react-router-dom";

const isLayout = false;

const AuthMiddlewares = () => {
  return isLayout ? <Outlet /> : <Navigate to="/register" />;
};

export default AuthMiddlewares;

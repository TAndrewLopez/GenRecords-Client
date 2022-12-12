import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const { isAdmin } = useSelector((state) => state.authReducer);
  return isAdmin ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;

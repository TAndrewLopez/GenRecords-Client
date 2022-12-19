import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { isAdmin } = useSelector((state) => state.authReducer);
  return isAdmin ? <Outlet /> : <Navigate to={"/"} />;
};

export default AdminRoute;

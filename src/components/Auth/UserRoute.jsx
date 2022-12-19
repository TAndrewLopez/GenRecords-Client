import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoute = () => {
  const { loggedIn } = useSelector((state) => state.authReducer);
  return loggedIn ? <Outlet /> : <Navigate to={"/auth"} />;
};

export default UserRoute;

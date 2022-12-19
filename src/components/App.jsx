import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AdminDashboard,
  AllVinylsPage,
  Auth,
  LandingPage,
  ProfilePage,
  SingleArtistPage,
  SingleVinylPage,
} from "../pages";

// THUNKS
import { me } from "../../redux/features/authSlice";
import { getUserOrders } from "../../redux/features/authSlice";

//PROTECTED ADMIN ROUTE
import { AdminRoute, UserRoute } from "./";

const App = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.authReducer);

  useEffect(() => {
    const authorization = localStorage.getItem("authorization");
    if (authorization) {
      dispatch(me(authorization));
    }
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getUserOrders(id));
    }
  }, [id]);

  return (
    <div className="h-screen w-full flex flex-col">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path={"/vinyls"} element={<AllVinylsPage />} />
        {/* <Route path={"/profilePage"} element={<ProfilePage />} /> */}
        <Route path={"/auth"} element={<Auth />} />

        <Route path={"/singleVinyl/:id"} element={<SingleVinylPage />} />
        <Route path={"/singleArtist/:id"} element={<SingleArtistPage />} />

        <Route element={<UserRoute />}>
          <Route path={"/profilePage"} element={<ProfilePage />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path={"/admin"} element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

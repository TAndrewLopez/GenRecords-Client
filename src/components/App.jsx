import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./";
import {
  AdminDashboard,
  AllVinylsPage,
  Auth,
  LandingPage,
  ProfilePage,
  SingleArtistPage,
  SingleVinylPage,
} from "../pages";
import { useDispatch } from "react-redux";
import { me } from "../../redux/features/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authorization = localStorage.getItem("authorization");
    if (authorization) {
      dispatch(me(authorization));
    }
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path={"/vinyls"} element={<AllVinylsPage />} />
        <Route path={"/profilePage"} element={<ProfilePage />} />
        <Route path={"/auth"} element={<Auth />} />

        <Route path={"/singleVinyl/:id"} element={<SingleVinylPage />} />
        <Route path={"/singleArtist/:id"} element={<SingleArtistPage />} />

        <Route element={<PrivateRoute />}>
          <Route path={"/admin"} element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

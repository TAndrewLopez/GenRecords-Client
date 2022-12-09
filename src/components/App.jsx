import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./";
import {
  AdminDashboard,
  AllVinylsPage,
  LandingPage,
  Login,
  ProfilePage,
  SingleArtistPage,
  SingleVinylPage,
} from "../pages";

const App = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Routes>
        <Route path={"/login"} element={<Login />} />

        <Route index element={<LandingPage />} />
        <Route path={"/vinyls"} element={<AllVinylsPage />} />
        <Route element={<PrivateRoute />}>
          <Route path={"/admin"} element={<AdminDashboard />} />
        </Route>
        <Route path={"/profilePage"} element={<ProfilePage />} />

        <Route path={"/singleVinyl/:id"} element={<SingleVinylPage />} />
        <Route path={"/singleArtist/:id"} element={<SingleArtistPage />} />
      </Routes>
    </div>
  );
};

export default App;

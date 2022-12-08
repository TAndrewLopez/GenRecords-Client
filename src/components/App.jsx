import { Routes, Route } from "react-router-dom";
import { Header, ToastNotification, Footer } from "./";
import {
  LandingPage,
  AdminDashboard,
  AllVinylsPage,
  Login,
  SingleVinylPage,
  SingleArtistPage,
} from "../pages";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <ToastNotification />
      <Routes>
        <Route path={"/login"} element={<Login />} />

        <Route index element={<LandingPage />} />
        <Route path={"/vinyls"} element={<AllVinylsPage />} />
        <Route path={"/admin"} element={<AdminDashboard />} />

        <Route path={"/singleVinyl/:id"} element={<SingleVinylPage />} />
        <Route path={"/singleArtist/:id"} element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

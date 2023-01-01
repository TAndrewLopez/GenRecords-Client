import "@stripe/stripe-js";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AdminDashboard,
  AllVinylsPage,
  Auth,
  CheckoutPage,
  LandingPage,
  ProfilePage,
  SingleArtistPage,
  SingleVinylPage,
} from "../pages";

// THUNKS
import {
  me,
  getUserOrders,
  getLocalOrder,
} from "../../redux/features/authSlice";

//PROTECTED ADMIN ROUTE
import { AdminRoute, UserRoute } from "./";

const App = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.authReducer);

  useEffect(() => {
    const authorization = localStorage.getItem("authorization");
    if (authorization) {
      dispatch(me(authorization));
    } else {
      dispatch(getLocalOrder());
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
        <Route path={"/api/shop"} element={<AllVinylsPage />} />
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/singleVinyl/:id"} element={<SingleVinylPage />} />
        <Route path={"/singleArtist/:id"} element={<SingleArtistPage />} />
        <Route path={"/checkout"} element={<CheckoutPage />} />

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

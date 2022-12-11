import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer } from "../components";
import { logout } from "../../redux/features/authSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { loggedIn, firstName } = useSelector((state) => state.authReducer);

  return (
    <>
      <Header
        headerClass={
          "flex text-xl justify-between p-5 bg-shade-9 min-w-[350px]"
        }
      />
      <div className="flex-1 flex flex-col items-center justify-center bg-shade-7">
        {loggedIn ? (
          <>
            <h1>Welcome to your profile page, {firstName}.</h1>
            <button
              onClick={() => dispatch(logout())}
              className="text-white hover:text-sec"
              to="/auth">
              Logout
            </button>
          </>
        ) : (
          <Link className="text-white hover:text-sec" to="/auth">
            Login
          </Link>
        )}

        <li>Update Profile Information</li>
        <li>Order History</li>
      </div>
      <Footer
        twClass={
          "px-5 py-3 text-white flex justify-center bg-shade-9 min-w-[350px]"
        }
      />
    </>
  );
};

export default ProfilePage;

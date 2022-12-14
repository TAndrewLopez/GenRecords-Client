import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Header, Footer, UserProfileCard } from "../components";
import { logout } from "../../redux/features/authSlice";
import { useEffect } from "react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedIn, firstName, lastName, username, email } = useSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
    if (!loggedIn) {
      navigate("/auth");
    }
  }, []);

  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
      <div className="flex-1 bg-shade-7">
        {loggedIn ? (
          <>
            <h1 className="text-3xl text-shade-1">
              Welcome to your profile page, {firstName ? firstName : "User"}!
            </h1>
            <UserProfileCard user={{ firstName, lastName, username, email }} />
            <ul>
              <button
                onClick={() => dispatch(logout())}
                className="text-white hover:text-sec"
                to="/auth">
                Logout
              </button>
              <li>Order History</li>
              <li>Update Profile Information</li>
            </ul>
          </>
        ) : (
          <Link className="text-white hover:text-sec" to="/auth">
            Login
          </Link>
        )}
      </div>
      <Footer twClass={"px-5 py-3 text-white flex justify-center bg-shade-9"} />
    </>
  );
};

export default ProfilePage;

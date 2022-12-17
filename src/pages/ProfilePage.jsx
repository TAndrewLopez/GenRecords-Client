import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Header,
  Footer,
  UserProfileCard,
  UserProfileForm,
  UserCart,
  OrderHistory,
} from "../components";

const ProfilePage = () => {
  const {
    authReducer: { loggedIn, firstName, lastName, username, email, img },
    shopReducer: { cart },
  } = useSelector((state) => state);

  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
      <div className="flex-1 bg-shade-7">
        {loggedIn ? (
          <div className="flex flex-col sm:flex-row p-5 gap-5">
            <div className="flex flex-1 flex-col items-center gap-5">
              <UserProfileCard
                user={{ firstName, lastName, username, email, img }}
              />
              <OrderHistory />
              <UserCart title images controls cart={cart} />
            </div>
            <div className="flex flex-1 flex-col items-center gap-5">
              <UserProfileForm />
            </div>
          </div>
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

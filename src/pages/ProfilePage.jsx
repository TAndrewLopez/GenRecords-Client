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
    authReducer: { firstName, lastName, username, email, cart, img },
  } = useSelector((state) => state);

  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
      <div className="flex-1 bg-shade-7">
        <div className="flex flex-col sm:flex-row p-5 gap-5">
          <div className="flex flex-1 flex-col items-center gap-5">
            <UserProfileCard
              user={{ firstName, lastName, username, email, img }}
            />
            <OrderHistory />
            <UserCart controls title images cart={cart} />
          </div>
          <div className="flex flex-1 flex-col items-center gap-5">
            <UserProfileForm />
          </div>
        </div>
      </div>
      <Footer twClass={"px-5 py-3 text-white flex justify-center bg-shade-9"} />
    </>
  );
};

export default ProfilePage;

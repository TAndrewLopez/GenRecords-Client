import { Link } from "react-router-dom";
import { Header, Footer } from "../components";

const ProfilePage = () => {
  return (
    <>
      <Header
        headerClass={
          "flex text-xl justify-between p-5 bg-shade-9 min-w-[350px]"
        }
      />
      <div className="flex-1 flex flex-col items-center justify-center bg-shade-7">
        <Link className="text-white hover:text-sec" to="/auth">
          Login
        </Link>
        Welcome, to your profile page user.
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

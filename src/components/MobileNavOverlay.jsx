import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLinks } from "./";

const MobileNavOverlay = ({ links }) => {
  const { isAdmin } = useSelector((state) => state.authReducer);

  return (
    <div className="bg-shade-9 absolute top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center gap-5">
      <NavLinks links={links} />
      {isAdmin ? (
        <Link className="text-white hover:text-sec" to={"/admin"}>
          Admin Dashboard
        </Link>
      ) : (
        ""
      )}
      <Link className="text-white hover:text-sec">Cart</Link>
      <Link className="text-white hover:text-sec" to="/profilePage">
        Profile
      </Link>
      <p className="absolute bottom-6 font-bold text-shade-1 after:content-[''] after:block after:h-px after:bg-accent opacity-40">
        Gen. Records
      </p>
    </div>
  );
};

export default MobileNavOverlay;

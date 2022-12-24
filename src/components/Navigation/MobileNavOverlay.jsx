import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavLinks } from "..";

const MobileNavOverlay = ({ links }) => {
  const { isAdmin } = useSelector((state) => state.authReducer);

  return (
    <div className="bg-shade-9 fixed top-0 left-0 w-full h-full z-20 flex flex-col items-center justify-center gap-5">
      <NavLinks links={links} />
      {isAdmin ? (
        <Link to={"/admin"} className="text-white hover:text-sec">
          Admin Dashboard
        </Link>
      ) : (
        ""
      )}
      <Link to={"/checkout"} className="text-white hover:text-sec">
        Checkout
      </Link>
      <Link to="/profilePage" className="text-white hover:text-sec">
        Profile
      </Link>
      <p className="absolute bottom-6 font-bold text-shade-1 after:content-[''] after:block after:h-px after:bg-accent opacity-40">
        Gen. Records
      </p>
    </div>
  );
};

export default MobileNavOverlay;

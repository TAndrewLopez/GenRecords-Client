import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../../redux/features/shopSlice";
import { CartIcon, ProfileIcon } from "../assets";
import { NavLinks, MobileNavOverlay } from "..";

//TODO: RACE CONDITION!
const Header = ({ headerClass }) => {
  const dispatch = useDispatch();
  const {
    authReducer: { id, isAdmin },
    shopReducer: { cart },
  } = useSelector((state) => state);
  const [overlay, setOverlay] = useState(false);

  const linkInfo = [
    { path: "/", name: "Home" },
    { path: "/vinyls", name: "Shop Vinyls" },
  ];

  useEffect(() => {
    if (id) {
      dispatch(getUserOrders(id));
    }
  }, []);

  return (
    <header className={headerClass}>
      <Link className="text-white hover:text-sec" to="/">
        Gen Records
      </Link>
      <nav className="hidden sm:block">
        <ul className="flex gap-8">
          <NavLinks links={linkInfo} />
          {isAdmin ? (
            <Link className="text-white hover:text-sec" to={"/admin"}>
              Admin Dashboard
            </Link>
          ) : (
            ""
          )}
          <CartIcon
            amount={cart.length}
            twClass={`w-4 fill-white hover:fill-sec cursor-pointer`}
          />
          <Link className="flex" to={"/profilePage"}>
            <ProfileIcon
              twClass={"w-4 fill-white hover:fill-sec cursor-pointer"}
            />
          </Link>
        </ul>
      </nav>
      <div
        onClick={() => setOverlay(!overlay)}
        className="relative z-30 text-white sm:hidden">
        <button>Hamburger</button>
      </div>
      {overlay ? <MobileNavOverlay links={linkInfo} /> : <></>}
      {/* <MobileNavOverlay links={linkInfo} isOpen={overlay} /> */}
    </header>
  );
};

export default Header;

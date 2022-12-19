import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { CartIcon, ProfileIcon } from "../assets";
import { UserCart } from "../../components";
import { NavLinks, MobileNavOverlay } from "..";

const Header = ({ headerClass }) => {
  const {
    authReducer: { isAdmin, cart },
  } = useSelector((state) => state);
  const [overlay, setOverlay] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const linkInfo = [
    { path: "/", name: "Home" },
    { path: "/vinyls", name: "Shop Vinyls" },
  ];

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
          <div className="flex" onClick={() => setToggleCart(!toggleCart)}>
            <CartIcon
              amount={cart.length}
              twClass={`w-4 fill-white hover:fill-sec cursor-pointer`}
            />
          </div>
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
      {toggleCart ? (
        <div className="absolute top-20 right-3 shadow-lg z-50 bg-red-300">
          <UserCart title cart={cart} />
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;

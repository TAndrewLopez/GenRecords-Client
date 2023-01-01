import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { NavLinks, Hamburger, MobileNavOverlay } from "..";
import { CartIcon, ProfileIcon } from "../assets";
import { UserCartDropDown } from "../../components";

const Header = ({ headerClass }) => {
  const {
    authReducer: { isAdmin, cart },
  } = useSelector((state) => state);
  const [overlay, setOverlay] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);

  const linkInfo = [
    { path: "/", name: "Home" },
    { path: "/api/shop", name: "Shop Vinyls" },
  ];

  if (overlay) {
    document.getElementById("root").style.overflow = "hidden";
  } else {
    document.getElementById("root").style.overflow = "auto";
  }

  return (
    <header className={headerClass}>
      <Link
        className="text-white hover:text-sec ease-in-out duration-300"
        to="/">
        Gen Records
      </Link>
      <nav className="hidden sm:block">
        <ul className="flex gap-8">
          <NavLinks links={linkInfo} />
          {isAdmin ? (
            <Link
              className="text-white hover:text-sec ease-in-out duration-300"
              to={"/admin"}>
              Admin Dashboard
            </Link>
          ) : (
            ""
          )}
          <div className="flex" onClick={() => setToggleCart(!toggleCart)}>
            <CartIcon
              amount={cart.length}
              twClass={`w-4 fill-white hover:fill-sec cursor-pointer ease-in-out duration-300`}
            />
          </div>
          <Link className="flex" to={"/profilePage"}>
            <ProfileIcon
              twClass={
                "w-4 fill-white hover:fill-sec cursor-pointer ease-in-out duration-300"
              }
            />
          </Link>
        </ul>
      </nav>
      <div
        onClick={() => setOverlay(!overlay)}
        className="relative z-30 text-white sm:hidden flex">
        <Hamburger visible={overlay} />
      </div>
      {overlay ? <MobileNavOverlay links={linkInfo} /> : <></>}
      {toggleCart ? <UserCartDropDown cart={cart} /> : <></>}
    </header>
  );
};

export default Header;

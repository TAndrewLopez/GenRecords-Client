import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { NavLinks, MobileNavOverlay } from "..";
import { CartIcon, ProfileIcon } from "../assets";
import { useState } from "react";

const Header = ({ headerClass }) => {
  const { isAdmin } = useSelector((state) => state.authReducer);
  const [overlay, setOverlay] = useState(false);

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
          <CartIcon twClass={"w-4 fill-white hover:fill-sec cursor-pointer"} />
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

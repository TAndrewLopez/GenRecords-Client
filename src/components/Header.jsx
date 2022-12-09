import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { NavLinks } from "./";
import { CartIcon, ProfilesIcon } from "../components/assets";

const Header = ({ headerClass }) => {
  const { isAdmin } = useSelector((state) => state.authReducer);

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
          {isAdmin ? <Link to={"/admin"}>Admin Dashboard</Link> : ""}
          <CartIcon twClass={"w-4 fill-white hover:fill-sec cursor-pointer"} />
          <Link to={"/profilePage"}>
            <ProfilesIcon
              twClass={"w-4 fill-white hover:fill-sec cursor-pointer"}
            />
          </Link>
        </ul>
      </nav>
      <div className="text-white sm:hidden">
        <button>Hamburger</button>
      </div>
    </header>
  );
};

export default Header;

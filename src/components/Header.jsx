import { Link } from "react-router-dom";
import { NavLinks } from "./";
const Header = () => {
  const linkInfo = [
    { path: "/", name: "Home" },
    { path: "/vinyls", name: "Vinyls" },
    { path: "/admin", name: "Admin" },
  ];
  return (
    <header className="bg-shade-9 flex px-5 py-3">
      <Link className="text-white hover:text-sec" to="/">
        Logo
      </Link>
      <nav className="m-auto">
        <ul className="flex gap-3">
          <NavLinks />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

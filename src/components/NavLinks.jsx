import { Link } from "react-router-dom";

const NavLinks = () => {
  const linkInfo = [
    { path: "/", name: "Home" },
    { path: "/vinyls", name: "Vinyls" },
    { path: "/admin", name: "Admin" },
  ];

  return (
    <>
      {linkInfo.map((link, i) => (
        <Link
          className="text-white hover:text-sec"
          to={link.path}
          key={link.name + i}>
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;

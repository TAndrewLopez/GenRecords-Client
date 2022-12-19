import { Link } from "react-router-dom";

const NavLinks = ({ links }) => {
  return (
    <>
      {links.map((link, i) => (
        <Link
          className="text-white hover:text-sec ease-in-out duration-300"
          to={link.path}
          key={link.name + i}>
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;

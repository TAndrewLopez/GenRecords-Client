import { GithubIcon, SpotifyIcon } from "../assets";

const Footer = ({ twClass }) => {
  return (
    <footer className={twClass}>
      <a
        className="flex cursor-pointer"
        onClick={() => openInNewTab("https://github.com/TAndrewLopez")}>
        <GithubIcon
          twClass={
            "w-6 sm:w-8 fill-white hover:fill-sec ease-in-out duration-300"
          }
        />
      </a>
      <div className="flex flex-col justify-center items-center text-xs sm:text-base mx-10">
        <p>&copy; 2017–2022 Generational Records</p>
        {/* <a className="hover:text-sec" href="#">
          Privacy
        </a>
        <a className="hover:text-sec" href="#">
          Terms
        </a>
        <a className="hover:text-sec" href="#">
          Support
        </a> */}
      </div>

      <a
        className="flex cursor-pointer group"
        onClick={() => openInNewTab("https://developer.spotify.com/")}>
        <SpotifyIcon
          twClass={
            "w-6 sm:w-8 fill-white group-hover:fill-sec ease-in-out duration-300"
          }
        />
      </a>
      <div className="flex justify-between text-xs"></div>
    </footer>
  );
};

export default Footer;

const openInNewTab = (url) => {
  window.open(url, "_black").focus();
};

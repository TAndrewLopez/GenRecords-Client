import { Link } from "react-router-dom";
import { GithubIcon, SpotifyIcon } from "./assets";

const Footer = () => {
  return (
    <footer className="px-5 py-3 text-white bg-shade-9 flex flex-col justify-center">
      <div className="flex flex-col items-center text-xs">
        <p>&copy; 2017–2022 Generational Records</p>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Support</a>
      </div>
      <div className="flex justify-between text-xs">
        <a
          onClick={() => openInNewTab("https://github.com/TAndrewLopez")}
          // className="flex justify-center items-center gap-3"
        >
          <GithubIcon twClass={"w-8 fill-white"} />
          {/* <p>GitHub</p> */}
        </a>

        <a
          onClick={() => openInNewTab("https://developer.spotify.com/")}
          // className="flex justify-center items-center gap-3"
        >
          <SpotifyIcon twClass={"w-8 fill-white"} />
          {/* <p>Spotify</p> */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;

const openInNewTab = (url) => {
  window.open(url, "_black").focus();
};

import { Link } from "react-router-dom";
import { Header } from "../components";

const LandingPage = () => {
  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5"} />

      <div className="flex-1 flex justify-center items-center ">
        <div
          className={`absolute top-0 left-0 w-full h-full -z-10 bg-shopperBG bg-no-repeat bg-center bg-cover ease-in-out duration-300`}>
          <div className="h-full w-full bg-shade-9 opacity-40"></div>
        </div>
        <div className="relative text-white flex flex-col items-center gap-5 p-5">
          <div className="absolute top-0 left-0 w-full h-full bg-shade-9 opacity-50 -z-10 rounded"></div>
          <h1 className="text-6xl">
            The Destination for <br /> Music Enthusiasts
          </h1>
          <button>
            <Link
              className="bg-accent px-5 py-2 rounded hover:text-shade-9 hover:bg-highlight ease-in-out duration-300"
              to={"/vinyls"}>
              Explore Vinyls
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

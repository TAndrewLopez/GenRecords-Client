import { Link } from "react-router-dom";
import { Header } from "../components";

const LandingPage = () => {
  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5"} />

      <div className="flex-1 flex justify-center items-center ">
        <div
          className={`absolute top-0 left-0 w-full h-full -z-10 bg-shopperBG bg-no-repeat bg-center bg-cover ease-in-out duration-300`}>
          <div className="h-full w-full bg-shade-9 opacity-50"></div>
        </div>
        <div className="relative text-shade-1 flex flex-col items-center gap-5 p-5">
          <h1 className="mb-4 text-3xl font-extrabold text-shade-1 md:text-5xl lg:text-6xl">
            The Destination for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-sec from-accent">
              Music Enthusiasts
            </span>
          </h1>
          <p className="mb-4 text-lg font-normal text-shade-4 lg:text-xl sm:px-16 xl:px-48">
            Listen to music the way the{" "}
            <Link
              className="font-semibold text-shade-1 hover:text-highlight underline decoration-accent hover:decoration-highlight ease-in-out duration-300"
              to={"/vinyls"}>
              producer
            </Link>{" "}
            intended!{" "}
            <Link
              className="font-semibold text-shade-1 hover:text-highlight underline decoration-accent hover:decoration-highlight ease-in-out duration-300"
              to={"/vinyls"}>
              Find Vinyls
            </Link>{" "}
            from your favorite generation and more.
          </p>

          <Link
            to={"/vinyls"}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-shade-1 bg-accent rounded-lg hover:bg-highlight hover:text-shade-9 focus:ring-4 focus:ring-blue-300 ease-in-out duration-300">
            Explore Vinyls
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

/*
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
*/

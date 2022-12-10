import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components";

const LandingPage = () => {
  const bgImages = [
    `url(/vinylShopper.jpg)`,
    `url(/garageCollection.jpg)`,
    `url(/musicForPeople.jpg)`,
    `url(/recordPlayer.jpg)`,
    `url(/recordPlayerClose.jpg)`,
    `url(/recordsWithHeadphones.jpg)`,
    `url(/vinylCollection.jpg)`,
  ];

  let num = 0;
  const [pageBG, setPageBG] = useState(bgImages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      num + 1 > bgImages.length - 1 ? (num = 0) : (num += 1);
      setPageBG(bgImages[num]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header headerClass={"flex justify-between p-5"} />
      <div className="flex-1 flex justify-center items-center ">
        <div
          style={{ backgroundImage: `${pageBG}` }}
          className={`absolute top-0 left-0 w-full h-full -z-10 bg-no-repeat bg-center bg-cover ease-in-out duration-300`}>
          <div className="h-full w-full bg-shade-9 opacity-40"></div>
        </div>
        <div className="relative text-white flex flex-col items-center gap-5 p-5">
          <div className="absolute top-0 left-0 w-full h-full bg-shade-9 opacity-50 -z-10 rounded"></div>
          <h1 className="text-3xl">The Destination for Music Enthusiasts</h1>
          <button>
            <Link
              className="bg-sec px-5 py-2 rounded hover:bg-highlight ease-in-out duration-300"
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

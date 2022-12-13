import { StarIcon } from "../assets";

const VinylCard = ({ vinyl }) => {
  const numberOfStars = Math.floor(popularityToStart(vinyl.popularity));

  return (
    <div
      onClick={() => console.log(vinyl)}
      className="w-full m-5 max-w-[300px] rounded-lg shadow-md bg-shade-9">
      <a href="#">
        <img className="p-5 rounded-t-lg" src={vinyl.img} alt="vinyl-image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-shade-1 hover:text-sec whitespace-nowrap text-ellipsis overflow-hidden">
            {vinyl.name}
          </h5>
          <h6 className="text-sm font-semibold tracking-tight text-shade-1 hover:text-sec">
            {vinyl.artist.name}
          </h6>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {popularityStars(numberOfStars)}

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {`${popularityToStart(vinyl.popularity)} Popularity`}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {`$${formatToUSD(vinyl.price)}`}
          </span>
          <a
            href="#"
            className="bg-accent px-5 py-2 rounded hover:bg-highlight ease-in-out duration-300">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default VinylCard;

const formatToUSD = (num) => {
  const numString = `${num}`;
  return `${numString.slice(0, 2)}.${numString.slice(2)}`;
};

const popularityToStart = (num) => {
  return num / 20;
};

const popularityStars = (num) => {
  const stars = [];

  for (let i = 1; i < 6; i++) {
    i <= num ? stars.push(1) : stars.push(0);
  }

  return (
    <>
      {stars.map((star, i) => {
        if (star) {
          return <StarIcon twClass={"w-5 h-5 fill-highlight"} key={i} />;
        }
        return <StarIcon twClass={"w-5 h-5 fill-shade-6"} key={i} />;
      })}
    </>
  );
};

/*
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-highlight"
*/

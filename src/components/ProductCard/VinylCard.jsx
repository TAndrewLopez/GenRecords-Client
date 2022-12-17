import { useDispatch } from "react-redux";
import { addCartLineItem } from "../../../redux/features/shopSlice";
import { formatToUSD, popularityToStart } from "../helpers";
import { StarIcon } from "../assets";

const VinylCard = ({ vinyl }) => {
  const dispatch = useDispatch();
  const numberOfStars = Math.floor(popularityToStart(vinyl.popularity));

  return (
    <div className="w-full m-5 max-w-[300px] rounded-lg shadow-md bg-shade-9">
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
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
            {`${popularityToStart(vinyl.popularity)} Popularity`}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-shade-1">
            {`$${formatToUSD(vinyl.price)}`}
          </span>
          <a
            onClick={() => {
              dispatch(addCartLineItem(vinyl.id));
            }}
            className="bg-accent px-5 py-2 rounded text-shade-1 hover:text-shade-9 hover:bg-highlight ease-in-out duration-300 cursor-pointer">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default VinylCard;

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

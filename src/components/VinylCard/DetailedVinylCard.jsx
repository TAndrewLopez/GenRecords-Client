import { useNavigate } from "react-router-dom";
import { formatToUSD } from "../helpers";
import { CartIcon } from "../assets";

const DetailedVinylCard = ({ singleVinyl, cart }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-5 flex-col sm:flex-row m-5 bg-shade-9 p-5 rounded-lg">
      <div className="flex-1 relative flex items-center">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="absolute top-3 -left-5 px-6 py-2 text-shade-1 bg-shade-9">
          Back
        </button>
        <img
          className="object-cover w-full"
          src={singleVinyl?.img}
          alt="vinyl-image"
        />
      </div>
      <div className="flex-1 flex items-center">
        <div className="w-full flex flex-col">
          <h5 className="max-w-full text-4xl font-bold tracking-tight text-shade-1 break-words">
            {singleVinyl?.name}
          </h5>
          <h6 className="text-4xl font-normal tracking-tight text-shade-1">
            {singleVinyl?.artist.name}
          </h6>
          <p className="text-2xl font-normal text-shade-1">
            {`$${formatToUSD(singleVinyl?.price)}`}
          </p>
          <button
            className={`w-full rounded ease-in-out duration-300 ${
              cart?.filter((item) => item?.vinyl.id === singleVinyl?.id).length
                ? "bg-shade-8 cursor-default "
                : "bg-accent text-shade-1 hover:bg-highlight"
            }`}
            type="submit">
            {cart?.filter((item) => item?.vinyl.id === singleVinyl?.id).length
              ? AddToCartButton(false)
              : AddToCartButton(true)}
          </button>
          <p className="text-shade-1 ">Ships on 'Get Date' plus 7 days</p>
          <p className="text-shade-1 ">Vinyl Details</p>
        </div>
      </div>
    </div>
  );
};

export default DetailedVinylCard;

const AddToCartButton = (add) => {
  if (add) {
    return (
      <div className="flex justify-center gap-5 px-6 py-2 hover:text-shade-9 group ease-in-out duration-300">
        <CartIcon
          twClass={`w-4 fill-white cursor-pointer group-hover:fill-shade-9 ease-in-out duration-300`}
        />
        Add to Cart
      </div>
    );
  }
  return (
    <div className="flex justify-center gap-5 px-6 py-2">
      <CartIcon twClass={`w-4`} />
      Already in Cart
    </div>
  );
};

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatToUSD } from "../helpers";
import { CartIcon } from "../assets";
import { addLineItem, removeLineItem } from "../../../redux/features/authSlice";

const DetailedVinylCard = ({ singleVinyl, cart }) => {
  const navigate = useNavigate();
  const date = new Date();
  date.setDate(date.getDate() + 7);
  const [lineItemId] = cart.filter((item) => item.vinyl.id === singleVinyl?.id);

  return (
    <div className="flex sm:gap-5 flex-col sm:flex-row m-5 p-5 rounded-lg">
      <div className="flex-1 relative flex items-center">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="absolute top-3 left-0 px-6 py-2 rounded-r text-shade-1 hover:text-shade-9 bg-shade-9 hover:bg-highlight ease-in-out duration-300">
          Back
        </button>

        <img
          className="object-cover w-full"
          src={singleVinyl?.img}
          alt="vinyl-image"
        />
      </div>
      <div className="flex-1 flex items-center">
        <div className="w-full flex gap-2.5 flex-col">
          <h5 className="max-w-full text-xl md:text-4xl font-bold tracking-tight text-shade-1 break-words">
            {singleVinyl?.name}
          </h5>
          <h6 className="text-4xl font-normal tracking-tight text-shade-5">
            {singleVinyl?.artist.name}
          </h6>
          <p className="text-2xl font-normal text-shade-1">
            {`$${formatToUSD(singleVinyl?.price)}`}
          </p>

          {cart?.some((item) => item?.vinyl.id === singleVinyl?.id)
            ? AddToCartButton(false, lineItemId?.id)
            : AddToCartButton(true, singleVinyl?.id)}
          <p className="text-shade-1 font-light">{`Ships on ${date.toDateString()}`}</p>
          <div>
            <h6>Additional Details:</h6>
            <p className="text-shade-1 font-light">{`Stock: ${singleVinyl?.stock}`}</p>
            <p className="text-shade-1 font-light">{`Release Date: ${singleVinyl?.releaseDate}`}</p>
            <p className="text-shade-1 font-light">{`Label: ${singleVinyl?.label}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedVinylCard;

const AddToCartButton = (add, id) => {
  const dispatch = useDispatch();
  if (add) {
    return (
      <button
        onClick={() => {
          dispatch(addLineItem(id));
        }}
        className="flex items-center justify-center gap-5 px-6 py-2 rounded text-shade-1 bg-accent hover:text-shade-9 hover:bg-highlight group ease-in-out duration-300 cursor-pointer">
        <CartIcon
          twClass={`w-4 fill-shade-1 group-hover:fill-shade-9 ease-in-out duration-300`}
        />
        Add to Cart
      </button>
    );
  }
  return (
    <button
      onClick={() => {
        dispatch(removeLineItem(id));
      }}
      className="flex items-center justify-center gap-5 px-6 py-2 rounded text-accent bg-shade-8 hover:text-shade-9 hover:bg-highlight group ease-in-out duration-300 cursor-pointer">
      <CartIcon
        twClass={`w-4 fill-accent group-hover:fill-shade-9 ease-in-out duration-300`}
      />
      Remove from Cart
    </button>
  );
};

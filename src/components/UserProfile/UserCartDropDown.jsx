import { Link } from "react-router-dom";
import { formatToUSD } from "../helpers";

const UserCartDropDown = ({ cart }) => {
  const total = cart.reduce((acc, el) => {
    return (acc += el.vinyl.price);
  }, 0);
  return (
    <div className="hidden z-50 sm:block sm:absolute sm:right-5 sm:top-20">
      <div className="rounded-xl p-1 bg-gradient-to-r to-sec from-accent">
        <ul className="flex flex-col justify-between h-full bg-shade-9 rounded-lg p-5 divide-y-2 divide-accent divide-opacity-40">
          <li className="pb-3 text-shade-3">
            <p className="font-light text-center text-shade-1">
              {`${cart.length} ${cart.length === 1 ? "item" : "items"}`} in cart
            </p>
            {total ? (
              <p className="font-light text-center text-shade-1 pb-2">
                Total: $
                {formatToUSD(
                  cart.reduce((acc, lineItem) => {
                    acc += lineItem.vinyl.price * lineItem.qty;
                    return acc;
                  }, 0)
                )}
              </p>
            ) : (
              ""
            )}
          </li>
          <li className="pt-3 text-shade-3">
            <Link
              className="block text-center font-light pt-2 hover:underline hover:text-highlight cursor-pointer"
              to={"/checkout"}>
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCartDropDown;

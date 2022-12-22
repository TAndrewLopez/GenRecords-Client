import { Link } from "react-router-dom";
import { formatToUSD } from "../helpers";

const UserCartDropDown = ({ cart }) => {
  return (
    <div className="hidden z-50 sm:block sm:absolute sm:right-5 sm:top-20">
      <div className="rounded-xl p-1 bg-gradient-to-r to-sec from-accent">
        <ul className="flex flex-col justify-between h-full bg-shade-9 rounded-lg p-5 divide-y-2 divide-accent divide-opacity-40">
          <li>
            <p className="font-light text-center text-shade-1">
              {`${cart.length}`} items in cart
            </p>
            <p className="font-light text-center text-shade-1 pb-2">
              Total: $
              {formatToUSD(
                cart.reduce((acc, el) => {
                  return (acc += el.vinyl.price);
                }, 0)
              )}
            </p>
          </li>
          <li className="pt-3 text-shade-3">
            <span className="font-light text-center pt-2">
              <Link className="cursor-pointer " to={"/profilePage"}>
                View Cart
              </Link>
            </span>
            {" || "}
            <span className="font-light text-center pt-2">
              <Link className="cursor-pointer " to={"/checkout"}>
                Checkout
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCartDropDown;

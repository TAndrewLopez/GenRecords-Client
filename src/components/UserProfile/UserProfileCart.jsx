import { PlusIcon, MinusIcon } from "../assets";
import { formatToUSD } from "../helpers";

const UserProfileCart = ({ cart }) => {
  return (
    <div className="flex-1 flex flex-col items-center bg-shade-9 rounded-lg shadow-md">
      <ul className="w-full sm:max-w-sm divide-y-2 divide-accent divide-opacity-40">
        {cart.map((item, i) => (
          <li className="p-3 sm:pb-4" key={item.id + i}>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={item.vinyl.img} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-shade-1 truncate">
                  {`${item.vinyl.name} by ${item.vinyl.artist.name}`}
                </p>
                <div className="flex gap-3 py-1">
                  <button className="px-2 bg-shade-7 opacity-50 hover:opacity-100 hover:bg-accent">
                    <MinusIcon twClass="w-2 fill-shade-2" />
                  </button>
                  <p className="text-sm text-shade-5 truncate">
                    {`qty: ${item.qty}`}
                  </p>

                  <button className="px-2 bg-shade-7 opacity-50 hover:opacity-100 hover:bg-accent">
                    <PlusIcon twClass="w-2 fill-shade-2" />
                  </button>
                </div>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-shade-1">
                {`$${formatToUSD(item.vinyl.price * item.qty)}`}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfileCart;

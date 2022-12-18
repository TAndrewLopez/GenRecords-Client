import { useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "../../components";
import { PlusIcon, MinusIcon } from "../assets";
import { formatToUSD } from "../helpers";
// import { addCartLineItem } from "../../../redux/features/shopSlice";

const UserCart = ({ cart, title, images, controls }) => {
  //PAGINATION
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexOfLastPost = currPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currSlice = cart.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div
      id="userCart"
      className="w-full max-w-md p-10 bg-shade-9 rounded-lg shadow-md sm:p-8">
      {title ? (
        <h5 className="text-xl pb-5 font-bold leading-none text-shade-1">
          Your Cart
        </h5>
      ) : (
        <></>
      )}
      <ul className="w-full sm:max-w-sm divide-y-2 divide-accent divide-opacity-40">
        {currSlice?.map((item) => {
          return (
            <li className="py-2" key={item?.id}>
              <div className="flex items-center space-x-4">
                {images ? (
                  <div className="flex-shrink-0 border-highlight border p-1 border-opacity-50 rounded-full cursor-pointer">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={item?.vinyl.img}
                    />
                  </div>
                ) : (
                  <></>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-shade-1 truncate">
                    {`${item?.vinyl.name} by ${item?.vinyl.artist.name}`}
                  </p>

                  <div className="flex gap-3 py-1">
                    <p className="text-sm text-shade-5 truncate">
                      {`qty: ${item?.qty}`}
                    </p>
                    {controls ? adjustQty(false, item?.id) : ""}
                    {controls ? adjustQty(true, item?.id) : ""}
                  </div>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-shade-1">
                  {`$${formatToUSD(item?.vinyl.price * item?.qty)}`}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {currSlice.length ? (
        <Pagination
          itemsPerPage={itemsPerPage}
          total={cart.length}
          setPage={setCurrPage}
          currPage={currPage}
        />
      ) : (
        <p className="text-shade-5">Cart Empty.</p>
      )}
    </div>
  );
};

export default UserCart;

const adjustQty = (addOrSub, itemId) => {
  const dispatch = useDispatch();
  if (addOrSub) {
    return (
      <button
        onClick={() => {
          // dispatch(addCartLineItem(itemId));
        }}
        className="px-2 bg-shade-7 opacity-50 hover:opacity-100 hover:bg-accent ease-in-out duration-300 peer">
        <PlusIcon twClass="w-2 fill-shade-2" />
      </button>
    );
  }
  return (
    <button className="px-2 bg-shade-7 opacity-50 hover:opacity-100 hover:bg-accent ease-in-out duration-300">
      <MinusIcon twClass="w-2 fill-shade-2" />
    </button>
  );
};

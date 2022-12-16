import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrders } from "../../../redux/features/shopSlice";
import { CartSuccess, CartFailure } from "../assets";

const testOrders = [
  { status: "open", date: "Oct 18, 2020", total: "320" },
  { status: "completed", date: "Nov 3, 2022", total: "400" },
  { status: "cancelled", date: "Jan 26, 2021", total: "100" },
  { status: "closed", date: "Jun 21, 2022", total: "900" },
];

const OrderList = () => {
  const dispatch = useDispatch();
  const {
    authReducer: { id },
    shopReducer: { orders },
  } = useSelector((state) => state);

  useEffect(() => {
    if (id) {
      dispatch(getUserOrders(id));
    }
  }, []);

  return (
    <div className="w-full max-w-md p-10 bg-shade-9 rounded-lg shadow-md sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-shade-1">
          Latest Customers
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-accent hover:text-highlight hover:underline">
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-shade-6">
          {orders.map((order, i) => (
            <li className="py-3 sm:py-4" key={order.id + i}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {order.complete ? (
                    <CartSuccess twClass="w-8 h-8 fill-green-600" />
                  ) : (
                    <CartFailure twClass="w-8 h-8 fill-red-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-shade-4 truncate">
                    {`#${order.id}`}
                  </p>
                  <p className="text-sm text-shade-6 truncate">
                    {getLocalDateFromOrderDbCreatedDate(order.createdAt)}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-shade-4">
                  $320
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderList;

const getLocalDateFromOrderDbCreatedDate = (str) => {
  const months = [
    null,
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = str.slice(0, 4);
  const month = str.slice(5, 7);
  const day = str.slice(8, 10);
  return `${months[month]} ${day}, ${year}`;
};

/*
<li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <CartSuccess twClass="w-8 h-8 fill-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-shade-4 truncate">
                  {"order #2022-12-14"}
                </p>
                <p className="text-sm text-shade-6 truncate">
                  {"Dec 12, 2022"}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-shade-4">
                $320
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <CartFailure twClass="w-8 h-8 fill-red-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-shade-4 truncate">
                  {"order #2022-12-25"}
                </p>
                <p className="text-sm text-shade-6 truncate">
                  {"Dec 25, 2022"}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-shade-4">
                $900
              </div>
            </div>
          </li>
*/

import { formatToUSD } from "../helpers";

const lineItems = [
  {
    id: 12,
    qty: 1,
    vinyl: {
      id: 1,
      name: "My All",
      stock: 11,
      price: 1699,
      img: "https://i.scdn.co/image/ab67616d0000b27385a1396e27ffc1d8c9bbe7e1",
      artist: {
        id: 1,
        name: "Polo G",
      },
    },
  },
  {
    id: 12,
    qty: 1,
    vinyl: {
      id: 1,
      name: "My All",
      stock: 11,
      price: 1699,
      img: "https://i.scdn.co/image/ab67616d0000b27385a1396e27ffc1d8c9bbe7e1",
      artist: {
        id: 1,
        name: "Polo G",
      },
    },
  },
  {
    id: 12,
    qty: 1,
    vinyl: {
      id: 1,
      name: "My All",
      stock: 11,
      price: 1699,
      img: "https://i.scdn.co/image/ab67616d0000b27385a1396e27ffc1d8c9bbe7e1",
      artist: {
        id: 1,
        name: "Polo G",
      },
    },
  },
];

const UserProfileCart = () => {
  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      {lineItems.map((item, i) => (
        <li className="pb-3 sm:pb-4" key={item.id + i}>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="w-8 h-8 rounded-full" src={item.vinyl.img} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {`${item.vinyl.name} by ${item.vinyl.artist.name}`}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {`qty: ${item.qty}`}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              {`$${formatToUSD(item.vinyl.price)}`}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserProfileCart;

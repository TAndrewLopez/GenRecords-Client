import { useDispatch } from "react-redux";
import { ProfileIcon } from "../components/assets";
import { logout } from "../../redux/features/authSlice";

const UserProfileCard = ({
  user: { firstName, lastName, username, email },
}) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full max-w-sm bg-shade-9 rounded-lg shadow-md">
      <div className="flex justify-end px-4 pt-4">
        <button
          data-dropdown-toggle="dropdown"
          className="inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5"
          type="button">
          <span className="sr-only">Open dropdown</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </button>

        <div
          id="dropdown"
          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow w-44">
          <ul className="py-1" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Export Data
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <ProfileIcon twClass="w-24 h-24 mb-3 rounded-full shadow-lg fill-shade-4" />
        <h5 className="mb-1 text-xl font-medium text-shade-1">
          {`${firstName} ${lastName}`}
        </h5>
        <span className="text-sm text-gray-500">{username}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-accent rounded-lg hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300">
            Add friend
          </a>

          <a
            onClick={() => dispatch(logout())}
            to="/auth"
            className="inline-flex items-center px-4 py-2 text-sm
            font-medium text-center text-gray-900 bg-white rounded-lg
            hover:text-shade-1 hover:bg-sec focus:ring-4 focus:outline-none
            focus:ring-gray-200">
            {" "}
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;

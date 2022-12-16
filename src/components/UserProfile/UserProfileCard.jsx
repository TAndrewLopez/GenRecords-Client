import { useDispatch } from "react-redux";
import { ProfileIcon } from "../assets";
import { logout } from "../../../redux/features/authSlice";

const UserProfileCard = ({
  user: { firstName, lastName, username, email },
}) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full max-w-sm bg-shade-9 rounded-lg shadow-md">
      <div className="flex flex-col items-center py-10">
        <ProfileIcon twClass="w-24 h-24 mb-3 rounded-full shadow-lg fill-shade-4" />
        <h5 className="mb-1 text-xl font-medium text-shade-1">
          {`${firstName} ${lastName}`}
        </h5>
        <span className="text-sm text-gray-500">{username}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-accent rounded-lg hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300">
            Go To Cart
          </a>

          <a
            onClick={() => dispatch(logout())}
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm
            font-medium text-center text-gray-900 bg-white rounded-lg
            hover:text-shade-1 hover:bg-sec focus:ring-4 focus:outline-none
            focus:ring-gray-200">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;

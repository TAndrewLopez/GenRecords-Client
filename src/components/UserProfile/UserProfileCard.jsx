import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/authSlice";
import defaultProfileImage from "./assets/defaultProfileImage.png";

const UserProfileCard = ({ user: { firstName, lastName, username, img } }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full max-w-sm bg-shade-9 rounded-lg shadow-md">
      <div className="flex flex-col items-center py-10">
        <img
          className="w-24 aspect-square mb-3 rounded-full shadow-lg object-cover"
          src={img || defaultProfileImage}
          alt="profile-image"
        />
        <h5 className="mb-1 text-xl font-medium text-shade-1">
          {`${firstName} ${lastName}`}
        </h5>
        <span className="text-sm text-shade-5">{username}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-accent rounded-lg hover:text-shade-9 hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 ease-in-out duration-300">
            Edit Profile
          </a>

          <a
            onClick={() => dispatch(logout())}
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm
            font-medium text-center text-shade-9 bg-white rounded-lg
            hover:text-shade-1 hover:bg-sec focus:ring-4 focus:outline-none
            focus:ring-gray-200 ease-in-out duration-300">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;

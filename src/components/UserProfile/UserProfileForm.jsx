import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/features/authSlice";

const userTestImage =
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80";

const UserProfileForm = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const imgURLRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (passwordRef.current.value !== confirmRef.current.value) {
      console.error("passwords don't match");
      return;
    }
    console.log({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      confirm: confirmRef.current.value,
      imageURL: imgURLRef.current.value,
    });
  };
  return (
    <div className="w-full max-w-md p-10 bg-shade-9 rounded-lg shadow-md sm:p-8">
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              ref={firstNameRef}
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-shade-6 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              First name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              ref={lastNameRef}
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-shade-6 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last name
            </label>
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            ref={emailRef}
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-shade-6 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email address
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            ref={usernameRef}
            name="floating_username"
            id="floating_username"
            className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_username"
            className="peer-focus:font-medium absolute text-sm text-shade-6 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Username
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              ref={passwordRef}
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-shade-6 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              ref={confirmRef}
              name="floating_confirm"
              id="floating_confirm"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_confirm"
              className="peer-focus:font-medium absolute text-sm text-shade-6 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Confirm password
            </label>
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            ref={imgURLRef}
            name="floating_username"
            id="floating_username"
            className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_username"
            className="peer-focus:font-medium absolute text-sm text-shade-6 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Image Url
          </label>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-accent rounded-lg hover:text-shade-9 hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 ease-in-out duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserProfileForm;

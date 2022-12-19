import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { createUser } from "../../../redux/features/authSlice";
import { ErrorIcon } from "../assets";

const CreateAccountForm = ({ toggle }) => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.authReducer);

  const [errMessage, setErrMessage] = useState("");
  const [formError, setFormError] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  //FIXME NAVIGATING TO NEXT PAGE DOESN'T HAPPEN ON FIRST CLICK
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (form.password !== form.confirm) {
      setErrMessage("passwords must match");
      setFormError(true);
      return;
    }
    dispatch(createUser(form));
    setErrMessage("");
    setForm({
      username: "",
      email: "",
      password: "",
      confirm: "",
    });
  };

  if (loggedIn) {
    return <Navigate to={"/profilePage"} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="w-full text-4xl font-semibold text-shade-1 text-center mb-2 after:content-[''] after:block after:h-[2px] after:bg-accent">
        Create Account
      </h1>
      <p
        onClick={() => setFormError(false)}
        className={`relative z-5 top-[-35px] rounded-sm text-errorRed bg-white flex justify-center items-center gap-2 cursor-pointer 
        ease-in-out duration-500 m-3 ${
          formError ? "translate-y-[35px] opacity-100" : "opacity-0"
        }`}>
        {errMessage}
        <ErrorIcon twClass="w-5 fill-errorRed" />
      </p>

      {/* TOP CONTAINER */}
      <div className="md:flex md:gap-3">
        <div className="w-full px-3">
          <label className="text-shade-1" htmlFor="username">
            Username
            <span className="ml-2 text-xs text-errorRed">*</span>
            <span className="ml-1 text-xs text-shade-1">Required</span>
          </label>
          <input
            required
            id="username"
            name="username"
            value={form.username}
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
            onChange={(evt) => setForm({ ...form, username: evt.target.value })}
            onFocus={() => setFormError(false)}
          />
        </div>
      </div>

      {/* MIDDLE CONTAINER */}
      <div className="w-full px-3">
        <label className="text-shade-1" htmlFor="email">
          Email
          <span className="ml-2 text-xs text-errorRed">*</span>
          <span className="ml-1 text-xs text-shade-1">Required</span>
        </label>
        <input
          required
          id="email"
          name="email"
          type="email"
          value={form.email}
          className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
          onChange={(evt) => setForm({ ...form, email: evt.target.value })}
          onFocus={() => setFormError(false)}
        />
      </div>

      {/* BOTTOM CONTAINER */}
      <div className="md:flex md:gap-3">
        <div className="w-full px-3">
          <label className="text-shade-1" htmlFor="password">
            Password
            <span className="ml-2 text-xs text-errorRed">*</span>
            <span className="ml-1 text-xs text-shade-1">Required</span>
          </label>
          <input
            required
            id="password"
            name="password"
            type="password"
            value={form.password}
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
            onChange={(evt) => setForm({ ...form, password: evt.target.value })}
            onFocus={() => setFormError(false)}
          />
        </div>
        <div className="w-full px-3">
          <label className="text-shade-1" htmlFor="confirm">
            Confirm
            <span className="ml-2 text-xs text-errorRed">*</span>
            <span className="ml-1 text-xs text-shade-1">Required</span>
          </label>
          <input
            required
            id="confirm"
            name="confirm"
            type="password"
            value={form.confirm}
            className="w-full p-2 mt-2 mb-2 rounded-sm text-blueGrey outline-accent border-2"
            onChange={(evt) => setForm({ ...form, confirm: evt.target.value })}
            onFocus={() => setFormError(false)}
          />
        </div>
      </div>
      <div className="w-full px-3 flex items-center justify-between">
        <p
          onClick={() => toggle(false)}
          className="text-accent hover:text-shade-1 cursor-pointer p-2">
          Sign in instead
        </p>
        <button
          className={`md:w-32 mt-2 px-6 py-2 rounded 
          ${
            form.username && form.email && form.password && form.confirm
              ? "bg-accent text-shade-1 hover:bg-highlight"
              : "bg-shade-8 cursor-default"
          }
          `}
          type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateAccountForm;

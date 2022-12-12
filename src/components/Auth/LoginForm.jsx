import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorIcon, ProfileIcon, LockIcon } from "../assets";
import { login } from "../../../redux/features/authSlice";

const LoginForm = ({ toggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formError, setFormError] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [nameFieldValidation, setNameFieldValidation] = useState(false);
  const [passwordFieldValidation, setPasswordFieldValidation] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!form.username || !form.password) {
      if (!form.username) {
        setNameFieldValidation(true);
      }
      if (!form.password) {
        setPasswordFieldValidation(true);
      }
      return;
    }

    dispatch(login(form));
    //RESET STATES
    setNameFocused(false);
    setPasswordFocused(false);
    setForm({
      username: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="w-full text-4xl font-semibold text-shade-1 text-center mb-2 after:content-[''] after:block after:h-[2px] after:bg-accent">
        Account Login
      </h1>

      <p
        onClick={() => setFormError(false)}
        className={`relative z-5 top-[-35px] rounded-sm text-errorRed bg-shade-1 flex justify-center items-center gap-2 cursor-pointer 
    ease-in-out duration-500 ${
      formError ? "translate-y-[35px] opacity-100" : "opacity-0"
    }`}>
        Error: Invalid Credentials
        <ErrorIcon twClass="w-5 fill-errorRed" />
      </p>

      {/* USERNAME INPUT */}
      <label className="relative text-shade-1" htmlFor="username">
        Username
        <ProfileIcon
          twClass={`absolute w-5 top-[40px] left-[5px] z-20 ease-in-out duration-300 
      ${nameFocused ? "scale-[.75] fill-accent" : "fill-shade-9"}`}
        />
      </label>

      <input
        onFocus={() => {
          setNameFocused(true);
          setFormError(false);
          if (nameFieldValidation) {
            setNameFieldValidation(!nameFieldValidation);
          }
        }}
        onBlur={() => {
          if (!form.username) {
            setNameFocused(false);
          }
        }}
        id="username"
        className="relative z-10 w-full pl-8 p-2 mt-2 mb-2 rounded-sm text-shade-9 outline-accent"
        onChange={(evt) => setForm({ ...form, username: evt.target.value })}
        onClick={() => setNameFocused(true)}
        value={form.username}
        name="name"
      />
      <p
        onClick={() => setNameFieldValidation(false)}
        className={`relative z-5 top-[-35px] rounded-sm text-errorRed bg-shade-1 flex justify-center items-center gap-2 cursor-pointer 
    ease-in-out duration-500 ${
      nameFieldValidation ? "translate-y-[35px] opacity-100" : "opacity-0"
    }`}>
        Please enter your username
        <ErrorIcon twClass="w-5 fill-errorRed" />
      </p>

      {/* PASSWORD INPUT */}
      <label
        className="relative text-shade-1 flex flex-col mt-1"
        htmlFor="password">
        Password
        <LockIcon
          twClass={`absolute w-5 top-[40px] left-[5px] z-20 ease-in-out duration-300
      ${passwordFocused ? "scale-[.75] fill-accent" : "fill-shade-9"}`}
        />
      </label>

      <input
        onFocus={() => {
          setPasswordFocused(true);
          setFormError(false);
          if (passwordFieldValidation) {
            setPasswordFieldValidation(!passwordFieldValidation);
          }
        }}
        onBlur={(evt) => {
          if (!form.password) {
            setPasswordFocused(false);
          }
        }}
        id="password"
        className="relative z-10 w-full pl-8 p-2 mt-2 mb-2 rounded-sm text-shade-9 outline-accent"
        onChange={(evt) => setForm({ ...form, password: evt.target.value })}
        onClick={() => setPasswordFocused(true)}
        value={form.password}
        name="password"
        type="password"
      />

      <p
        onClick={() => setPasswordFieldValidation(false)}
        className={`relative z-5 top-[-35px] rounded-sm text-errorRed bg-shade-1 flex justify-center items-center gap-2 cursor-pointer ease-in-out duration-500
    ${
      passwordFieldValidation ? "translate-y-[35px] opacity-100" : "opacity-0"
    }`}>
        Please enter your password
        <ErrorIcon twClass="w-5 fill-errorRed" />
      </p>

      {/* FORM SUBMISSION BUTTON */}
      <button
        className={`w-full mt-2 px-6 py-2 rounded ease-in-out duration-300 ${
          form.username && form.password
            ? "bg-accent text-shade-1 hover:bg-highlight"
            : "bg-shade-8 cursor-default "
        }`}
        type="submit">
        Sign In
      </button>
      <span className="block text-center text-shade-1 mt-2">
        Not a member?
        <button
          onClick={() => toggle(true)}
          type="button"
          className="text-accent ml-2 hover:underline hover:text-highlight">
          Register
        </button>
      </span>
    </form>
  );
};

export default LoginForm;

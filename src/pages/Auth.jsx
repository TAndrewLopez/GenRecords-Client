import { useState } from "react";
import { Header, CreateAccountForm, DemoLoginButtons } from "../components";
import { LoginForm } from "../components";

const AuthForm = () => {
  const [form, setForm] = useState(false);

  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5"} />

      <div
        className={`absolute top-0 left-0 w-full h-full -z-10 bg-recordPlayerClose bg-no-repeat bg-center bg-cover ease-in-out duration-300`}>
        <div className="h-full w-full bg-shade-9 opacity-40"></div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        {form ? (
          <CreateAccountForm toggle={setForm} />
        ) : (
          <LoginForm toggle={setForm} />
        )}
      </div>
      <DemoLoginButtons />
    </>
  );
};

export default AuthForm;

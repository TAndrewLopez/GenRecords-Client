import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrorMessage,
  clearSuccessMessage,
} from "../../redux/features/authSlice";

import {
  Header,
  Footer,
  StripePayment,
  StripeSuccessMessage,
  ToastNotification,
  UserCart,
} from "../components";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { cart, orders, message, error } = useSelector(
    (state) => state.authReducer
  );
  const [someState, setSomeState] = useState(false);

  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />

      <div className="flex-1 bg-shade-7 p-5">
        <h1 className="text-center text-5xl my-5 text-shade-1 whitespace-nowrap after:content=[''] after:block after:h-1 after:mt-2 after:m-auto after:max-w-xs after:bg-accent">
          Checkout
        </h1>

        {cart.length && !someState ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0">
            <div className="w-full sm:w-auto flex justify-center items-center">
              <UserCart orders={orders} cart={cart} controls images />
            </div>
            <div className="bg-shade-2 rounded p-5">
              <StripePayment cart={cart} />
            </div>
          </div>
        ) : (
          ""
        )}

        {someState ? <StripeSuccessMessage cart={cart} /> : ""}
      </div>

      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9 "} />

      {message && (
        <ToastNotification
          clear={() => dispatch(clearSuccessMessage())}
          type="success"
          toastMessage={message}
        />
      )}

      {error && message && (
        <ToastNotification
          clear={() => dispatch(clearErrorMessage())}
          type="error"
          toastMessage={message}
        />
      )}
    </>
  );
};

export default CheckoutPage;

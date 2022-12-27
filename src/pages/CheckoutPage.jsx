import { useSelector } from "react-redux";
import { Header, Footer, StripePayment, UserCart } from "../components";

const CheckoutPage = () => {
  const { cart } = useSelector((state) => state.authReducer);

  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />

      <div className="flex-1 bg-shade-3 p-5">
        <h1 className="text-center text-5xl my-5 text-shade-9 whitespace-nowrap after:content=[''] after:block after:h-1 after:mt-2 after:m-auto after:max-w-xs after:bg-accent">
          Checkout
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="w-full sm:w-auto flex justify-center items-center">
            <UserCart images cart={cart} />
          </div>
          <StripePayment cart={cart} />
        </div>
      </div>

      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9 "} />
    </>
  );
};

export default CheckoutPage;

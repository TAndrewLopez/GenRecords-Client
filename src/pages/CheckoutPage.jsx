import { Header, Footer, StripeContainer } from "../components";

const CheckoutPage = () => {
  return (
    <>
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
      <div className="flex-1 bg-shade-7 ">
        <h3>CHECKOUT</h3>
        <StripeContainer />
      </div>
      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9 "} />
    </>
  );
};

export default CheckoutPage;

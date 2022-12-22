import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51MHaAZH88xLWV3ICiVebHyyHS7KUzW4fzSdLxcPzSiN6QlHZbgIhm9sbZ04CWXy7Vg10CtJufxsVn5IPmD8jasT600xNj4Dc9Y";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;

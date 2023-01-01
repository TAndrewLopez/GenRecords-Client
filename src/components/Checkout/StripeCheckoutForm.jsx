import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { formatToUSD } from "../helpers";

const StripeCheckoutForm = ({ cart }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout`,
      },
    });

    if (error) {
      setMessage(error.message);
    }
    setIsProcessing(false);
  };

  return (
    <form
      className="text-shade-9 mb-5"
      id="payment-form"
      onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        className={`sm:px-5 px-3 py-2 rounded w-full mt-5 ease-in-out duration-300 cursor-pointer ${
          false
            ? "bg-shade-8 text-accent cursor-default disabled"
            : "bg-accent text-shade-1 hover:bg-highlight hover:text-shade-9"
        }`}
        disabled={isProcessing}
        id="submit">
        {isProcessing
          ? "Processing"
          : `Pay $${formatToUSD(
              cart.reduce(
                (acc, lineItem) => (acc += lineItem.vinyl.price * lineItem.qty),
                0
              )
            )}`}
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default StripeCheckoutForm;

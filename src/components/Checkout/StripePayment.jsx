import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { StripeCheckoutForm } from "../../components";
import { Elements } from "@stripe/react-stripe-js";

const StripePayment = ({ cart, orders }) => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/stripe/config`).then(async (res) => {
      const { publishableKey } = await res.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/stripe/create-payment-intent`, {
      method: "POST",
      headers: {},
      body: JSON.stringify({}),
    }).then(async (res) => {
      const { clientSecret } = await res.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <StripeCheckoutForm cart={cart} orders={orders} />
        </Elements>
      )}
    </>
  );
};

export default StripePayment;

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { StripeCheckoutForm } from "../../components";
import { Elements } from "@stripe/react-stripe-js";

const StripePayment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("http://localhost:7000/api/stripe/config").then(async (res) => {
      const { publishableKey } = await res.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:7000/api/stripe/create-payment-intent", {
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
      <h1>React Stripe and the Payment Element</h1>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <StripeCheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default StripePayment;

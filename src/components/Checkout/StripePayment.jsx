import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { StripeCheckoutForm } from "../../components";
import { Elements } from "@stripe/react-stripe-js";

const StripePayment = ({ cart }) => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const LIVE_BASE_URL = "https://genrecords-server.onrender.com/api";
  const LOCAL_BASE_URL = "http://localhost:7000/api";

  useEffect(() => {
    fetch(`${LIVE_BASE_URL}/stripe/config`).then(async (res) => {
      const { publishableKey } = await res.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`${LIVE_BASE_URL}/stripe/create-payment-intent`, {
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
          <StripeCheckoutForm cart={cart} />
        </Elements>
      )}
    </>
  );
};

export default StripePayment;

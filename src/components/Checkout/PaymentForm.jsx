import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#fa755a",
    },
  },
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await fetch("http://localhost:7000/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 1000,
            id,
          }),
        });

        console.log("hellooooo", response);
        if (response.status === 200) {
          console.log("successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button
            type="submit"
            className="block w-[calc(100%-30px)] text-base h-10 my-10 mx-4 bg-accent hover:bg-highlight shadow-lg rounded text-shade-1 hover:text-shade-9 cursor-pointer ease-in-out duration-300">
            PAY
          </button>
        </form>
      ) : (
        <div>
          <h2>You just bought a sweet vinyl.</h2>
        </div>
      )}
    </>
  );
};

export default PaymentForm;

/*
         <form onSubmit={handleSubmit}>
          <fieldset className="block w-[calc(100%-30px)] text-base h-10 my-10 mx-4 bg-shade-8 hover:bg-highlight shadow-lg rounded text-shade-1 hover:text-shade-9 cursor-pointer ease-in-out duration-300">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button
            type="submit"
            className="block w-[calc(100%-30px)] text-base h-10 my-10 mx-4 bg-accent hover:bg-highlight shadow-lg rounded text-shade-1 hover:text-shade-9 cursor-pointer ease-in-out duration-300">
            PAY
          </button>
        </form>
*/

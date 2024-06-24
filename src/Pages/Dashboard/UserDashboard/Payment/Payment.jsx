import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Checkout } from "./Checkout";

export const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  );
};

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY = "pk_test_51LMDe1FaVR1BroVgrMmVLG472IjaIryywSqUjIugKZhMGo4T0Ciqw1DJX1QdUh63u76CTzOM4YACzU6mODSo373j009Xs1VhY2"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () =>{


    return(
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}

export default StripeContainer
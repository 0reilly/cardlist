import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import "./App.css";
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

const CardForm= (props) => {
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  let history = useHistory(); 
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Create PaymentIntent as soon as the page loads
  }, []);


  
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };
  const handleChange = async (event) => {

    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    props.setDisabled(event.empty);
    props.setError(event.error ? event.error.message : "");
  };



  

  const goHome = () => {
    history.push("/");
  }
  const handleForm = () => {
    props.form();
  }
  return (
  <>
      <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
    </>
  );
}

export default CardForm
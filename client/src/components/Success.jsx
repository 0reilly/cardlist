import React , {Component, useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
const Success = () => {
    const {id} = useParams();
    return (
        <>
            <h1>You have successfully onboarded with CardList!</h1>
            <p>Your acctID is {id}</p>
            <p>Now that you have your Stripe Connected AcctID, click below to open the Postman request for creating new CardList orders</p>
                    <a href={"https://app.getpostman.com/run-collection/e84dc45f266ef6e49341"} className="btn btn-link p-0 m-0 d-inline align-baseline">Postman Collection</a>
                
            <p>In production, you'll want your server to send a request to the CoinList endpoint each time a customer clicks on their checkout button.</p>
            <p>Each request body requires information about the order like items, prices, acctID, etc, and returns a url for you to redirect your customer to.</p>
            <p>Contact info for integration help: design0reilly@gmail.com</p>
        </>
    )
    }
export default Success
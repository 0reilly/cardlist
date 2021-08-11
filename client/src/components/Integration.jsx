import React , {Component, useEffect, useState} from 'react';

import { useHistory } from "react-router-dom"
import Onboard from '../apis/Onboard';

const Integration = () => {
    
    let history = useHistory()
    const handleBack = () => {
        history.push(`/`)
    };

    const setupPayouts = async ()=>{
        console.log("stripe onboarding");
        const response = await Onboard.post("/", {});
        if (response.data.url) {
            window.location = response.data.url;
          }
    }
    return (
        <>
                <div className="container text-center">
                    <div class="row mt-2">
                        <div class="col-3"></div>
                        <div class="col-6"><h4 className="">Start using CardList</h4></div>
                        <div class="col-3"><button onClick={(e)=> handleBack(e)} className="btn btn-warning ">Back</button></div>
                    </div>
                    
                    <div class="pb-2">
                        <br></br>
                        <p>We use <b>Stripe</b> to enable your customers to save payment information securely. </p>
                        
                        <p>Just complete a simple Stripe Connect onbaording flow and you'll be ready to use CardList!</p>
                        
                        <button  onClick={setupPayouts} className="btn btn-primary  btn-small">Setup Payouts on Stripe</button>
                        <br></br>
                        <br></br>
                        <p>Once you have your Stripe Connected AcctID, click below to open the Postman request for creating new CardList orders</p>
                        <a href={"https://app.getpostman.com/run-collection/e84dc45f266ef6e49341"} className="btn btn-link p-0 m-0 d-inline align-baseline">Postman Collection</a>
                        <br></br>
                        <br></br>
                        <p>Simply send a request to our server with your customer's order details, redirect them to our checkout page, and we'll let them checkout with a new card or a payment method they've stored during previous purchases on our platform. </p>
                    
                    </div>
                </div>
            <div>
            </div>
        </>
            
        
    )
}

export default Integration
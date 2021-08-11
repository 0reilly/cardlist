import React , {Component, useEffect, useState} from 'react';
import NewOrder from '../apis/NewOrder';

import { useHistory } from "react-router-dom";

const Home = () => {
    let history = useHistory();

    const sampleOrder = async() =>{
        console.log("send request to server and redirect automatically");
        try {
        const response = await NewOrder.post("/", {
                items : [
                    
                    {
                        name: "1/2 of an Oat Milk Latte",
                        price : 250
                    }
                    ],
                subtotal: 250,
                shipping: 0,
                taxes: 0,
                total: 250,
                storename: "Donate a coffee to the developer",
                acctID: "acct_1IkFrCKZrLHZ09xO",
                returnURL : "https://www.cardlist.co",
                successURL : "https://www.cardlist.co"
        });
        console.log(response)
        window.location.replace(response.data.data.redirect);
    }
    catch(err){
        console.log(err);
    }


    }

    const integrationRedirect = async()=>{
        history.push("/integration");
    }

    
    return (
        <>
            <div className="text-center pt-5">
                <h2>CardList 💳</h2>
                <h5>Increase conversion rates and checkout time by letting customers save their card data in Stripe.</h5>
                <p>No extra fee on top of Stripe fees 🎉(FREE)🎉</p>
                <br></br>
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-4">
                            <button  onClick={sampleOrder} className="btn btn-primary  btn-small">Try it out</button>
                            <p>You can buy me a coffee :)</p>
                        </div>
                        <div className="col-4">
                            <button  onClick={integrationRedirect} className="btn btn-primary  btn-small">Register</button>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <p>(The real benefit comes after the first purchase is made on our platform and the card info is saved. I've split the $5 coffee into 2x $2.50 charges so you can checkout a second time and see the full functionality) </p>
                    </div>
                </div>
                
                
                </div>
            <div>
            </div>
        </>
            
        
    )
}

export default Home
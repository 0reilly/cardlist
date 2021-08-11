import React , {useState} from 'react';

import {Switch, Route} from "react-router-dom";
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import Tap from "./routes/Tap";
import Home from "./routes/Home";
import Success from "./routes/OnboardSuccess";
import Integration from "./routes/Integration";
import {Helmet} from "react-helmet";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const App = () => {

    const [promise,setPromise] = useState(() => loadStripe("pk_live_51HX92ADV5bqQz6pNkugJCzdENiJmAW3ghEm9ckAdKKhE7kGF55hASD3QQc12BwEXIXNCifNwzr4IBnkvElOpKVFK00Iecjr8sF"));
    
    return (
        
    <>
        <div className="container">
            <Router>
                <Switch>
                    <Elements stripe= {promise}>
                        <Route exact path="/pay/:id" component={Tap}/>
                        <Route exact path="/integration" component={Integration}/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/success/:id" component={Success}/>
                    </Elements>
                    
                </Switch>
                
            </Router>
        </div>
        
        
    </>
    

    )

}

export default App;
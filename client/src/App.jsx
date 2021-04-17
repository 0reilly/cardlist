import React , {useState} from 'react';

import {Switch, Route} from "react-router-dom";
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import Tap from "./routes/Tap";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const App = () => {

    const [promise,setPromise] = useState(() => loadStripe("pk_test_51HX92ADV5bqQz6pNUHpNfJziKCFf5lOBPO6A30apaEDI0Yb0jvwOmQCcebkay4TIcs2JIsrNxQs9vN8NImlsaevO0030bqBsJQ"));
    
    return (
        
    <div>
        
       
        <div className="container">
            <Router>
                <Switch>
                    <Elements stripe= {promise}>
                        <Route exact path="/pay/:id" component={Tap}/>
                    </Elements>
                    
                </Switch>
                
            </Router>
        </div>
        
        
    </div>
    

    )

}

export default App;
import React from 'react';
import {Switch, Route} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

import Home from './routes/Home';
import AddJob from './routes/AddJob';
import JobDetailPage from "./routes/JobDetailPage";
import PaymentSuccess from "./routes/PaymentSuccess";


const App = () => {

    return (
    <div>
        <RestaurantsContextProvider>
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/add-job" component={AddJob}/>
                    <Route exact path="/restaurants/:id" component={JobDetailPage}/>
                    <Route exact path="/success" component={PaymentSuccess}/>
                </Switch>
            </Router>
        </div>
        </RestaurantsContextProvider>
        
    </div>
    

    )

}

export default App;
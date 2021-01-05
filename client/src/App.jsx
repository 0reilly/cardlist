import React from 'react';
import {Switch, Route} from "react-router-dom";
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { JobsContextProvider } from './context/JobContext';


import Home from './routes/Home';
import AddJob from './routes/AddJob';
import JobDetailPage from "./routes/JobDetailPage";
import PaymentSuccess from "./routes/PaymentSuccess";


const App = () => {

    return (
    <div>
        <JobsContextProvider>
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/add-job" component={AddJob}/>
                    <Route exact path="/jobs/:id" component={JobDetailPage}/>
                    <Route exact path="/success" component={PaymentSuccess}/>
                    
     
                </Switch>
            </Router>
        </div>
        </JobsContextProvider>
        
    </div>
    

    )

}

export default App;
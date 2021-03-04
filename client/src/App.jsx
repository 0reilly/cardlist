import React from 'react';
import {Switch, Route} from "react-router-dom";
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import { JobsContextProvider } from './context/JobContext';


import Home from './routes/Home';
import AddJob from './routes/AddJob';
import JobDetailPage from "./routes/JobDetailPage";
import PaymentSuccess from "./routes/PaymentSuccess";
<<<<<<< HEAD
import NewFeature from "./routes/NewFeature";
=======
import ReactGA from 'react-ga';
>>>>>>> bbe143071de3ce927adaaf2cae0cb7129b384e5d


const App = () => {

    return (
        
    <div>
        
        <JobsContextProvider>
        <div className="container">
            <Router>
           
                <Switch>
<<<<<<< HEAD
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/new-feature" component={NewFeature}/>
=======
                    <Route exact path="/" render={props => { ReactGA.pageview(props.location.pathname); }} component={Home}/>
>>>>>>> bbe143071de3ce927adaaf2cae0cb7129b384e5d
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
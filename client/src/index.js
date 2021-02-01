import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from "./App"
import ReactGA from 'react-ga';

ReactGA.initialize('G-46V2YTXS2C');

ReactDOM.render(<App/>,document.getElementById("root"));

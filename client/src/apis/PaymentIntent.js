import axios from "axios";


export default axios.create({
    
    baseURL: "/create-payment-intent"
});
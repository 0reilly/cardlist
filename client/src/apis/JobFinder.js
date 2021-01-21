import axios from "axios";


export default axios.create({
    
    baseURL: process.env.BASE_URL || "https://productroles.herokuapp.com/api/v1/jobs"
});
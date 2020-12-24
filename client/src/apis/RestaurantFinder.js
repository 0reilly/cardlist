import axios from "axios";

export default axios.create({
    baseURL: "http://productroles.herokuapp.com/api/v1/restaurants"
});
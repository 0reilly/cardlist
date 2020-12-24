import axios from "axios";

export default axios.create({
    baseURL: "https://productroles.herokuapp.com/api/v1/restaurants"
});

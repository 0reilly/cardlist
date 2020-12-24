import axios from "axios";

export default axios.create({
    baseURL: "productroles.herokuapp.com/api/v1/restaurants"
});
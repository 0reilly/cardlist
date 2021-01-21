import axios from "axios";

const url = "";
if(process.env.NODE_ENV === "production"){
    console.log("prod baseurl: "+process.env.BASE_URL)
    url = process.env.BASE_URL;
}
else{
    export default axios.create({
        
        url = "http://localhost:3006/api/v1/jobs";
    });
}
export default axios.create({
       
    baseURL: url
});
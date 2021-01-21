import axios from "axios";

if(process.env.NODE_ENV === "production"){
    console.log("prod baseurl: "+process.env.BASE_URL)
    export default axios.create({
       
        baseURL: process.env.BASE_URL 
    });
}
else{
    export default axios.create({
        
        baseURL: "http://localhost:3006/api/v1/jobs"
    });
}

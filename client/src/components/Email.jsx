import React from 'react'
import { useState } from "react"
import JobFinder from "../apis/JobFinder"

const Email = () => {
    const [email, setEmail] = useState("");
    const [succeeded, setSucceeded] = useState(false);

    const handleSignup = async () => {
        console.log(email)
        try{
            const response = await JobFinder.post("/email", {
                email
            })
            setSucceeded(true);
            console.log("added to email db")
        } catch(err){

        }
    };

    return (
        
         <div class="container-fluid">
             <div class="row justify-content-center"><p className="pl-2 pt-3">Join other product people and get get a weekly email of all new product jobs </p></div>
             <div class="row justify-content-center"><div class="col-xs-8" ><input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        className="form-control"
                        type="text"
                        /></div>
             <button onClick={(e)=> handleSignup(e)} className=" btn btn-danger">Subscribe</button></div>
             
        
             <div className={succeeded ? "pl-4 pt-2" : "hidden"}><p>Subscription confirmed!</p></div>
           </div>
        
        
    )
}

export default Email;
import React from 'react'
import { useState } from "react"
import JobFinder from "../apis/JobFinder"

const Email = () => {
    const [email, setEmail] = useState("");
    

    const handleSignup = async () => {
        console.log(email)
        try{
            const response = await JobFinder.post("/email", {
                email
            })
            
            console.log("added to email db")
        } catch(err){

        }
    };

    return (
        
         <div class="row justify-content-center">
             <div class=""><p>Join other product people and get get a weekly email of all new product jobs </p></div>
             <div class="pl-3"><input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        className="form-control"
                        type="text"
                        /></div>
             <div class="pl-3"><button onClick={(e)=> handleSignup(e)} className="btn btn-danger">Subscribe</button></div>
           </div>
        
        
    )
}

export default Email;

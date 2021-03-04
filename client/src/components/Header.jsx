import React from 'react'
import { useHistory } from "react-router-dom"
const Header = () => {
    let history = useHistory()
    const handleAddJob = () => {
        history.push(`/add-job`)
    };
    const handleNewFeature = () => {
        history.push(`/new-feature`)
    };
    return (
        <>
         <div class="row justify-content-end">
         <div class="col-4 mt-2"><button onClick={(e)=> handleNewFeature(e)} className="btn btn-warning ">Request a new feature</button></div>
         
             <div class="col-4 mt-2 "><h4 className="text-center">Product Hiring</h4></div>
             <div class="col-4 mt-2"><button onClick={(e)=> handleAddJob(e)} className="btn btn-warning ">Post a job</button></div>
           </div>
            
        </>
    )
}

export default Header;

import React from 'react'
import { useHistory } from "react-router-dom"
const Header = () => {
    let history = useHistory()
    const handleAddJob = () => {
        history.push(`/`)
    };
    return (
        <>
         <div class="row justify-content-right">
             <div class="col-4 pl-5"><h1 className="text-center">Hire Product Roles</h1></div>
             <div class="col-2 pt-2 ml-5"><button onClick={(e)=> handleAddJob(e)} className="btn btn-warning ">View All Jobs</button></div>
           </div>
        
            
        </>
    )
}

export default Header;

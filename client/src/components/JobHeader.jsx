import React from 'react'
import { useHistory } from "react-router-dom"
const Header = () => {
    let history = useHistory()
    const handleAddJob = () => {
        history.push(`/`)
    };
    return (
        <>
         <div class="row justify-content-center">
             <div class="m-3"><h4 className="text-center">Hire Product Roles</h4></div>
             <div class="m-3 "><button onClick={(e)=> handleAddJob(e)} className="btn btn-warning ">Back</button></div>
           </div>
        
            
        </>
    )
}
export default Header;
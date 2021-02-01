import React from 'react'
import { useHistory } from "react-router-dom"
const Header = () => {
    let history = useHistory()
    const handleAddJob = () => {
        history.push(`/`)
    };
    return (
        <>
         <div class="row justify-content-end">
             <div class="col-3 mt-2"><h4 className="text-center">Hire Miami Tech Roles</h4></div>
             <div class="col-5 mt-2"><button onClick={(e)=> handleAddJob(e)} className="btn btn-warning ">Back</button></div>
           </div>
            
        </>
    )
}
export default Header;
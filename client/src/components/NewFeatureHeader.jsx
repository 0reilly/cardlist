import React from 'react'
import { useHistory } from "react-router-dom"
const NewFeatureHeader = () => {
    let history = useHistory()
    const handleBack = () => {
        history.push(`/`)
    };
    return (
        <>
         <div class="row justify-content-end">
             <div class="col-3 mt-2"><h4 className="text-center">New Feature Requests</h4></div>
             <div class="col-5 mt-2"><button onClick={(e)=> handleBack(e)} className="btn btn-warning ">Back</button></div>
           </div>
          
            
        </>
    )
}

export default NewFeatureHeader;

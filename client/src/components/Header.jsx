import React from 'react'
import { useHistory } from "react-router-dom"
const Header = () => {
    let history = useHistory()
    const handleAddJob = () => {
        history.push(`/add-job`)
    };
    return (
        <div>
            <h1 className="font-weight-light display-1 text-center">
                Product Roles <button onClick={(e)=> handleAddJob(e)} className="btn btn-warning">Post a job</button></h1>   
        </div>
    )
}

export default Header;

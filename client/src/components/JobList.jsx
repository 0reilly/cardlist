import React, {useContext, useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import JobFinder from "../apis/JobFinder"
import { JobsContext } from '../context/JobContext'


const JobList = (props) => {
    
    const {jobs, setJobs} = useContext(JobsContext)
    let history = useHistory()
    
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response = await JobFinder.get("/");
                setJobs(response.data.data.jobs)
             } catch(err){
     
             }
        }
        fetchData();
        
    },[])
    
    

    const handleApplyRedirect = (e, id, link) => {
        e.stopPropagation()
        window.location.assign(link);
    };

    const handleJobSelect = (id) => {
        history.push(`/jobs/${id}`)
    };

    
    

    return (
        <div className="list-group">
            <h2>Today's Product Jobs</h2>
            <table className="table table-hover table-dark"> 
                <tbody>
                    {jobs && jobs.map(job => {
                        return(
                                    <tr className="p-4"onClick={() => handleJobSelect(job.id)} key={job.id}>
                                        <td className="pl-5 pr-5">{job.name}</td>
                                        <td className="pl-5 pr-5">{job.location}</td>
                                        <td className="pl-5 pr-5">{job.primary_tag}</td>
                                        <td className="pl-5 pr-5"><button onClick={(e) => handleApplyRedirect(e,job.id,job.link)} className="btn btn-danger">Apply</button></td>
                                    </tr>
                        );
                        
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default JobList

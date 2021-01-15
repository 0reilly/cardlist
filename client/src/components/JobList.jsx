import React, {useContext, useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import JobFinder from "../apis/JobFinder"
import { JobsContext } from '../context/JobContext'
import "./App.css";


const JobList = (props) => {
    
    const {jobs, setJobs} = useContext(JobsContext)
    let history = useHistory()
   
    useEffect( () => {
     //window.scrollTo(0, 0)
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
            <h2 class="col-4">Today's Product Jobs</h2><p class="col-4">(click each row to view job description)</p>
            <table className="table"> 
                <tbody>
                    {jobs && jobs.sort((a,b) => a.id < b.id ? 1: -1).map(job => {
                        return(
                                    <tr bgcolor={job.color} className="p-4"onClick={() => handleJobSelect(job.id)} key={job.id}>
                                        <td className="pl-5 pr-5">{job.name}</td>
                                        <td className="pl-5 pr-5">{job.location}</td>
                                        <td className="pl-5 pr-5">{job.primary_tag}</td>
                                        <td className="pl-5 pr-5"><button onClick={(e) => handleApplyRedirect(e,job.id,job.link)} className="btn btn-primary">Apply</button></td>
                                    </tr>
                        );
                        
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default JobList

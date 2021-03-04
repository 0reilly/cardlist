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
     console.log(process.env.NODE_ENV)
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
        <div className="list-group mt-3 ">
            <h5 className="ml-2">Today's Product Jobs</h5><p className="ml-2">(click each row to view job description)</p>
            <table className="table table-condensed"> 
                <tbody>
                    {jobs && jobs.sort((a,b) => a.id < b.id ? 1: -1).map(job => {
                        return(
                            
                                    <tr className={job.color==='#fff9c9' ? "highlight" : "none" } onClick={() => handleJobSelect(job.id)} key={job.id}>
                                        <td >{job.name}</td>
                                        <td >{job.location}</td>
                                        <td >{job.primary_tag}</td>
                                        <td ><button onClick={(e) => handleApplyRedirect(e,job.id,job.link)} className="btn btn-primary btn-sm">Apply</button></td>
                                    </tr>
                        );
                        
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default JobList

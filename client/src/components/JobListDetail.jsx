import React, {useContext, useEffect} from 'react'
import { useHistory ,useParams} from "react-router-dom"
import JobFinder from "../apis/JobFinder"
import { JobsContext } from '../context/JobContext'
import MDEditor from '@uiw/react-md-editor';

const JobListDetail = (props) => {
    const {jobs, setJobs} = useContext(JobsContext)
    const {id} = useParams();
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
        history.push(``)
    };

    return (
        <>
            <div class="flex flex-col">
                <div><h2 class="">Today's Product Jobs</h2></div>
                <div><p class="">(click each row to view/hide job description)</p></div>
            </div>

            <table class="table-auto"> 
                <tbody>
                    {jobs && jobs.sort((a,b) => a.id < b.id ? 1: -1).map(job => {
                        if(job.id === id){
                            return(
                                <> 
                                    <tr bgcolor={job.color} className=""onClick={() => handleJobSelect(job.id)} key={job.id}>
                                        <td class="text-xs">{job.name}</td>
                                        <td class="text-xs">{job.location}</td>
                                        <td class="text-xs">{job.primary_tag}</td>
                                        <td class="text-xs"><button onClick={(e) => handleApplyRedirect(e,job.id,job.link)} className="">Apply</button></td>
                                    </tr>
                                    <tr>
                                        <td colspan="999">
                                            <div className=""><MDEditor.Markdown className="" source={job.description}/>  
                                                <button onClick={(e) => handleApplyRedirect(e,job.id, job.link)} className=" w-50 float">Apply for this position</button>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            );
                        }
                        else{
                            return(
                                <tr bgcolor={job.color} className="p-4"onClick={() => handleJobSelect(job.id)} key={job.id}>
                                    <td class="text-xs">{job.name}</td>
                                    <td class="text-xs">{job.location}</td>
                                    <td class="text-xs">{job.primary_tag}</td>
                                    <td class="text-xs"><button onClick={(e) => handleApplyRedirect(e,job.id,job.link)} className="">Apply</button></td>
                                </tr>   
                            );
                        }
                        
                        
                    })}
                </tbody>
            </table>
           </>
       
    )
}

export default JobListDetail

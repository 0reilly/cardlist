import React, { useContext, useState, useEffect} from 'react';
import JobFinder from "../apis/JobFinder"
import { useHistory } from 'react-router-dom'
import { JobsContext } from '../context/JobContext';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import MDEditor from '@uiw/react-md-editor';


const JobForm = () => {
  
    const [promise,setPromise] = useState(() => loadStripe("pk_test_51HX92ADV5bqQz6pNUHpNfJziKCFf5lOBPO6A30apaEDI0Yb0jvwOmQCcebkay4TIcs2JIsrNxQs9vN8NImlsaevO0030bqBsJQ"));

    const history = useHistory();
    const {addJobs} = useContext(JobsContext);
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [primaryTag, setPrimaryTag] = useState("Primary Tag");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [billing, setBilling] = useState("");
    const [link, setLink] = useState("");
    const [message, setMessage] = useState("");
    const [design, setDesign] = useState({
        showLogo: {
            select: true,
            price: 49
        },
        applicantMatch: {
            select: true,
            price: 0
        },
        autoRenew: {
            select: true,
            price: 0
        },
        highlight: {
            select: false,
            price: 224
        },
        brandColor: {
            select: false,
            color: "#ff4742",
            price: 599
        },
        stickyPostDay: {
            select: false,
            price: 147
        },
        stickyPostWeek: {
            select: false,
            price: 299
        },
        stickyPostMonth: {
            select: false,
            price: 897
        },
        
    });

    
    
    const handleForm = async () => {
   //  e.preventDefault();
        console.log("in form")
        try{
            const response = await JobFinder.post("/", {
                name,
                location,
                primary_tag: primaryTag,
                description,
                link,
            })
            addJobs(response.data.data.job)
            console.log("added to database")
        } catch(err){

        }
    };

    

      

    return (
        <div>
            
            <div className="d-flex flex-row justify-content-center mb-4 pt-5">
            <form action="">
                <div className="p-4">
                    <h4  className="text-center">Let's Start</h4>
                    <div className="pt-2 pb-2">
                        <span className="head">COMPANY NAME</span>
                        <input 
                        value={name}
                        onChange={(e)=>setName(e.target.value)} 
                        type="text" 
                        className="form-control" 
                       />   
                    </div>
                    <div  className="pt-2 pb-2">
                        <span>POSITION</span>
                        <input value={position} onChange={(e)=>setPosition(e.target.value)} className="form-control" type="text" />
                    </div>
                    <div className="pt-2 pb-2">
                        <span>LOCATION</span>
                        <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="form-control"
                        type="text"
                        
                        />
                    </div>
                    <div className="pt-2 pb-2">
                        <span>PRIMARY TAG</span>
                        <select
                        value={primaryTag}
                        onChange={(e) => setPrimaryTag(e.target.value)}
                        className="custom-select my-1 mr-sm-2">
                        <option enabled>Select a primary tag</option>
                        <option value="Product Manager">Product Manager</option>
                        <option value="Technical Product Manager">Technical Product Manager</option>
                        <option value="Associate Product Manager">Associate Product Manager</option>
                        <option value="VP of Product">VP of Product</option>
                        <option value="Product Lead">Product Lead</option>
                        <option value="Product Designer">Product Designer</option>
                        <option value="Product Marketing Manager">Product Marketing Manager</option>
                        <option value="Product Owner">Product Owner</option>
                        <option value="Product Manager Intern">Product Manager Intern</option>
                        </select>
                    </div>
                    <div className="pt-2 pb-2">
                        <span>DESCRIPTION</span>
                        <div className="container">
                        <MDEditor
                            value={description}
                            onChange={setDescription}
                            preview='edit' />
                        </div>
                    </div>
                    <div className="pt-2 pb-2">
                        <span>APPLY URL</span>
                        <input
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="form-control"
                        type="text"
                        />
                    </div>
                    
                    <div className="pt-4">
                    <h4 className="text-center">Finalize Listing</h4>
                    <div className="pt-2 pb-2">
                        <span>COMPANY EMAIL</span>
                        <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        type="text"
                        />
                    </div>
                    <div className="pt-2 pb-2">
                        <span>FULL BILLING DETAILS</span>
                        <textarea
                        value={billing}
                        onChange={(e) => setBilling(e.target.value)}
                        className="form-control"
                        type="text"
                        placehold="e.g. your company's full name and full invoice address, including building, street, city, and country"
                        />
                    </div>
                    <div className="p-4">
                        <Elements  stripe={promise}>
                            <CheckoutForm form={handleForm}/>
                        </Elements>
                        </div>
                    
                    </div>
                    
                    
                    
                     </div>
                </form>
        </div>
        </div>
        
        
    )
}



export default JobForm

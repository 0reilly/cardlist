import React, { useContext, useState, useEffect} from 'react';
import JobFinder from "../apis/JobFinder"
import { useHistory } from 'react-router-dom'
import { JobsContext } from '../context/JobContext';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import MDEditor from '@uiw/react-md-editor';
import "react-colorful/dist/index.css";



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
    const [color, setColor] = useState("#ffffff");
    const [price, setPrice] = useState(4900);
    const [highlight, setHighlight] = useState(false);
    const [addBrand, setAddBrand] = useState(false);

    
    
    
    const handleForm = async () => {
        console.log(color)
        try{
            const response = await JobFinder.post("/", {
                name,
                location,
                primary_tag: primaryTag,
                description,
                link,
                highlight,
                color
            })
            addJobs(response.data.data.job)
            console.log("added to db")
        } catch(err){

        }
    };

    const handleAddon = (e, value) => {
        console.log(value)
        if(value === "none"){
            setPrice(4900)
        }
        else if (value === "highlight") {
            setHighlight(true);
            setPrice(7900)
        }
    }

    return (
        <>
            
            <div className="ml-4 mr-4 mt-4  d-flex flex-row justify-content-center">
            <form action="">
            <div className="card">
                <div class="card-header">
                    <h4  className="text-center">Let's Start</h4>
                </div>
                    <div className="card-body">
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
                        <option value="Product Management">Product Management</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Customer Support">Customer Support</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Design">Design</option>
                        <option value="Full Stack">Front End</option>
                        <option value="Front End">Front End</option>
                        <option value="Back End">Back End</option>
                        <option value="Legal">Legal</option>
                        <option value="Quality Assurance">Quality Assurance</option>
                        </select>
                    </div>
                    <div className="pt-2 pb-2">
                        <span>DESCRIPTION</span>
                        <div className="container">
                        <MDEditor
                            value={description}
                            onChange={setDescription}
                            autoFocus={0}
                            preview="edit"

                            />
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
                    </div>
                    </div>
                    <div className="card mt-5">
                        <div className="card-header">
                            <h4  className="text-center">Design Your Job Post</h4>
                        </div>
                       <div className="card-body">
                       <p><input onChange={(e) => handleAddon(e, "none")} type="radio" name="addon" value="1" id="1" defaultChecked/><label for="1" className="pl-2">Just a basic post. (+$49)</label></p>
                        <p><input onChange={(e) => handleAddon(e, "highlight")} type="radio" name="addon" id="2" value="2"/><label for="2" className="pl-2">Highlight your post in Yellow (+$20)  (2X MORE VIEWS)</label></p>
                        
                       </div>
                    </div>
                    
                        
                   
                    
                

                    
                    
                    
                    
                    <div className="card mt-5 mb-5">
                        <div className="card-header">
                            <h4 className="text-center">Finalize Listing</h4>
                        </div>
                    <div className="card-body">
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
                    <div className="pt-4">
                        <Elements  stripe={promise}>
                            <CheckoutForm price={price} form={handleForm}/>
                        </Elements>
                    </div>
                    </div>
                </div>
                    
                    
                    
                    
            </form>
        </div>
        </>
        
        
    )
}
export default JobForm
import React, { useContext, useState, useEffect} from 'react';
import RestaurantFinder from "../apis/RestaurantFinder"
import { useHistory } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const JobForm = () => {
  
    const [promise,setPromise] = useState(() => loadStripe("pk_test_51HX92ADV5bqQz6pNUHpNfJziKCFf5lOBPO6A30apaEDI0Yb0jvwOmQCcebkay4TIcs2JIsrNxQs9vN8NImlsaevO0030bqBsJQ"));

    const history = useHistory();
    const {addRestaurants} = useContext(RestaurantsContext);
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
            const response = await RestaurantFinder.post("/", {
                name,
                location,
                primary_tag: primaryTag,
                description,
                link,
            })
            addRestaurants(response.data.data.restaurant)
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
                        <option disabled>Select a primary tag</option>
                        <option value="1">Product Manager</option>
                        <option value="2">Product Designer</option>
                        <option value="3">Product Marketing Manager</option>
                        <option value="4">Product Owner</option>
                        </select>
                    </div>
                    <div className="pt-2 pb-2">
                        <span>DESCRIPTION</span>
                        <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        type="text"
                        />
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
                    {/* <div className="pt-4">
                            <button id="checkout-button" role="link"  className="btn btn-primary" >Post your job - $299 </button>
                    </div> */}
                    
                    
                     </div>
                </form>
        </div>
        </div>
        
        
    )
}



export default JobForm

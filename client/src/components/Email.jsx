import React, { useContext, useState } from 'react';
import Tap from "../apis/Tap"
import { CustomerContext } from '../context/CustomerContext';

const Email = (props) => {
    const [email, setEmail] = useState("");
    const {customer, setCustomer} = useContext(CustomerContext);
    
    //console.log(this.props)
    const lookupCustomer = async (e) => {
        e.preventDefault();
        try{
            const response = await Tap.get(`/${email}`)
            setCustomer(response.data.customer.data[0]);
            console.log(customer)
            props.handler()
            
        } catch(err){

        }
    };
    
   
    
    return (
        <div>
          <form onSubmit={lookupCustomer}>
            <input value={email} className="form-control"  onChange={(e)=>setEmail(e.target.value)}  type="text" placeholder="email"></input>
            <button  className="btn btn-primary" type="submit">Continue with Tap</button>
          </form>
          <p>{customer.id}</p>
          <p>{customer.email}</p>
        </div>
      )
}

export default Email

import React, { useContext, useState, useEffect } from 'react';
import Tap from "../apis/Tap"
import { CustomerContext } from '../context/CustomerContext';


const Cards = (props) => {
    const {customer, setCustomer} = useContext(CustomerContext);
    const [paymentMethods, setPaymentMethods] = useState([]);
    
    const getPaymentMethods = async(e) => {
      e.preventDefault();
      try {
        console.log(customer)
        const payment = await Tap.get(`/cards/${customer.id}`); 
        
        setPaymentMethods(payment.data.paymentMethods.data)
        console.log(paymentMethods)
       } catch(err){
        console.log(err)
       }
    }

          
      
    
    const items = []

    for (const [index, value] of paymentMethods.entries()) {
    items.push(<li key={index}>[{value.card.brand}]   {value.card.last4}</li>)
    }

    return (
        <div>
          <h4>Email {customer.email}</h4>
          <h4>Card</h4> 
          <div>{items}</div>
          
        <button className="btn btn-primary" type="button" onClick={getPaymentMethods}>Retrieve Payment Methods</button>
        
        </div>
      )
}

export default Cards

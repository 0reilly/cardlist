import React , {Component, useEffect, useState} from 'react';
import { useParams} from "react-router-dom";
import OrderFinder from '../apis/OrderFinder';
import EmailPoster from '../apis/EmailPoster';
import Cards from '../apis/Cards';
import {
    CardElement,
    useStripe,
    useElements
  } from "@stripe/react-stripe-js";
import CardForm from './CardForm';
import PaymentIntent from '../apis/PaymentIntent';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import StartVerify from '../apis/StartVerify';
import CheckCode from '../apis/CheckCode';
import ReactCodeInput from 'react-verification-code-input';
import OTP from "./OTP";




const Tap = () => {
    const [otp, setOtp] = useState(new Array(6).fill());
    const [phoneRequested, setPhoneRequested] = useState(false);

    const {id} = useParams();
    const [clientSecret, setClientSecret] = useState();
    const [selectedCard, setSelectedCard] = useState();
    const stripe = useStripe();
    const elements = useElements();
    
    //from server response
    const [items, setItems] = useState([]);
    const [acctID, setAcctId] = useState("");
    const [storeName, setStoreName] = useState("");
    const [successURL, setSuccessURL] = useState("");
    const [returnURL, setReturnURL] = useState("");
    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [taxes, setTaxes] = useState(0);
    const [total, setTotal] = useState(0);
    const [phoneError, setPhoneError] = useState(false);
    
    
    //billing fields
    const [name, setName] = useState("");
    const [addressOne, setAddressOne] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    //from customer
    const [phone, setPhone] = useState("");
    const [phoneEntered, setPhoneEntered] = useState(false);
    const [email, setEmail] = useState("");
    const [emailEntered, setEmailEntered] = useState(false);
    const [newCardForm, setNewCardForm] = useState();
   

    //from stripe
    const [cusID, setCusID] = useState();
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [billing, setBilling] = useState({});
    const [billingExists, setBillingExists] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    
    


    const cardStyle = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#32325d"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      };

    useEffect( () => {
        
        const fetchData = async () => {
        
        
        try {
            const response = await OrderFinder.get("/"+id);
            console.log(response.data.data);
            setSucceeded(response.data.data.order[0].paid);
            
            setItems(response.data.data.items)
            setAcctId(response.data.data.order[0].acctid);
            setStoreName(response.data.data.order[0].storename);
            setSubtotal(response.data.data.order[0].subtotal);
            setShipping(response.data.data.order[0].shipping);
            setTaxes(response.data.data.order[0].taxes);
            
            setTotal(response.data.data.order[0].total);
            setSuccessURL(response.data.data.order[0].successurl);
            setReturnURL(response.data.data.order[0].returnurl);
         } catch(err){
           console.log(err)
         }
            
        
       }
       fetchData();

    },[]);

    const setPaid = async () => {
        try {
            const response = await OrderFinder.post("/"+id, {
                paid: true
            });
            setSucceeded(true);
        }
        catch (err){
            console.log(error)
        }
    }
        

    const paymentIntent = async (e) => {
  
        e.preventDefault();
        console.log("creating payment intent")
        try {
            const pi = await PaymentIntent.post("/", {
                
                    amount : total,
                    customer : cusID,
                    account: acctID,
                
            });
            console.log("payment intent created"+JSON.stringify(pi))
            handleSubmit(pi.data.clientSecret);
        }
        catch (err){
            console.log(error)
        }
              
           
      }
      
        const handleSubmit = async (clientSecret) => {
          console.log("confirming payment")
          setProcessing(true);
          const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: (newCardForm ? {
                card : elements.getElement(CardElement) 
              } : selectedCard.id) 
          });
          if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
          } else {
              
            setError(null);
            setProcessing(false);
            setSucceeded(true);
            setPaid();
           
          }
        };
      


    const handleEmailSet = async () => {
        if(email != ""){
            setEmailEntered(true)
        }
        
    };


    const handleEmailPhoneSet = async () => {
        
        try{
            const response = await EmailPoster.post("/check/", {
                email,
                phone
            })
            
            if(!response.data.data.error){
            setCusID(response.data.data.customer.id)
            setBilling(response.data.data);
                if(response.data.data.customer.name != null){
                    //if billing, look up cards
                    try {
                        const cards = await Cards.post("/", {
                            id: response.data.data.customer.id
                        });
                        
                        if(cards.data.data.paymentMethods.data.length > 0){
                            console.log("card form false")
                            setNewCardForm(false)
                            setPaymentMethods(cards.data.data.paymentMethods.data)
                            
                        }
                        else{
                            console.log("card form true ")
                            setNewCardForm(true);
                        }
                        
                    } catch(err){
                    console.log(err)
                    }

                    
                    setBillingExists(true)
                }
            setPhoneEntered(true)
            }
            else{
                setPhoneError(true)
            }
        } catch(err){
            console.log(err)
        }
        
        
    };

    const handleSetBilling = async () => {
        console.log(name)
        try{
            const response = await EmailPoster.post("/billing/", {
                    id: cusID,
                    name,
                    address : {
                        line1 : addressOne,
                        line2 : addressTwo,
                        city,
                        state,
                        postal_code : zip
                    },
                
            })
            
            setBilling(response.data.data)
            setBillingExists(true)
            try {
                const cards = await Cards.post("/", {
                    id: response.data.data.customer.id
                });
                
                if(cards.data.data.paymentMethods.data!= null){
                    setPaymentMethods(cards.data.data.paymentMethods.data)
                }
                else{
                    setNewCardForm(true);
                }
                   
             } catch(err){
               console.log(err)
             }
        } catch(err){

        }
        //load saved cards
        
        
    };

    const editEmail = async () => {
        setCusID("")
        setEmailEntered(false)
        setEmail("")
        setBilling([])
        setBillingExists(false);
        setPaymentMethods([])
    };

    const editBilling = async () => {
        setBillingExists(false);
    };

    const editPhone = async () => {
        setPhoneEntered(false)
        setPhoneRequested(false)
    };


    const cancelEditBilling = async () => {
        setBillingExists(true);
    };

  function isNumeric(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}
function selectPM(paymentMethod){
    setSelectedCard(paymentMethod);
    setDisabled(false)
}

const requestCode = async () => {
    setPhone(phone);
    setPhoneRequested(true)
    setPhoneError(false)
    
    console.log("requesting code")
    console.log("phone: "+phone)
    //setCodeRequested(true);
    try {
        const verify = await StartVerify.post("/", {
            phone
        });
        console.log(verify)
    } catch (error) {
        console.log(error)
    }
}

const verifyCode = async (val) => {
    
    console.log("code: " +val)
   
    //setCodeRequested(true);
    try {
        const verify = await CheckCode.post("/", {
            phone,
            code: val
        });
        console.log(JSON.stringify(verify))
        if(verify.data){
            //setPhoneEntered true
            
            
            handleEmailPhoneSet();

        }
    } catch (error) {
        console.log(error)
    }
}

    return (
        <>
         
        <div className="text-center">
            <h1>{storeName}</h1>
            
        </div>
             
        {succeeded ? 
        <div className={succeeded ? "p-4 justify-content-center result-message" : "p-4 justify-content-center result-message hidden"}>
             
            <div className="row">
                <p>Payment succeeded! Click below to view your order summary.</p>
                <div className="mt-4 text-center"><a href={successURL} className="btn btn-link p-0 m-0 d-inline align-baseline">Back</a></div>
            </div>
        </div>
            : 
               
            <div className="row ">
            <div className="col-sm-12">
              

            {emailEntered ? 
            <>
            <div className="card mt-4 mb-4 ">
                <div className="card-body">
                    
                    <div className="row mt-4">
                        <div className="col-sm-4">Email</div>
                        <div className="col-sm-4"><span>{email}</span></div>
                        <div className="col-sm-2 text-right"><button className="btn btn-link p-0 m-0 d-inline align-baseline"onClick={editEmail}>edit</button></div>
                    </div> 
                    {phoneError ? 
                        <div class="alert alert-danger" role="alert">
                        You entered a phone # that is different from the one you created your account with! Please request a new code with the correct #
                        </div>
                        : null}
                        {phoneEntered ?  
                        <>
                        <div className="row mt-4">
                        <div className="col-sm-4">Phone</div>
                        <div className="col-sm-4"><span>{phone}</span></div>
                        <div className="col-sm-2 text-right"><button onClick={editPhone} className="btn btn-link p-0 m-0 d-inline align-baseline" >edit</button></div>
                        </div> 
                        
                        <div> {billingExists ? 
                        
                            <div className="row mt-4">
                                <div className="col-sm-4">Billing Address</div>
                                <div className="col-sm-4"> 
    
                                    <div className="row"><span>{billing.customer.name}</span></div>
                                    <div className="row"><span>{billing.customer.address.line1}</span></div>
                                    <div className="row"><span>{billing.customer.address.line2}</span></div>
                                    <div className="row"><span>{billing.customer.address.city}</span></div>
                                    <div className="row"><span>{billing.customer.address.state}</span></div>
                                    <div className="row"><span>{billing.customer.address.zip}</span></div>
                                </div>
                                <div className="col-sm-2 text-right"><button onClick={editBilling} className="btn btn-link p-0 m-0 d-inline align-baseline" >edit</button></div>
                                
                            </div>
                            
                            :
                            
                             <div className="row mt-4">
                                 
                                    <div className="col-sm-4">Enter Billing Address</div>
                                    <div className="col-sm-4">
                                        <div className="row mt-2">
                                            <input 
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} 
                                        placeholder="Full Name">
                                            </input></div>
                                        <div className="row mt-2"><input 
                                        value={addressOne}
                                        onChange={(e) => setAddressOne(e.target.value)} 
                                        placeholder="Address Line 1"></input></div>
                                        <div className="row mt-2"><input 
                                        value={addressTwo}
                                        onChange={(e) => setAddressOne(e.target.value)} 
                                        placeholder="Address Line 2"></input></div> 
                                        <div className="row mt-2"><input
                                        value={state}
                                        onChange={(e) => setState(e.target.value)} 
                                        placeholder="City"></input></div> 
                                        <div className="row mt-2"><input 
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)} 
                                        placeholder="State"></input></div> 
                                        <div className="row mt-2"><input 
                                        value={zip}
                                        onChange={(e) => setZip(e.target.value)} 
                                        placeholder="Zip"></input></div> 
                                        <div className="row mt-2"><button onClick={handleSetBilling} className="btn btn-primary  btn-block ">Save Address</button></div>
                                    
                                    </div>
                                    <div>
                                        {billing ? null : (billing.customer.name!=false  ?   <div className="col-sm-2 text-right"><button onClick={cancelEditBilling} className="btn btn-link p-0 m-0 d-inline align-baseline" >cancel</button></div>
                                    : null) }
                                    </div>
                                    
                                
                             </div>
                            }</div>
                            </>
                        : 
                        
                                <>
                                {phoneRequested && !phoneError? 
                                <>
                                <div className="text-center" >
                                <ReactCodeInput 
                                type="number"
                                onComplete={(val) => verifyCode(val)}
                                onChange={(val) => setOtp(val)}
                                values={otp}
                                fields={6}
                                title="Enter Verification Code"
                                />
                                </div>
                                
                                </>
                                
                                :
                                <>
                                <div className="row">
                                    <div className="col">Phone</div>
                                    <div className="col"><PhoneInput
                                        placeholder="Enter phone number"
                                        value={phone}
                                        onChange={setPhone}
                                        defaultCountry="US"
                                        />
                                    </div>
                                
                                <div className="col"><button onClick={requestCode} className="row btn btn-primary" type="submit">
                                
                                Verify Phone to retrieve saved payment data
                                </button></div>
                                </div>
                                </>
                                }
                                
                                
                                </>
                                
                            
                       }
                        

                        
                    
                        
                    </div> 
                </div>    

                    {newCardForm && billingExists ? 
                    <div className="card mt-4 mb-4 ">
                        <div className="card-header text-center ">
                            <h4  className="text-center">Save a New Card</h4>
                            <p>so you don't have to enter it next time!</p>
                        </div>
                        <div className="card-body">
                        
                            <CardForm setError={setError} setDisabled={setDisabled} setClientSecret={setClientSecret}/>
                        
                        {paymentMethods.length > 0 ? <div className="col-sm-2"><button onClick={() => setNewCardForm(false)} className="btn btn-link d-inline align-baseline" >Back to Saved Cards</button></div> : null}
                        </div>
                    </div>
                    
                    : (billingExists && !newCardForm ? 
                
                    <div className="card text-center mt-4 mb-4 ">
                            <div className="card-header">
                                <h4  className="text-center">Saved Cards</h4>
                            </div>
                            <div className="card-body ">
                            {paymentMethods.map(paymentMethod=>{
                                return(
                                    <div onChange={(e) => selectPM(paymentMethod)} className="row ">
                                        <div className="col-xs-3"><input 
                                        type="radio" 
                                        name="addon" 
                                        /></div>
                                        <div className="col"><span>{paymentMethod.card.brand} - {paymentMethod.card.last4}</span></div>
                                    </div>
                                )
                            })}
                             <div className="row mt-2"><button onClick={() => setNewCardForm(true)}className="btn btn-primary">Add a new card</button></div>
                            </div>
                        </div> : null)}
            </>
               :
              
              <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Quick checkout</h5>
                        <p>Enter your email address to log in or sign up.</p>
                        <div className="">
                            
                            <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            type="text" 
                            className="mt-2 mb-2 form-control" 
                            />
                            <button onClick={handleEmailSet} className="mt-2 mb-2 btn btn-primary btn-block">Continue with TapPay</button>   
                        </div>
                    </div>
                   
                </div> 
                }
                
        
                <div className="mt-4 text-nowrap card">
                    <div className="card-header">
                        <h4  className="text-center">Order Details</h4>
                    </div>
                                <ul className="list-group list-group-flush">
                    {items.map(item=>{
                 return(  
                                <li className="list-group-item">
                                    <div className="row">
                                    <div className="col">{item.name}</div> 
                                    <div className="col text-right">${item.price/100}</div>
                                    </div>
                                </li>
                    )
             })}
                     </ul>
                     <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="row">
                                <div className="col">Subtotal</div> 
                                <div className="col text-right">${subtotal/100}</div>
                                </div>
                            </li>
                            {shipping!=0 ? <li className="list-group-item">
                                <div className="row">
                                <div className="col">Shipping</div> 
                                <div className="col text-right">${shipping/100}</div>
                                </div>
                            </li> : null}
                            
                           <li className="list-group-item">
                                <div className="row">
                                <div className="col">Taxes</div> 
                                <div className="col text-right">${taxes/100}</div>
                                </div>
                            </li>
                            
                            <li className="list-group-item">
                                <div className="row">
                                <div className="col">Total</div> 
                                <div className="col text-right">${total/100}</div>
                                </div>
                            </li>
                        </ul>
                        <form id="payment-form" onSubmit={paymentIntent}>
                    <div className={succeeded ? "p-4 row justified-content-center result-message hidden" : "p-4 row justified-content-center result-message" }><button
                        disabled={processing || disabled || succeeded}
                        className="col btn btn-primary"
                    >
                        <span id="button-text">
                        {processing ? (
                            <div className="spinner" id="spinner"></div>
                        ) : (
                            "Pay Now"
                        )} 
                        </span>
                    </button></div>
                    {/* Show any error that happens when processing the payment */}
                    {error && (
                        <div className="card-error" role="alert">
                        {error}
                        </div>
                    )}
                    
                    </form>
                    </div>
                
            </div>

            <div className="mt-4 text-center"><a href={returnURL} className="btn btn-link p-0 m-0 d-inline align-baseline">Back</a></div>
            </div>
         
          </div>
        }
       
            
        </>
    )
}

export default Tap;

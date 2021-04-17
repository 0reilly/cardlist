import React, { useState, useEffect } from "react";


const OTP = (props) => {
  
  
    const handleChange = (element, index) => {
        if(isNaN(element.value)) return false;

        props.setOtp([...props.otp.map((d, idx)=> (idx ===index) ? element.value : d)]);

        //focus next input box 
        if(element.nextSibling){
            element.nextSibling.focus();
        }
    };


  return (
    <div className="row">
            <div className="col text-center">
                <p>Enter the OTP in the field below to verify your phone number</p>

                {
                    props.otp.map((data,index) => {
                        return <input
                        className="otp-field"
                        type="text"
                        name="otp"
                        maxLength="1"
                        key={index}
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        onFocus={e => e.target.select}
                        />
                    })
                }
                <p> OTP Entered - {props.otp.join("")}</p>
                <p>
                    <button onClick={e => props.setOtp([...props.otp.map(v => "")])} className="btn btn-secondary mr-2">Clear</button>
                    <button onClick={props.verifyCode} className="btn btn-primary">Verify OTP</button>
                </p>
            </div>
      
    </div>
  );
};

export default OTP;
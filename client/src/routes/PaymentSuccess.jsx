import React from 'react'
import Header from "../components/Header"
import { useHistory } from 'react-router-dom'

const PaymentSuccess = () => {
    const history = useHistory();
    const goHome = () => {
        history.push(`/`)
    };
    return (
        <div>
            <Header/>
            {/* use params and new table with order details to import and disply information. Send confirmation email with information as well */}
            <h4>Listing complete! Please return to the home page to see your NEW listing!</h4>
            <button className="btn btn-primary" type="submit" onClick={goHome} > Home </button>
        </div>
    )
}

export default PaymentSuccess
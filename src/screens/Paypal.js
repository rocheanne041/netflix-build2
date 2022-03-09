
//client-id :AbP9gxYmCfauVRN5Gd87WdCKBte-nllfKnzjAyQm10SC9m11w6Ue36c-ezBvIatfmdusvSbdMQiNHuEo
//client-id: AdmjDV0KE2jr_t6-8CzPWRGT78tmh3c5BTvucDc8563mpDaOmRVlpRn7A5iuFQEpQlsrtdDWZJUWqbOv
import React, {useEffect, useRef, useState} from 'react';
import { makeStyles } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectPrice } from '../features/PriceSlice';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';


const PayPal = () => {
    const price = useSelector(selectPrice);
    const paypal = useRef();
    const [orderID, setOrderID] = useState(false)
    const [success, setSuccess] = useState(false)
    const [ErrorMessage, setErrorMessage] = useState("")

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Netflix Subscription",
                    amount: {
                        currency_code: "USD",
                        value: price
                    }
                }
            ],
            application_context: {
                shipping_preference: "NO_SHIPPING"
            }
        })
        .then((orderID) => {
            setOrderID(orderID);
            return orderID;
        })
    };

    const onApprove = (data, actions) => {
        return actions.order.capture()
        .then((details) => {
            const { payer } = details;
            setSuccess(true);
        })
    }


    const onError = (data, actions) => {
        setErrorMessage("An error has occurred with the payment")
    }

    useEffect(() => {
        if(success) {
            alert("Payment made!")
        }
    }, [success])

    return (
        <PayPalScriptProvider options = {{"client-id": "AdmjDV0KE2jr_t6-8CzPWRGT78tmh3c5BTvucDc8563mpDaOmRVlpRn7A5iuFQEpQlsrtdDWZJUWqbOv"}}>
            <center><PayPalButtons style={{layout: "vertical"}} createOrder = {createOrder} onApprove = {onApprove}/></center>
        </PayPalScriptProvider>
    )
}

export default PayPal



import React from 'react';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

//provide publishable key
const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div className='w-full px-20'>
           <h2>Add Your Payment Here!!!</h2> 
           <Elements stripe={stripePromise}>

           <Checkout></Checkout>
           </Elements>
        </div>
    );
};

export default Payment;
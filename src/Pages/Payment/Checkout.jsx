import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import './Checkout.css';

const Checkout = ({ price,classPrice }) => {
    console.log(price);
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('');

    const [clientSecret, setClientSecret] = useState('');


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create_payment_intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            toast(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
        }
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            toast(confirmError.message);
        }
        console.log(paymentIntent);
        setProcessing(false)

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            //save payment information to the server
            const payment = {
                name:user?.name,
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                className:classPrice
                
            }
            axiosSecure.post('/payments',payment)
            .then(res=>{
               console.log(res.data);
               if(res.data.insertedId){
                Swal.fire(
                    'Success!',
                    'Payment Data is added in Database!!!.',
                    'success'
                  )
               } 
            })


        }
    }
    return (

        <>
            <form className='w-2/3 m-8' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm bg-yellow-500 mt-10' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {transactionId && toast(`transaction complete with transaction id:${transactionId}`)}
                <ToastContainer></ToastContainer>
        </>
    );
};

export default Checkout;
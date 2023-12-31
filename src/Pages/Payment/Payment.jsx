import React, { useContext, useEffect, useState } from 'react';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import useClassFilter from '../../hook/useClassFilter';
import useClasses from '../../hook/useClasses';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const { id } = useParams();
    const [classPrice, setClassPrice] = useState({})
    const [allClass, setAllClass] = useState([])
    const{user}=useContext(AuthContext);
    useEffect(() => {
        fetch(`https://assignment-12-harmony-class-server.vercel.app/paymentClasses?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAllClass(data))
    }, [])


    useEffect(() => {
        const findClasses = allClass.find(singleClass => singleClass._id === id);
        setClassPrice(findClasses)
    }, [allClass, id]);
    console.log(classPrice);
    const price = classPrice?.price;





    return (
        <div className='w-full px-20'>
            <h2>Add Your Payment Here!!!</h2>
            <Elements stripe={stripePromise}>
                <Checkout classPrice={classPrice} price={price} ></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;

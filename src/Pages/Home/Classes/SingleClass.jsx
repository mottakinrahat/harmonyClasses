import React from 'react';
import {FaPlusSquare ,FaUser,FaUniversalAccess} from "react-icons/fa";
import { motion } from "framer-motion"

const SingleClass = ({ classItem }) => {
    const { image, name, enrolled_students, activities, _id } = classItem;
    return (
            <div className="card w-96  mx-auto shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-blue-900">
                        {name}

                    </h2>
                    <p className='font-bold flex gap-2 items-center'><FaUser></FaUser> <span>Enrolled Student:</span>{enrolled_students}</p>
                    <p><span className='font-bold flex gap-2 items-center'><FaUniversalAccess></FaUniversalAccess>Activities:</span>{activities}</p>
                   
                </div>
            </div>
    );
};

export default SingleClass;
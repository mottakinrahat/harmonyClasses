import React from 'react';
import {FaPlusSquare ,FaUser,FaUniversalAccess} from "react-icons/fa";
import { motion } from "framer-motion"

const SingleClass = ({ classItem }) => {
    const { image, name, enrolled_students, activities, _id } = classItem;
    return (
        <motion.div
        initial={{opacity:0 ,scale:0,x:200}}
        whileInView={{opacity:1 ,scale:1,x:0}}
        transition={{duration:0.2}}
        viewport={{once:true}}
        >
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-blue-900">
                        {name}

                    </h2>
                    <p className='font-bold flex items-center'><FaUser></FaUser> <span>Enrolled Student:</span>{enrolled_students}</p>
                    <p><span className='font-bold flex items-center'><FaUniversalAccess></FaUniversalAccess>Activities:</span>{activities}</p>
                   
                </div>
            </div>
        </motion.div>
    );
};

export default SingleClass;
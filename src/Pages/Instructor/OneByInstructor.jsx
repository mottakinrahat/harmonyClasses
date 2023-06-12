import React from 'react';
import { FaRegEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import { motion } from "framer-motion"

const OneByInstructor = ({ instructor }) => {
    const { image, name, contact, classes } = instructor;
    return (
        <motion.div
        initial={{opacity:0 ,scale:0,x:200}}
        whileInView={{opacity:1 ,scale:1,x:0}}
        transition={{duration:0.2}}
       // viewport={{once:true}}
           >
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-60' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-blue-900">{name}</h2>
                    <p><div className='flex'><span className='font-semibold flex items-center'><FaRegEnvelope></FaRegEnvelope>Email:</span> {contact.email}</div></p>
                    <p><div className='flex'><span className='font-semibold flex items-center '><FaPhoneSquareAlt></FaPhoneSquareAlt>Phone:</span> {contact.phone}</div></p>
                    <p><span className='font-semibold'>Number of Classes:</span> {classes.length} [ {classes[0]},{classes[1]} ] </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">view details</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default OneByInstructor;
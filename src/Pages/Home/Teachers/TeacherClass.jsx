import React from 'react';
import Title from '../../../Component/Title/Title';
import { FaMailBulk,FaPhoneSquareAlt,FaMinusSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const TeacherClass = ({ teacher}) => {
    const{image,name,contact,classes}=teacher;
    return (
     
            
            <div>
                <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-blue-800">{name}</h2>
                        <p><span className='font-semibold flex gap-2 items-center'><FaMinusSquare></FaMinusSquare>Expertise:</span> {classes[0]} , {classes[1]}</p>
                        <p><span className='font-semibold flex gap-2 items-center'> <FaMailBulk></FaMailBulk> Email:</span> {contact.email}</p>
                        <p><span className='font-semibold flex gap-2 items-center'><FaPhoneSquareAlt></FaPhoneSquareAlt>Number:</span> {contact.phone}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-warning">See details</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default TeacherClass;
import React from 'react';
import Title from '../../../Component/Title/Title';

const TeacherClass = ({ teacher}) => {
    console.log(teacher);
    const{image,name,contact,classes}=teacher;
    return (
        <div>
            
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p><span className='font-semibold'>Expertise:</span> {classes[0]} , {classes[1]}</p>
                        <p><span className='font-semibold'>Email:</span> {contact.email}</p>
                        <p><span className='font-semibold'>Number:</span> {contact.phone}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TeacherClass;
import React from 'react';

const OneByInstructor = ({ instructor }) => {
    const { image, name, contact, classes } = instructor;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img  className='h-60' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><span className='font-semibold'>Email:</span> {contact.email}</p>
                    <p><span className='font-semibold'>Phone:</span> {contact.phone}</p>
                    <p><span className='font-semibold'>Number of Classes:</span> {classes.length} [ {classes[0]},{classes[1]} ] </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneByInstructor;
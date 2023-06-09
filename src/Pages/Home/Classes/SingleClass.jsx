import React from 'react';

const SingleClass = ({ classItem }) => {
    const { image, name, enrolled_students, activities, _id } = classItem;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}

                    </h2>
                    <p><span>Enrolled Student:</span>{enrolled_students}</p>
                    <p><span>Activities:</span>{activities}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default SingleClass;
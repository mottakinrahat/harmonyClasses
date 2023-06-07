import React from 'react';

const SingleClass = ({classItem}) => {
    console.log(classItem);
    const{image,name,enrolled_students,activities}=classItem;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {name}
                      
                    </h2>
                    <p><span>Enrolled Student:</span>{enrolled_students}</p>
                    <p><span>Enrolled Student:</span>{enrolled_students}</p>
                    <div>
                        {
                            activities.map(activity=><p>{activity}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;
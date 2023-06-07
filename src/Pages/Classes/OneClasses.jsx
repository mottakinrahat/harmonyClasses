import React from 'react';

const OneClasses = ({ classItem }) => {
    const { image, name, enrolled_students, activities, _id } = classItem;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='h-60' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}

                    </h2>
                    <p><span>Enrolled Student:</span>{enrolled_students}</p>
                    <div className='border text-center rounded p-2'>
                        {
                            activities.map(activity => <p key={_id}>{activity}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneClasses;
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useClasses from '../../hook/useClasses';

const OneClasses = ({ classItem }) => {
    const { _id, image, name, enrolled_students, activities, available_sits, instructor_name } = classItem;
    const filledSits = available_sits === 0 ? 'card card-side bg-red-500 shadow-xl' : 'card card-side bg-base-100 shadow-xl';
    const [, refetch] = useClasses();
    const { user } = useContext(AuthContext)
    const handleAddClass = classItem => {
        if (user && user.email) {
            const classItems = { classId: _id, image, name, enrolled_students, activities, available_sits, instructor: instructor_name, email: user.email }
            fetch('http://localhost:5000/addClasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItems)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
    }
    return (
        <div>
            <div className={`card card-side bg-base-100 shadow-xl  ${filledSits}`}>
                <figure><img className='h-60' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}

                    </h2>
                    <p><span>Enrolled Student:</span> {enrolled_students}</p>
                    <p><span>Available Sits:</span> {available_sits}</p>
                    <p><span>Instructor:</span> {instructor_name}</p>
                    <p><span>Activities:</span> {activities}</p>
                   
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddClass(classItem)} className="btn btn-warning font-semibold">Add Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneClasses;
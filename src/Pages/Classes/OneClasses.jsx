import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useClasses from '../../hook/useClasses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser, FaUserPlus, FaUserMinus, FaUserTie, FaUserNinja } from "react-icons/fa";
import axios from 'axios';
import useOneClass from '../../hook/useOneClass';
import { Navigate, useNavigate } from 'react-router-dom';

const OneClasses = ({ classItem, refetch }) => {
    const navigate = useNavigate();
    const { _id, image, name, enrolled_students, activities, available_sits, instructor_name } = classItem;
    const filledSits = available_sits === 0 ? 'card card-side bg-red-500 shadow-xl' : 'card card-side bg-base-100 shadow-xl';
    const { user } = useContext(AuthContext)

    const handleAddClass = () => {
        if (user && user.email) {

            const classItems = { classId: _id, image, name, enrolled_students, activities, available_sits, instructor: instructor_name, email: user.email }
            axios.patch('http://localhost:5000/addClasses', classItems)
                .then(response => {
                    console.log(response);
                    if (response.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            navigate('/login')
        }
        if (available_sits === 0) {
            toast('the class is full')
            return;
        }
    }
    return (
        <div>
            <div className={`card card-side bg-base-100 shadow-xl  ${filledSits}`}>
                <figure><img className='h-60' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-blue-900">
                        {name}
                    </h2>
                    <p><div className='flex'><span className='font-bold flex items-center'><FaUserPlus /> Enrolled Student:</span> {enrolled_students}</div></p>
                    <p><div className='flex'><span className='font-bold flex items-center'><FaUserMinus /> Available Sits:</span> {available_sits}</div></p>
                    <p><div className='flex'><span className='font-bold flex items-center'><FaUserTie /> Instructor:</span> {instructor_name}</div></p>
                    <p><span className='font-bold flex items-center'><FaUserNinja></FaUserNinja>Activities:</span> {activities}</p>

                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddClass(classItem)} className="btn btn-warning font-semibold">Add Class</button>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default OneClasses;
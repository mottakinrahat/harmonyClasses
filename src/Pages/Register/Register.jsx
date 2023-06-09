import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.password !== data.confirm_password) {
            toast.error('Password did not match');
            return;
        }

        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserProfile(data.name, data.image_url)
                    .then(() => {
                        const saveUser={ name:data.name,email:data.email,role:'student'}
                        fetch('http://localhost:5000/users',{
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'user created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })

            })
            .catch(err => {
                console.log(err.message);
            })
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-10">
                <h2 className="text-2xl text-center font-semibold mb-6">Please Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="Name" className="block text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("name", { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Enter your Name"
                        />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z]).{8}/
                            })}

                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                        {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters</span>}
                        {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be within 20 characters</span>}
                        {errors.password?.type === 'pattern' && <span className='text-red-600'>Add a valid password</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("confirm_password", { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Confirm your password"
                        />
                        {errors.confirm_password && <span>This field is required</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="text"
                            {...register("image_url", { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="add photo URL"
                        />
                        {errors.image_url && <span>This field is required</span>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className='mt-4' >Already have an account?<Link to='/login' className='text-blue-500'>Log in</Link></p>
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
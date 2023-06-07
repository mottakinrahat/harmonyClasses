import React from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

const Register = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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
                           {...register("name")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Enter your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("confirm_password")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="text"
                            {...register("image_url")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            placeholder="add photo URL"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className='mt-4' >Already have an account?<Link to='/login' className='text-blue-500'>Log in</Link></p>
            </div>
        </div>
    );
};

export default Register;
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ADDaClass = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = data => {
    const classData = {
      ...data,
      status: "pending",
      instructor_name: user.displayName,
      email: user.email,
      enrolled_students:parseInt(20-data.available_sits),
      available_sits: parseInt(data.available_sits),
      price: parseInt(data.price)
    };
    console.log(classData);
    fetch('http://localhost:5000/classes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(classData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Class added successfully',
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  };

  return (
    <div className="flex justify-center items-center w-full max-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-10">
        <h2 className="text-2xl text-center font-semibold mb-6">Add a Class</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Class Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter class name"
            />
            {errors.name && <p className="text-red-500">Class name is required</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
              Class Image
            </label>
            <input
              type="text"
              id="image"
              placeholder='Add image'
              {...register("image")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="instructor_name" className="block text-gray-700 font-medium mb-2">
              Instructor Name
            </label>
            <input
              type="text"
              id="instructor_name"
              value={user.displayName}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="instructor_email" className="block text-gray-700 font-medium mb-2">
              Instructor Email
            </label>
            <input
              type="email"
              id="instructor_email"
              value={user.email}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="available_sits" className="block text-gray-700 font-medium mb-2">
              Available Seats
            </label>
            <input
              type="number"
              id="available_sits"
              {...register("available_sits", { min: 0 })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter available seats"
            />
            {errors.available_sits && <p className="text-red-500">Please enter a valid number of seats</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price", { min: 0 })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter price"
            />
            {errors.price && <p className="text-red-500">Please enter a valid price</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="activities" className="block text-gray-700 font-medium mb-2">
              Activities
            </label>
            <input
              type="text"
              id="activities"
              {...register("activities")}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter activities"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ADDaClass;

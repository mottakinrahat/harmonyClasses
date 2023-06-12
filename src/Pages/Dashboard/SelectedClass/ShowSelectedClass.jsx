import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ShowSelectedClass = ({ addClass,refetch }) => {
    const { _id, image, name, enrolled_students, activities, available_sits, instructor, price } = addClass;

    const handleDelete = (items) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-harmony-class-server.vercel.app/oneClass/${items._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td>
                {instructor}
                <br />

            </td>
            <td> ${price}</td>
            <td>
                <button onClick={() => handleDelete(addClass)} className="btn btn-ghost bg-yellow-500 btn-xs mx-2">delete</button>
               <Link to={`/dashboard/selectedClass/payment/${_id}`}> <button className="btn btn-ghost bg-yellow-500 btn-xs">payment</button></Link>
            </td>
        </tr>
    );
};

export default ShowSelectedClass;

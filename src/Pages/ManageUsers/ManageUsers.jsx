import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('https://assignment-12-harmony-class-server.vercel.app/users')
    return res.json();
  });

  const [disabledButtons, setDisabledButtons] = useState([]);

  const handleAdmin = (user) => {
    fetch(`https://assignment-12-harmony-class-server.vercel.app/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(
            'Success!',
            `${user.name} is admin now!`,
            'success'
          );
          setDisabledButtons(prev => [...prev, user._id]);
        }
      });
  };

  const handleInstructor = (user) => {
    fetch(`https://assignment-12-harmony-class-server.vercel.app/users/instructor/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire(
            'Success!',
            `${user.name} is instructor now!`,
            'success'
          );
          setDisabledButtons(prev => [...prev, user._id]);
        }
      });
  };

  return (
    <div>
      <h2 className='text-3xl font-semibold'>My users:{users.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleAdmin(user)}
                    disabled={disabledButtons.includes(user._id)}
                    className="btn btn-ghost bg-yellow-500 btn-xs mx-2"
                  >
                    Make Admin
                  </button>
                  <button
                    onClick={() => handleInstructor(user)}
                    disabled={disabledButtons.includes(user._id)}
                    className="btn btn-ghost bg-yellow-500 btn-xs"
                  >
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

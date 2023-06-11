import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { Link } from 'react-router-dom';


const ShowManageAd = ({ adminAdData, index, refetch }) => {
    const { image, instructor_name, name, price, email, available_sits, _id } = adminAdData;
  

    const [showModal, setShowModal] = useState(false);
  
    const[classId,setClassId]=useState('');


    const handleApprove = (adminAdData) => {
        fetch(`http://localhost:5000/users/approved/${adminAdData._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    refetch();
                    Swal.fire(
                        'Success!',
                        'status is approved successfully',
                        'success'
                    );
                }
            });
    }
    const handleDenied = (adminAdData) => {
        fetch(`http://localhost:5000/users/denied/${adminAdData.adminAdData._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    refetch();
                    Swal.fire(
                        'Success!',
                        'status is denied successfully',
                        'success'
                    );
                }
            });
    }

    const handleSendFeedback = (event,adminAdData) => {
        console.log(adminAdData);
        event.preventDefault();
        const form=event.target;
        const feedbackData=form.feedback.value;
        fetch(`http://localhost:5000/users/feedback/${classId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ feedbackData }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    refetch();
                    Swal.fire(
                        'Success!',
                        'feedback is added successfully',
                        'success'
                    );
                }
            });
        
        
    }
    const feedbackModal=(adminAdData)=>{
        setShowModal(true);
        setClassId(adminAdData._id);
      

    }
console.log(classId);

    return (
        <tr>
            <th>
                <label>
                    {index}
                </label>
            </th>
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
                {instructor_name}
                <br />
            </td>
            <td>{email}</td>
            <td>{available_sits}</td>
            <td> $ {price}</td>
            <th>
                <button onClick={() => handleApprove(adminAdData)} className="btn btn-ghost btn-xs mx-2 bg-yellow-500">Approved</button>
                <button onClick={() => handleDenied({ adminAdData })} className="btn btn-ghost btn-xs  mx-2 bg-yellow-500">Denied</button>
                {adminAdData.status === "denied" && (
                  <label onClick={()=>feedbackModal(adminAdData)} className="btn btn-ghost btn-xs mx-2 bg-yellow-500" htmlFor="my_modal_6" >Feedback</label>
                )}
                {showModal && (
                    <>
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h2 className='text-center mb-4'>Add your Feedback here</h2>
                              <form onSubmit={handleSendFeedback}>
                              <input className='border-2 w-80 h-20' type="text" name="feedback" id="" />
                                <div className="modal-action">
                                    <button htmlFor="my_modal_6" type='submit' className="btn btn-warning">add feedback!</button>
                                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                                </div>
                              </form>
                            </div>
                        </div>
                    </>
                )}


            </th>
        </tr>
    );
};

export default ShowManageAd;
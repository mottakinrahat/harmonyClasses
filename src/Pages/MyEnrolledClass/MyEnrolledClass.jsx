import React, { useContext, useEffect, useState } from 'react';
import Title from '../../Component/Title/Title'
import ShowEnrolledData from './ShowEnrolledData';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const MyEnrolledClass = () => {
    const[enrolled,setEnrolled]=useState([])
    const{user}=useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/payment?email=${user.email}`)
            .then(res => res.json())
            .then(data => setEnrolled(data))
    }, [])
console.log(enrolled);
    return (
        <div>
            <Title title={'My Enrolled Classes'}></Title>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class Name</th>
        <th>Students Name</th>
        <th>students Email</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        enrolled.map((enroll,index)=>(
        <ShowEnrolledData key={enroll.className?._id} enroll={enroll} index={index+1}></ShowEnrolledData>))
      }
  
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyEnrolledClass;
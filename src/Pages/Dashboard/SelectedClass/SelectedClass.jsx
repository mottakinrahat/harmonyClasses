
import ShowSelectedClass from './ShowSelectedClass';
import useClasses from '../../../hook/useClasses';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SelectedClass = () => {
  const[userClass,setUserClass]=useState([])
  const{user}=useContext(AuthContext);
  const[,refetch]=useClasses();
  useEffect(()=>{
    fetch(`https://assignment-12-harmony-class-server.vercel.app/paymentClasses?email=${user?.email}`)
    .then(res=>res.json())
    .then(data=>setUserClass(data))
  },[user])
 
 console.log(userClass);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className='bg-yellow-500 text-white'>
            <tr>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userClass.map((addClass, index) => (
      
              <ShowSelectedClass key={addClass._id} addClass={addClass} refetch={refetch} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;

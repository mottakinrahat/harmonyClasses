
import ShowSelectedClass from './ShowSelectedClass';
import useClasses from '../../../hook/useClasses';
import { useEffect, useState } from 'react';

const SelectedClass = () => {
  const[allClass,setAllClass]=useState([])
  const[,refetch]=useClasses();
  useEffect(()=>{
    fetch('http://localhost:5000/classes')
    .then(res=>res.json())
    .then(data=>setAllClass(data))
  },[])


  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className='bg-yellow-500 text-white'>
            <tr>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allClass.map((addClass, index) => (
      
              <ShowSelectedClass key={addClass._id} addClass={addClass} refetch={refetch} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;

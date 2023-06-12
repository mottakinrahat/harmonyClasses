import React, { useEffect, useState } from 'react';
import SingleClass from './SingleClass';
import Title from '../../../Component/Title/Title';

const Classes = () => {
   
    const [classData,setClassData] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then(data=>setClassData(data))
    },[])
    return (
     <div className='mt-10'>
        <Title  title={'Our Popular Classes'} desc={'We have so many popular classes'}></Title>
           <div className='grid  md:grid-cols-3 justify-center items-center gap-2'>
            {
               classData.slice(0,6).map(classItem=><SingleClass key={classItem._id} classItem={classItem}></SingleClass>)
            }
        </div>
     </div>
    );
};

export default Classes;
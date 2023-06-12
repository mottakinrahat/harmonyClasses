import React, { useEffect, useState } from 'react';
import TeacherClass from './TeacherClass';
import Title from '../../../Component/Title/Title';

const Teachers = () => {
    const [teachersData,setTeachersData] =useState([])
    useEffect(()=>{
        fetch('https://assignment-12-harmony-class-server.vercel.app/teachers')
        .then(res=>res.json())
        .then(data=>setTeachersData(data))
    },[])
    return (
        <div className='mt-10'>
            <Title title={'Our Teachers'} desc={'Our genius music teachers'}></Title>
              <div className='grid md:grid-cols-3 justify-center items-center gap-2'>
            {
             teachersData.slice(0,6).map(teacher=><TeacherClass key={teacher._id} teacher={teacher}></TeacherClass>)
            }
        </div>
        </div>
    );
};

export default Teachers;
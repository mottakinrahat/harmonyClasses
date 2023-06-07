import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OneByInstructor from './OneByInstructor';

const Instructor = () => {
    const instructorsData=useLoaderData();
    //const{image,name,contact,classes}=teacher;
    const [instructor,setInstructor]=useState(instructorsData);
    console.log(instructor);
    return (
        <div className='grid md:grid-cols-2 justify-between items-center gap-8 px-20'>
          {
          instructorsData.map(instructor=><OneByInstructor key={instructor._id} instructor={instructor}></OneByInstructor>)
          }
        </div>
    );
};

export default Instructor;
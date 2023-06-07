import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OneClasses from './OneClasses';

const MusicClasses = () => {
    const classesData=useLoaderData()
    const [classes,setClasses]=useState(classesData);
    console.log(classes);
    return (
        <div className='grid md:grid-cols-2 justify-between items-center gap-8 px-20'>
          {
         classes.map(classItem=><OneClasses key={classItem._id} classItem={classItem}></OneClasses>)
          }
        </div>
    );
};

export default MusicClasses;
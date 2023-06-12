import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OneClasses from './OneClasses';
import axios from 'axios';
import useClasses from '../../hook/useClasses';
import useClassFilter from '../../hook/useClassFilter';

const MusicClasses = () => {
  const [classes,setClasses]=useState([]);
 const [allClasses,refetch]=useClassFilter();
    return (
        <div className='grid md:grid-cols-2 justify-between items-center gap-8 px-20'>
          {
        allClasses.map(classItem=><OneClasses key={classItem._id} refetch={refetch}  classItem={classItem}></OneClasses>)
          }
        </div>
    );
};

export default MusicClasses;
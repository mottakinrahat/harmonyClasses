import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OneClasses from './OneClasses';
import axios from 'axios';

const MusicClasses = () => {
  const [classes,setClasses]=useState([]);
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=async()=>{
    const res =await axios.get('http://localhost:5000/classes')
    setClasses(res.data)
  }
    return (
        <div className='grid md:grid-cols-2 justify-between items-center gap-8 px-20'>
          {
         classes.map(classItem=><OneClasses key={classItem._id} classItem={classItem}></OneClasses>)
          }
        </div>
    );
};

export default MusicClasses;
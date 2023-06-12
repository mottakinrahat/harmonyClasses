import React, { useState, useEffect } from 'react';
import OneByInstructor from './OneByInstructor';
import axios from 'axios';

const Instructor = () => {
  const [instructorsData, setInstructorsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://assignment-12-harmony-class-server.vercel.app/teachers');
      setInstructorsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid md:grid-cols-2 justify-between items-center gap-8 px-20">
      {instructorsData.map((instructor) => (
        <OneByInstructor key={instructor._id} instructor={instructor} />
      ))}
    </div>
  );
};

export default Instructor;

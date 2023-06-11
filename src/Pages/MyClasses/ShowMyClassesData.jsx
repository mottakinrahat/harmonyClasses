import React from 'react';

const ShowMyClassesData = ({ addData,index }) => {
    console.log(addData);
    return (
  
            <tr>
                <th>{index}</th>
                <td>{addData.name}</td>
                <td>{addData.instructor_name}</td>
                <td>{addData.status}</td>
                
                <td>{addData.feedback}</td>
            </tr>
       
    );
};

export default ShowMyClassesData;
import React from 'react';

const ShowMyClassesData = ({ addData,index }) => {
    console.log(addData);
    return (
  
            <tr>
                <th>{index}</th>
                <td>{addData.name}</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
            </tr>
       
    );
};

export default ShowMyClassesData;
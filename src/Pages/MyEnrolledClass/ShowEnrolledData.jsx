import React from 'react';

const ShowEnrolledData = ({enroll,index}) => {
    const{className,name,email}=enroll;
    console.log();

    return (
     
            <tr>
                <th>{index}</th>
                <td>{className?.name}</td>
                <td>{name}</td>
                <td>{email}</td>
            </tr>
      
    );
};

export default ShowEnrolledData;
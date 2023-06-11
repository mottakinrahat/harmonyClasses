import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ShowMyClassesData from './ShowMyClassesData';

const MyClasses = () => {
    const [addedData, setAddedData] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user.email);
    const url = `http://localhost:5000/nextClasses?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAddedData(data);
            });
    }, [url]);

    console.log(addedData);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addedData.map((addData, index) => (
                            <ShowMyClassesData key={addData._id} addData={addData} index={index + 1} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;

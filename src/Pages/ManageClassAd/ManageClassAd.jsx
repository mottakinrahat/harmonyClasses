import React, { useContext, useEffect, useState } from 'react';
import ShowManageAd from './ShowManageAd';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ManageClassAd = () => {
const{user}=useContext(AuthContext);
    const {refetch, data: adminAdd = [] } = useQuery({
        queryKey: ['classes', user?.email],
queryFn: async () => {
    const response = await fetch('http://localhost:5000/classes')
    return response.json();
},
})

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Class name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
      {adminAdd.map((adminAdData, index) => (
        <ShowManageAd key={adminAdData._id} adminAdData={adminAdData} refetch={refetch} index={index+1} />
      ))}
                 </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClassAd;
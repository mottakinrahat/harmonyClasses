import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useUser = () => {
    const {user} = useContext(AuthContext);
    const {refetch, data: userData = [] } = useQuery({
        queryKey: ['oneClass', user?.email],
queryFn: async () => {
    const response = await fetch('http://localhost:5000/users')
    return response.json();
},
})
    return [userData,refetch]
};
   


export default useUser;
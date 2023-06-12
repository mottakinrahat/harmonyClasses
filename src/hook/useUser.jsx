import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useUser = () => {
    const {user} = useContext(AuthContext);
    const {refetch, data: userData = [] } = useQuery({
        queryKey: ['oneClass', user?.email],
queryFn: async () => {
    const response = await fetch('https://assignment-12-harmony-class-server.vercel.app/users')
    return response.json();
},
})
    return [userData,refetch]
};
   


export default useUser;
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useClassFilter = () => {
    const {user} = useContext(AuthContext);
    const {refetch, data: allClasses = [] } = useQuery({
        queryKey: ['classes', user?.email],
queryFn: async () => {
    const response = await fetch('https://assignment-12-harmony-class-server.vercel.app/classes')
    return response.json();
},
})
    return [allClasses,refetch]
};
   


export default useClassFilter;
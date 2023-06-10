import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useClassFilter = () => {
    const {user} = useContext(AuthContext);
    const {refetch, data: allClasses = [] } = useQuery({
        queryKey: ['classes', user?.email],
queryFn: async () => {
    const response = await fetch('http://localhost:5000/classes')
    return response.json();
},
})
    return [allClasses,refetch]
};
   


export default useClassFilter;
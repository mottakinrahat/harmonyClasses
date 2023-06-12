import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useOneClass = () => {
    const {user} = useContext(AuthContext);
    const {refetch, data: oneClasses = [] } = useQuery({
        queryKey: ['addClasses', user?.email],
queryFn: async () => {
    const response = await fetch('http://localhost:5000/addClasses')
    return response.json();
},
})
    return [oneClasses,refetch]
};
   


export default useOneClass;
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useClasses = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: oneClasses = [] } = useQuery({
        queryKey: ['oneClass', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/oneClass?email=${user?.email}`)
            return response.json();
        },
    })
    return [oneClasses,refetch]
}

export default useClasses;
import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useClasses = () => {
    const { user } = useContext(AuthContext);
    const { isLoading, refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/addClasses?email=${user?.email}`)
            return response.json();
        },
    })
    return [classes, isLoading,refetch]
}

export default useClasses;
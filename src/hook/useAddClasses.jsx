import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';

const useAddClasses = () => {
    const { user } = useContext(AuthContext);
    const { isLoading, refetch, data: addClasses = [] } = useQuery({
        queryKey: ['addClasses', user?.email],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/addClasses');
            return res.data; // Access the response data directly
        },
    });
    return [addClasses, isLoading, refetch];
}

export default useAddClasses;

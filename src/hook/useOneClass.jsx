import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../AuthProvider/AuthProvider';

const useOneClass = () => {
    const {user} = useContext(AuthContext);
    const {data: oneClasses = [],refetch  } = useQuery({
        queryKey: ['addClasses', user?.email],
queryFn: async () => {
    const response = await fetch('https://assignment-12-harmony-class-server.vercel.app/addClasses')
    return response.json();
},
})
    return [oneClasses,refetch]
};
   


export default useOneClass;
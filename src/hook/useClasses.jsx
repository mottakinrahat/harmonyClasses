import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { refetch, data: oneClasses = [] } = useQuery({
    queryKey: ['oneClass', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/oneClass?email=${user?.email}`);
      return res.data;
    },
  });

  return [oneClasses, refetch];
};

export default useClasses;

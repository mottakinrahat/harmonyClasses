import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'https://assignment-12-harmony-class-server.vercel.app'
});
const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;

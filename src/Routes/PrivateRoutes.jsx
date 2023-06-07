import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="flex space-x-4">
                    <div className="spinner-instrument">
                        <span className="text-4xl text-pink-500">&#9835;</span>
                    </div>
                    <div className="spinner-instrument">
                        <span className="text-4xl text-pink-500">&#9833;</span>
                    </div>
                    <div className="spinner-instrument">
                        <span className="text-4xl text-pink-500">&#9834;</span>
                    </div>
                </div>
            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login"></Navigate>
};

export default PrivateRoutes;
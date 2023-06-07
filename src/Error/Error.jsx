import React from 'react';
import ErrorImage from '../../src/assets/Error/Error.png'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="max-w-lg text-center">
                <h1 className="text-5xl text-white font-bold mb-8">Oops! Page Not Found</h1>
                <img
                    src={ErrorImage}
                    alt="404 Error"
                    className="mx-auto mb-8"
                    style={{ maxWidth: "400px" }}
                />
                <p className="text-lg text-gray-300 mb-8">
                    It seems like the page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-yellow-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-yellow-600 transition-colors duration-300"
                >
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Error;
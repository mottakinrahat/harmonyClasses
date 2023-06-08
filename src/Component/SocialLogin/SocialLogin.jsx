import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const {googleSignIn}=useContext(AuthContext);
 const hangleGoogleSignIn=()=>{
    googleSignIn()
   .then(result=>{
     const loggedGoogleUser=result.user;
     console.log(loggedGoogleUser);
     navigate(from,{replace:true})
   })
   .catch(error=>{
    console.log(error.message);
   })
 }

    return (
        <div className='text-center'>
             <div className="divider">OR</div>
             <button onClick={hangleGoogleSignIn} className="btn btn-circle btn-outline">
 <FaGoogle></FaGoogle>
</button>
        </div>
    );
};

export default SocialLogin;
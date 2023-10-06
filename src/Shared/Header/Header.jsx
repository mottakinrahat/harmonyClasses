import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import logo from '../../assets/logo/Logo.png'
import { FaSchool } from "react-icons/fa";
import useClasses from '../../hook/useClasses';
import useAdmin from '../../hook/useAdmin';
import useInstructor from '../../hook/useInstructor';
import useStudent from '../../hook/useStudent';
const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const [oneClasses] = useClasses();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isStudent] = useStudent();
  const handleLogout = () => {
    logOut()
      .then(res => {
        console.log(res.message);
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  const navItems = (
    <>
      <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/instructors" activeClassName="active">Instructor</NavLink></li>
      <li><NavLink to="/theClasses" activeClassName="active">Classes</NavLink></li>
      {isStudent && <li><NavLink to="/dashboard/selectedClass" activeClassName="active" className='bg-yellow-200'><FaSchool className='w-10 h-4'></FaSchool> <div className="badge">{oneClasses.length}</div></NavLink></li>}
      {isInstructor && <li><NavLink to="/dashboard/manageClasses" activeClassName="active" className='bg-yellow-200'><FaSchool className='w-10 h-4'></FaSchool> <div className="badge">{oneClasses.length}</div></NavLink></li>}
      {isAdmin && <li><NavLink to="/dashboard/adminManageClass" activeClassName="active" className='bg-yellow-200'><FaSchool className='w-10 h-4'></FaSchool> <div className="badge">{oneClasses.length}</div></NavLink></li>}
      <div className='flex gap-2 items-center'>
        <Tooltip id="my-tooltip" />
        {user && <img src={user?.photoURL} className='h-[45px] border rounded-full' alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} />}
        <li>{user ? <button onClick={handleLogout} className='btn btn-xs bg-yellow-500 text-white'>Logout</button> : <NavLink to="/login"><button className='btn btn-xs bg-yellow-500 text-white'>Login</button></NavLink>}</li>
      </div>
    </>
  );

  return (
    <div className='px-6'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img className='h-20' src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

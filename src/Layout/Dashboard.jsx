import React, { useEffect } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { FaHome,FaChalkboardTeacher,FaBuilding,FaCheckCircle,FaMoneyCheckAlt } from "react-icons/fa";
import Home from '../Pages/Home/Home/Home';

const Dashboard = () => {
 
    useEffect
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 h-full  text-white  bg-yellow-500 border-2 border-black roundedxl font-semibold">
                        {/* Sidebar content here */}
                        <li><Link to="selectedClass"><FaCheckCircle></FaCheckCircle> My Selected Classes</Link></li>
                        <li><Link><FaMoneyCheckAlt></FaMoneyCheckAlt> My enrolled Class</Link></li>

                        <div className='divider text-white'></div>
                        <li><Link to="/"><FaHome></FaHome> Home</Link></li>
                        <li><Link to="/instructors"><FaChalkboardTeacher></FaChalkboardTeacher> Instructor</Link></li>
                        <li><Link to="/theClasses"><FaBuilding></FaBuilding> Classes</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
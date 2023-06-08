import React, { useEffect } from 'react';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { FaHome, FaChalkboardTeacher, FaBuilding, FaCheckCircle, FaMoneyCheckAlt } from "react-icons/fa";
import Home from '../Pages/Home/Home/Home';

const Dashboard = () => {
    //TODO: load data from the server to have dynamic isAdmin based on Data
    const userRole = "admin";

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
                        {
                            userRole === "admin" && (
                                <>
                                    <li><Link to="manageClasses"><FaCheckCircle></FaCheckCircle> Manage Classes</Link></li>
                                    <li><Link to="manageUsers"><FaMoneyCheckAlt></FaMoneyCheckAlt> Manage Users</Link></li>
                                </>)
                        }
                        {
                            userRole === "instructor" && (
                                <>
                                    <li><Link to="manageClasses"><FaCheckCircle></FaCheckCircle>Add a Class</Link></li>
                                    <li><Link to="manageUsers"><FaMoneyCheckAlt></FaMoneyCheckAlt> My Class</Link></li>
                                </>
                            )
                        }
                        {
                            userRole === "student" && (
                                <>
                                    <li><Link to="selectedClass"><FaCheckCircle></FaCheckCircle>My Selected Class</Link></li>
                                    <li><Link to="manageUsers"><FaMoneyCheckAlt></FaMoneyCheckAlt> My Enrolled Class</Link></li>
                                </>
                            )
                        }



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
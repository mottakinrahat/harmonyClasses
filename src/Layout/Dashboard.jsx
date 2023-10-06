import React, { useContext, useEffect } from 'react';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import { FaHome, FaChalkboardTeacher, FaBuilding, FaCheckCircle, FaMoneyCheckAlt } from "react-icons/fa";
import Home from '../Pages/Home/Home/Home';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useUser from '../hook/useUser';
import useAdmin from '../hook/useAdmin';
import useInstructor from '../hook/useInstructor';
import useStudent from '../hook/useStudent';

const Dashboard = () => {
    // const userRole='admin';
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side py-2 pl-2">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <ul className="menu p-4  w-80 h-full  text-white  bg-yellow-500 border-2 border-black rounded-xl font-semibold">
                        {
                            isAdmin && (
                                <>
                                    <li><Link to="adminManageClass"><FaCheckCircle></FaCheckCircle> Manage Classes</Link></li>
                                    <li><Link to="manageUsers"><FaMoneyCheckAlt></FaMoneyCheckAlt> Manage Users</Link></li>
                                </>)
                        }
                        {
                            isInstructor && (
                                <>
                                    <li><Link to="manageClasses"><FaCheckCircle></FaCheckCircle>Add a Class</Link></li>
                                    <li><Link to="myClasses"><FaMoneyCheckAlt></FaMoneyCheckAlt> My Class</Link></li>
                                </>
                            )
                        }
                        {
                            isStudent &&(
                                <>
                                    <li><Link to="selectedClass"><FaCheckCircle></FaCheckCircle>My Selected Class</Link></li>
                                    <li><Link to="myenrolledclass"><FaMoneyCheckAlt></FaMoneyCheckAlt> My Enrolled Class</Link></li>
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
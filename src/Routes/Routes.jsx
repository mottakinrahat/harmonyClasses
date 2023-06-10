import React from 'react';

import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Instructor from '../Pages/Instructor/Instructor';
import Classes from '../Pages/Home/classes/Classes';
import MusicClasses from '../Pages/Classes/MusicClasses';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoutes from './PrivateRoutes';
import Error from '../Error/Error';
import Dashboard from '../Layout/Dashboard';
import SelectedClass from '../Pages/Dashboard/SelectedClass/SelectedClass';
import ADDaClass from '../Pages/ManageClasses/ADDaClass';
import ManageUsers from '../Pages/ManageUsers/ManageUsers';
import MyClasses from '../Pages/MyClasses/MyClasses';
import MyEnrolledClass from '../Pages/MyEnrolledClass/MyEnrolledClass';
import Payment from '../Pages/Payment/Payment';


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
         path:'/',
         element:<Home></Home>
        },
        {
          path:'instructors',
          element:<PrivateRoutes><Instructor></Instructor></PrivateRoutes>
        },
        {
          path:'theClasses',
          element:<MusicClasses></MusicClasses>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        }
      ]
    },
  //Dashboard

    {
   path:'Dashboard',
   element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
   children:[
    {
      path:'selectedClass',
      element:<SelectedClass></SelectedClass>
    },
    {
      path:'manageClasses',
      element:<ADDaClass></ADDaClass>
    },
    {
      path:'manageUsers',
      element:<ManageUsers></ManageUsers>
    },
    {
      path:'myClasses',
      element:<MyClasses></MyClasses>
    },
    {
      path:'myenrolledclass',
      element:<MyEnrolledClass></MyEnrolledClass>
    },
    {
      path:'selectedClass/payment/:id',
      element:<Payment></Payment>
    }
   ]
    }
  ]);

export default router;
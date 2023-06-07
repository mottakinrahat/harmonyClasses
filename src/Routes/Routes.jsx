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

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
         path:'/',
         element:<Home></Home>
        },
        {
          path:'instructors',
          element:<PrivateRoutes><Instructor></Instructor></PrivateRoutes>,
          loader:()=>fetch('http://localhost:5000/teachers')
        },
        {
          path:'theClasses',
          element:<MusicClasses></MusicClasses>,
          loader:()=>fetch('http://localhost:5000/classes')
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
  ]);

export default router;
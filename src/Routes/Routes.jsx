import React from 'react';

import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Instructor from '../Pages/Instructor/Instructor';
import Classes from '../Pages/Home/classes/Classes';
import MusicClasses from '../Pages/Classes/MusicClasses';

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
          element:<Instructor></Instructor>,
          loader:()=>fetch('http://localhost:5000/teachers')
        },
        {
          path:'theClasses',
          element:<MusicClasses></MusicClasses>,
          loader:()=>fetch('http://localhost:5000/classes')
        }
      ]
    },
  ]);

export default router;
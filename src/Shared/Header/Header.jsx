import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const navItems = (
    <>
      <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/instructor" activeClassName="active">Instructor</NavLink></li>
      <li><NavLink to="/classes" activeClassName="active">Classes</NavLink></li>
      <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
      <li><NavLink to="/login"><button className='btn btn-sm'>Login</button></NavLink></li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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

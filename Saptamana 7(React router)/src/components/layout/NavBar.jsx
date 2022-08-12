import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
        <ul>
              <li>
                  <NavLink activeClassName="active" to="/register"> Register </NavLink>
              </li>

              <li>
                  <NavLink activeClassName="active" to="/login"> Login </NavLink>
              </li>

              <li>
                  <NavLink activeClassName="active" to="/posts"> Posts </NavLink> 
                  {/* //standard react nu mai are refres ca la a href */}
              </li>
        </ul>
    </div>
  )
};
export default NavBar; 
//
//NavLink poate asocia o clasa css astfel incat linkul activ sa asocieze o clasa
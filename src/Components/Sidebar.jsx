import React from 'react';
import "../Styles/Sidebar.css"
import { NavLink } from 'react-router-dom';
import { Sidebarcontent } from '../Components/sidebarcontent';
import { SidebarLowersection } from './SidebarLowersection'; 

const Sidebar = () => {
  return (

   
    <div className='sidebar-container'>
     
         <header className='navbar-header'>Overview</header>
      <div >
        {Sidebarcontent.map((value, index) => (
          <li key={index}>
            <NavLink to={value.link}  className='nav-elements' activeClassName='active-nav'>
              <div >{value.icon}</div>
              <div className='nav-title'>{value.title}</div>
            </NavLink>
          </li>
        ))}
      </div>
      <header className='navbar-header'>Others</header>
      <div>
        {SidebarLowersection.map((value, index) => (
          <li key={index}>
            <NavLink to={value.link}  className='nav-elements' activeclassname='active-nav'>
              <div>{value.icon}</div>
              <div className='nav-title'>{value.title}</div>
            </NavLink>
          </li>
        ))}
      </div>
    </div>

  
  );
}

export default Sidebar;
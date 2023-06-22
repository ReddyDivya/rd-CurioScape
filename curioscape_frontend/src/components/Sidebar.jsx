import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import {RiHomeFill} from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

const Sidebar = ({closeToggle, user}) => {

  //close the sidebar
  const handleCloseSidebar = () => {
    if(closeToggle)
        closeToggle(false);
  };//handleCloseSidebar

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
        <div className="flex flex-col">
            
        </div>
    </div>
  )
}

export default Sidebar
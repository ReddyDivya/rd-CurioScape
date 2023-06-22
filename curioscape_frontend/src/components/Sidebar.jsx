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
            <Link to="/"
                className="flex px-5 gap-2 my-6 pt-1 w-190 items-center">
                onClick={handleCloseSidebar}    
            </Link>
        </div>
    </div>
  )
}

export default Sidebar
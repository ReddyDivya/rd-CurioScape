import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

import logo from '../assets/logo.png';
import { categories } from '../utils/data';

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const Sidebar = ({closeToggle, user}) => {

  //close the sidebar
  const handleCloseSidebar = () => {alert('handleCloseSidebar');
    if(closeToggle)
        closeToggle(false);
  };//handleCloseSidebar

  return (
    /*
    flex-col: regardless of screen size, in flex container the flex items will be stacked vertically.
    (flex-col)justify-between: aligns the flex items along the main axis (vertically in this case) and distributes the space between them. It pushes the first item to the start of the container, the last item to the end of the container, and evenly distributes the space between the items.
    overflow-y-auto: adds vertical scrollbars to the element when the content inside it exceeds its height. It enables scrolling in the vertical direction when necessary.
    min-w-210: sets the minimum width property of the element to 210 pixels.
    hide-scrollbar: Custom class. It suggests that it is used to hide or style the appearance of the scrollbar on the element.
    */
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
        <div className="flex flex-col">
            {/* Displaying logo */}
            <Link to="/"
                className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
                onClick={handleCloseSidebar} 
            >
                <img src={logo} alt="logo" className="w-full"/>
            </Link>
            <div className="flex flex-col gap-5">
                
                {/* Displaying Home icon */}
                <NavLink to="/"
                className={({isActive}) => (isActive ? isActiveStyle : isNotActiveStyle)}
                onClick={handleCloseSidebar}
                >
                  <RiHomeFill/>
                  Home
                </NavLink>

                {/* Displaying Book category images and name*/}
                <h3 className="mt-2 px-5 text-base 2xl:text-xl">Discover categories</h3>
                {
                  categories.slice(0, categories.length - 1).map((category) => ( 
                    <NavLink to={`/category/${category.name}`}
                      onClick={handleCloseSidebar}
                      className={({isActive}) => (isActive ? isActiveStyle : isNotActiveStyle)}
                      key={category.name}
                    >
                      <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" />
                      {category.name}
                    </NavLink>  
                  ))
                }
            </div>
        </div>
        {
          user && (
            <Link to={`user-profile/${user._id}`}
            className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
            onClick={handleCloseSidebar}
            >
              <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile"/>
              <p>{user.userName}</p>
              <IoIosArrowForward />
            </Link>
          )
        }
    </div>
  )
}

export default Sidebar
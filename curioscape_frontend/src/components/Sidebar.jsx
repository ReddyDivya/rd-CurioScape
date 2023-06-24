import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

import logo from '../assets/logo.png';
import { categories } from '../utils/data';

/*
Displays:Sidebar(vertically)
-----------------------------------------
Row1 => Displaying logo
Row2 => Displaying Home icon
Row3 => Displaying categories list(image and name).
Row4 => Display user-profile(image and name).
*/
/*
font-extrabold: It makes the text inside the element appear thicker or more prominent.
transition-all: applies a transition effect to all CSS properties of the element. It enables smooth transitions when the properties of the element change.
duration-200: sets the duration (in milliseconds) of the transition effect to 200 milliseconds. It determines how long the transition effect takes to complete.
ease-in-out: It applies an easing effect that starts slowly, accelerates in the middle, and slows down towards the end of the transition.
capitalize: capitalizes the text inside the element, making the first letter of each word in uppercase.
text-base: sets the font size of the text to the base size. In Tailwind CSS, the base size is typically 1rem or 16 pixels by default. It establishes the initial font size for the element.
2xl:text-xl: applies a responsive font size based on the screen size using the 2xl breakpoint. The 2xl breakpoint represents a large screen size or a specific breakpoint defined in your Tailwind CSS configuration.
*/
const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

const Sidebar = ({closeToggle, user}) => {

  //close the sidebar
  const handleCloseSidebar = () => {
    if(closeToggle)
        closeToggle(false);
  };//handleCloseSidebar

  return (
    /*
    flex-col: regardless of screen size, in flex container the flex items will be stacked vertically.
    (flex-col)justify-between: aligns the flex items along the main axis (vertically in this case) and distributes the space between them. It pushes the first item to the start of the container, the last item to the end of the container, and evenly distributes the space between the items.
    overflow-y-auto: adds vertical scrollbars to the element when the content inside it exceeds its height. It enables scrolling in the vertical direction when necessary.
    min-w-350: sets the minimum width property of the element to 210 pixels.
    hide-scrollbar: Custom class. It suggests that it is used to hide or style the appearance of the scrollbar on the element.
    gap-2: sets the gap (space) between the child elements of a flex container to 2 units.
    items-center: aligns the flex items along the horizontal axis of the flex container.

    */
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-350 hide-scrollbar">
        <div className="flex flex-col">
            {/* 1. Displaying logo */}
            <Link to="/"
                className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
                onClick={handleCloseSidebar} 
            >
                <img src={logo} alt="logo" className="w-full"/>
            </Link>
            <div className="flex flex-col gap-5">
                
                {/*2. Displaying Home icon */}
                <NavLink to="/"
                className={({isActive}) => (isActive ? isActiveStyle : isNotActiveStyle)}
                onClick={handleCloseSidebar}
                >
                  <RiHomeFill/>
                  Home
                </NavLink>

                {/*3. Displaying categories list[images and name] vertically */}
                <h3 className="mt-2 px-5 text-base 2xl:text-xl text-gray-500">Discover categories</h3>
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
          /* 4. Display user-profile(image and name) */
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
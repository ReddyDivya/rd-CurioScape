import React, {useState, useRef, useEffect} from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';

import {Sidebar, UserProfile} from '../components';
import { userQuery  } from '../utils/data';
import Pins from './Pins';
import {client} from '../client';
import logo from '../assets/logo.png';

/*
Displays:Home(horizontally)
-----------------------------------------
Row1 => Display menu icon on left side | logo in the middle | user-profile on the right side of the screen.
Routing of user-profile and pins.
*/

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState({});
  
  /*
  ref object is to reference an element in the DOM, typically for accessing or manipulating that element directly.
  here, it appears to be intended for handling scrolling functionality.
  */
  const scrollRef = useRef(null);//ref object

  //fetching user info from the localstorage
  const userInfo = localStorage.getItem('user') !== 'undefined'
  ? JSON.parse(localStorage.getItem('user')) 
  : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.sub);//google_id

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);//Scroll to a specific position
  }, [])

  return (
    /*
    md:flex-row: medium-sized screens and larger (as defined by Tailwind CSS's responsive breakpoints), in flex container, the flex items will be arranged horizontally.
    flex-col: regardless of screen size, in flex container the flex items will be stacked vertically.
    h-screen: It sets the element take up the full height of the screen.
    transition-height: Applies transition effect to the height property of the element. When the height changes, it will animate smoothly.
    duration-75: sets the duration of the transition effect to 75 milliseconds. It determines how long the transition animation will take to complete.
    ease-out: specifies the easing function for the transition effect. It uses an "ease-out" timing function, meaning that the animation will start quickly and slow down towards the end, creating a smooth transition.
    hidden: hides the element. It sets the display property of the element to none, making it invisible and removing it from the layout flow.
    md:flex: specifies that for medium-sized screens and larger, the element should be displayed as a flex container. This means that the element will have a flexible layout and its children will be arranged according to flexbox rules.
    flex-initial: sets the initial size of the element within the flex container. By default, flex items have a flex-grow value of 1, which means they will grow and occupy any available space. However, flex-initial sets the flex-grow value to 0, making the element maintain its initial size and not expand to fill the remaining space.
    md:hidden: specifies that for medium-sized screens and larger, the element should be hidden. It sets the display property to none, effectively making the element invisible and removing it from the layout flow.
    flex-row: specifies that the flex items within the container should be arranged horizontally in a row. This means that the children of the flex container will be positioned side by side(horizontally).
    w-full: sets the width of the element to 100% of its parent container. It makes the element expand horizontally to fill the available space.
    (flex-row)justify-between: aligns the flex items along the main axis (horizontally in this case) and distributes the space between them.
    (flex-row)items-center: aligns the flex items along the cross axis (vertically in this case) and centers them within the container. It vertically aligns the items at the center of the container.
    
    (flex-col)justify-between: aligns the flex items along the main axis (vertically in this case) and distributes the space between them. It pushes the first item to the start of the container, the last item to the end of the container, and evenly distributes the space between the items.
    (flex-col)items-center: aligns the flex items along the cross axis (horizontally in this case) and centers them within the container. It horizontally aligns the items at the center of the container.

    shadow-md: adds a medium-sized shadow to the element, giving it a three-dimensional appearance. 
    fixed: applies the CSS position: fixed property to the element. It fixes the element's position relative to the viewport, so it remains in a fixed position even when the user scrolls.
    w-4/5: sets the width of the element to 80% of its parent container. The "4/5" is a fraction-based responsive sizing utility provided by Tailwind CSS.
    overflow-y-auto: adds vertical scrollbars to the element when the content inside it exceeds its height. It enables scrolling in the vertical direction when necessary.
    z-10: sets the z-index of the element to 10. The z-index determines the stacking order of elements on the z-axis. In this case, the element will be positioned above elements with lower z-index values.
    animate-slide-in: applies an animation to the element called "slide-in." The animation slides the element into view using a predefined animation effect.
    */
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      {/* Mobile-based Sidebar*/}
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar user={user && user} />
      </div>
      
      {/* Display menu icon on left side | logo in the middle | user-profile on the right side of the screen. */}
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
            {/* Display menu icon for displaying sidebar on left side of the screen. */}
            <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)}/>
            
            {/* Display logo in the middle of the screen. */}
            <Link to="/">
              <img src={logo} alt="logo" className="w-8" />
            </Link>

            {/* Display user-profile on the right side of the screen. */}
            <Link to={`user-profile/${user?._id}`}>
              <img src={user?.image} alt="user-pic" className="w-9 h-9 rounded-full " />
            </Link>
        </div>
        
        {/* Web-based Sidebar*/}
        {toggleSidebar && (
          <div className="fixed w-4/5bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            {/* Close icon to close the sidebar */}
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
            </div>
            <Sidebar closeToggle={setToggleSidebar} user={user && user} />
          </div>
        )}
      </div>

      {/* Routing of user-profile and pins*/}
      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/*" element={<Pins user={user && user} />} />
        </Routes>
      </div>  
    </div>
  )
}

export default Home
import React, {useState, useEffect} from 'react';
import {Sidebar, UserProfile} from '../components';
import { userQuery  } from '../utils/data';
import Pins from './Pins';
import {client} from '../client';
import logo from '../assets/logo.png';

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState({});

  //fetching user info from the localstorage
  const userInfo = localStorage.getItem('user') !== 'undefined'
  ? localStorage.getItem('user') 
  : localStorage.clear();

  useEffect(() => {

    const query = userQuery(_id);//id
    client.fetch(query).then((data) => {
      setUser(data);
    });
  }, []);

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
    */

    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar user={user && user} />
      </div>
      <div className="flex md:hidden flex-row">
          <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
              <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)}/>
              <Link to="/">
                <img src={logo} alt="logo" className="w-28" />
              </Link>
              <Link to={`user-profile/${user?._id}`}>
                <img src={user?.image} alt="user-pic" className="w-9 h-9 rounded-full" />
              </Link>
          </div>
      </div>
    </div>
  )
}

export default Home
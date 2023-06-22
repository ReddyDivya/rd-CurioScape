import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [user, setUser] = useState();

  //fetching user info from the localstorage
  const userInfo = localStorage.getItem('user') !== 'undefined'
  ? localStorage.getItem('user') 
  : localStorage.clear();

  useEffect(() => {
    const query = user
  }, []);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
          <Sidebar/>
      </div>
    </div>
  )
}

export default Home
import React, {useState, useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import { userQuery  } from '../utils/data';
import {client} from '../client';

const Home = () => {
  const [user, setUser] = useState({});

  //fetching user info from the localstorage
  const userInfo = localStorage.getItem('user') !== 'undefined'
  ? localStorage.getItem('user') 
  : localStorage.clear();

  useEffect(() => {

    const query = userQuery('110803704650836207733');//id
    client.fetch(query).then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
          <Sidebar user />
      </div>
    </div>
  )
}

export default Home
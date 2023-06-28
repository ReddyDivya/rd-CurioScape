import React, { useEffect, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

import { userCreatedPinsQuery, userQuery, userSavedPinsQuery } from '../utils/data';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

//active button styles
const activeBtnStyles = 'bg-red-500 text-white font-bold p-2 rounded-full w-20 outline-none';

//not active button styles
const notActiveBtnStyles = 'bg-primary mr-4 text-black font-bold p-2 rounded-full w-20 outline-none';

const UserProfile = () => {

  const { userId } = useParams();//params

  const [user, setUser] = useState();//user
  const [pins, setPins] = useState();//for showing pins
  const [text, setText] = useState('Created');
  const [activeBtn, setActiveBtn] = useState('created'); //active button
  
  //navigate
  const navigate = useNavigate();

  //fetching user info from localstorage
  const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  //fetching user info using userquery
  useEffect(() => {
    const query = userQuery(userId);

    client.fetch(query)
    .then((data) => {
      setUser(data[0]);//setting user info
    })
  }, [userId]);

  useEffect(() => {

    //fetching user created pins
    if (text === 'Created') 
    {
      const createdPinsQuery = userCreatedPinsQuery(userId);

      client.fetch(createdPinsQuery).then((data) => {
        setPins(data);
      });
    }
    else //fetching user saved pins
    {
      const savedPinsQuery = userSavedPinsQuery(userId);

      client.fetch(savedPinsQuery).then((data) => {
        setPins(data);
      });
    }
  }, [text, userId]);

  //logout
  const logout = () => {
    localStorage.clear();

    navigate('/login');//navigate to login
  };//logout

  //displaying 'loading message'
  if (!user) return <Spinner message="Loading profile" />;

  return (
    <div>UserProfile</div>
  )
}

export default UserProfile
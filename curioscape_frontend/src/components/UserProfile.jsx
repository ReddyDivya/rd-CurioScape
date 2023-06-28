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

  const [user, setUser] = useState();//user
  const [pins, setPins] = useState();//for showing pins
  const [text, setText] = useState('Created');
  const [activeBtn, setActiveBtn] = useState('created'); //active button
  
  //navigate
  const navigate = useNavigate();

  const { userId } = useParams();//params

  return (
    <div>UserProfile</div>
  )
}

export default UserProfile
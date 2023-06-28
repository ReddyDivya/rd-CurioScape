import React, { useEffect, useState } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { useParams, useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

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

  const [user, setUser] = useState({});//user
  const [pins, setPins] = useState();//for showing pins
  const [text, setText] = useState('Created');
  const [activeBtn, setActiveBtn] = useState('created'); //active button
  
  //navigate
  const navigate = useNavigate();

  //fetching user info from localstorage
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

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

  //LogoutButton
  const handleLogout = () => {
    try {
      googleLogout();//logout google account
      
      localStorage.clear(); //clear browser storage
      navigate('/login');//navigate to login
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  //displaying 'loading message'
  if (!user) return <Spinner message="Loading profile" />;

  return (
    <div className="relative pb-2 h-full justify-center items-center">
      <div className="flex flex-col pb-5">
        <div className="relative flex flex-col mb-7">
          
          {/* Display banner and user-profile image */}
          <div className="flex flex-col justify-center items-center">
            {/* Display banner */}
            <img
              className=" w-full h-370 2xl:h-510 shadow-lg object-cover"
              src="https://images.unsplash.com/photo-1624030275207-77bac1c83be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="user-pic"
            />

            {/* Display user-profile image */}
            <img
              className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover"
              src={user.image}
              alt="user-pic"
            />
          </div>

          {/* Display user-profile name */}
          <h1 className="font-bold text-3xl text-center mt-3">
            {user.userName}
          </h1>

          {/* Google Logout icon and logout functionality */}
          <div className="absolute top-0 z-1 right-0 p-2">
            {userId === userInfo.sub && (
              <button
                type="button"
                className=" bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
                onClick={handleLogout}
              >
                <AiOutlineLogout color="red" fontSize={21} />
              </button>
            )}
          </div>
        </div>

        {/* Display 'created' and 'saved' buttons */}
        <div className="text-center mb-7">
          <button
            type="button"
            onClick={(e) => {
              setText(e.target.textContent);
              setActiveBtn('created');
            }}
            className={`${activeBtn === 'created' ? activeBtnStyles : notActiveBtnStyles}`}
          >
            Created
          </button>
          <button
            type="button"
            onClick={(e) => {
              setText(e.target.textContent);
              setActiveBtn('saved');
            }}
            className={`${activeBtn === 'saved' ? activeBtnStyles : notActiveBtnStyles}`}
          >
            Saved
          </button>
        </div>
        
        {/* Displays user-profiles pins */}
        <div className="px-2">
          <MasonryLayout pins={pins} />
        </div>
        
        {/* Displays 'No Pins Found!' message if not user-profiles pins exists */}
        {pins?.length === 0 && (
        <div className="flex justify-center font-bold items-center w-full text-1xl mt-2">
          No Pins Found!
        </div>
        )}
      </div>
    </div> 
  )
}

export default UserProfile
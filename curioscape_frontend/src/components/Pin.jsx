import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import { client, urlFor } from '../client';

const Pin = ({pin}) => {
  const [postHovered, setPostHovered] = useState(false);
  const [savingPost, setSavingPost] = useState(false);

  const navigate = useNavigate();//navigation

  //object destructuring
  const {postedBy, image, _id, destination} = pin;

  //fetching user from local storage
  const user = localStorage.getItem("user") !== 'undefined' 
  ? JSON.parse(localStorage.getItem("user"))
  : localStorage.clear();

  return (
    <div className='m-2'>
      <div className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
      onMouseEnter={() => setPostHovered(true)}
      onMouseLeave={() => setPostHovered(false)}
      onClick={() => navigate(`/pin-detail/${_id}`)}
    >
      {
        image && (<img className="rounded-lg w-full" alt="user-post" src={(urlFor(image).width(250).url())}/>)
      }
    </div>  
      
    </div>
  )
}

export default Pin
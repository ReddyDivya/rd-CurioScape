import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDownloadForOffline } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

import { client, urlFor } from '../client';

const Pin = ({pin: {postedBy, image, _id, destination}}) => {
  return (
    <div className='m-1'>
      <img className="rounded-lg w-full" alt="user-post" src={(urlFor(image).width(250).url())}/>
    </div>
  )
}

export default Pin
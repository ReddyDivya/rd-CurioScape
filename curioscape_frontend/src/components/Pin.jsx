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
  const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  //filtering saved pins
  let alreadySaved = pin?.save?.filter((item) => item?.postedBy?._id === user?.googleId);
  
  //fetching saved pins
  alreadySaved = alreadySaved?.length > 0 ? alreadySaved : [];
  
  //save pin
  const savePin = (id) => {

  };//savePin

  return (
    /* Display image and display download icon on mouse hover */
    <div className='m-2'>
      <div className='relative cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out'
      onMouseEnter={() => setPostHovered(true)}
      onMouseLeave={() => setPostHovered(false)}
      onClick={() => navigate(`/pin-detail/${_id}`)}
    >
      {
        image && (<img className="rounded-lg w-full" alt="user-post" src={(urlFor(image).width(250).url())}/>)
      }
      
      {
        /* Display 'download icon' and 'save' button on mouse hover */
        postHovered && ( 
          <div className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50"
            style={{ height: '100%' }}>
              <div className="flex items-center justify-between">
                {/* Display download icon */}
                <div className="flex gap-2">
                    <a
                      href={`${image?.asset?.url}?dl=`}
                      download
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="bg-white w-9 h-9 p-2 rounded-full flex items-center justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none"
                    >
                      <MdDownloadForOffline />
                    </a>
                </div>
                {
                  /* Already saved pins */
                  alreadySaved.length !== 0 ?
                  (
                    <button type="button" className='bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none'>
                      {pin?.save?.length} Saved
                    </button>
                  ):
                  (
                    /* Display 'save' button */
                    <button type="button"
                    className="bg-red-500 opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none"
                    onClick={(e) => {
                      e.stopPropagation();
                      savePin(_id);
                    }}>
                        {pin?.save?.length} {savingPost ? 'Saving' : 'Save'}
                    </button>
                  )
                }
              </div>  
              <div>
                
              </div>  
          </div>
        )
      }
    </div>  
      
    </div>
  )
}

export default Pin
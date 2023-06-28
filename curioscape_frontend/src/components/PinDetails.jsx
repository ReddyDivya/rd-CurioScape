import React, { useEffect, useState } from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { client, urlFor } from '../client';
import MasonryLayout from './MasonryLayout';
import { pinDetailMorePinQuery, pinDetailQuery } from '../utils/data';
import Spinner from './Spinner';

const PinDetails = ({user}) => {
  const { pinId } = useParams();
  const [pins, setPins] = useState();
  const [pinDetail, setPinDetail] = useState();
  const [comment, setComment] = useState('');
  const [addingComment, setAddingComment] = useState(false);

  return (
    <>
      {
        pinDetail && (
          <div className="flex xl:flex-row flex-col m-auto bg-white" style={{ maxWidth: '1500px', borderRadius: '32px' }}>
            <div className="flex justify-center items-center md:items-start flex-initial">
              <img
                className="rounded-t-3xl rounded-b-lg"
                src={(pinDetail?.image && urlFor(pinDetail?.image).url())}
                alt="user-post"
              />
            </div>
            <div className="w-full p-5 flex-1 xl:min-w-620">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <a
                    href={`${pinDetail.image.asset.url}?dl=`}
                    download
                    className="bg-secondaryColor p-2 text-xl rounded-full flex items-center justify-center text-dark opacity-75 hover:opacity-100"
                  >
                    <MdDownloadForOffline />
                  </a>
                </div>
              </div>  
            </div>
          </div>  
        )
      }
    </>
  )
}

export default PinDetails

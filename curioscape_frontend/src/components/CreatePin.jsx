import React, { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

import { categories } from '../utils/data';
import { client } from '../client';
import Spinner from './Spinner';

const CreatePin = () => {

  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [loading, setLoading] = useState(false);
  const [destination, setDestination] = useState();
  const [fields, setFields] = useState();
  const [category, setCategory] = useState();
  const [imageAsset, setImageAsset] = useState();
  const [wrongImageType, setWrongImageType] = useState(false);

  const navigate = useNavigate();

  //uploadImage
  const uploadImage = (e) => {

    const selectedFile = e.target.files[0];
    
    // uploading asset to sanity
    if (selectedFile.type === 'image/png' || selectedFile.type === 'image/svg' || selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/gif' || selectedFile.type === 'image/tiff') {
      setWrongImageType(false);
      setLoading(true);//display spinner
      client.assets
        .upload('image', selectedFile, 
          { contentType: selectedFile.type, 
            filename: selectedFile.name 
          }
        )
        .then((document) => {
          setImageAsset(document);//insert image to sanity
          setLoading(false);//hide spinner
        })
        .catch((error) => {
          console.log('Upload failed:', error.message);
        });
    } 
    else //wrong image type case
    {
      setLoading(false);//hide spinner
      setWrongImageType(true);//set wrong image type
    }
  };//uploadImage

  //save pin
  const savePin = () => {
    if(title && about && destination && imageAsset?._id && category)
    {
      const doc = {
        _type: 'pin',
        title,
        about,
        destination,
        image: {
          _type: 'image',
          asset:{
            _type:'reference',
            _ref: imageAsset?._id,
          }
        }

      };//doc
    }//if
  };//savePin 

  return (
    <div className="flex flex-col justify-center items-center mt-5 lg:h-4/5">
        {
          fields && (
            <p className="text-red-500 mb-5 text-xl transition-all duration-150 ease-in ">Please add all fields.</p>
          )
        }
      <div className=" flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5  w-full">
        <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
          <div className=" flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420">
              {
                loading && ( <Spinner />)
              }
              {
                wrongImageType && (
                  <p>It&apos;s wrong file type.</p>
                )
              }

              {
                !imageAsset ? 
                (
                    <label>
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="flex flex-col justify-center items-center">
                          <p className="font-bold text-2xl">
                            <AiOutlineCloudUpload />
                          </p>
                          <p className="text-lg">Click to upload</p>
                        </div>
                        <p className="mt-32 text-gray-400">
                          Recommendation: Use high-quality JPG, JPEG, SVG, PNG, GIF or TIFF less than 20MB
                        </p>
                      </div>
                      <input
                        type="file"
                        name="upload-image"
                        onChange={uploadImage}
                        className="w-0 h-0"
                      />  
                    </label>
                ) : 
                (
                  <div className="relative h-full">
                    <img
                      src={imageAsset?.url}
                      alt="uploaded-pic"
                      className="h-full w-full"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                      onClick={() => setImageAsset(null)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                )
              }
          </div>
        </div>  
      </div>  
    </div>
  )
}

export default CreatePin
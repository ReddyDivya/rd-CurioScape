import React, { useEffect, useState } from 'react';
import MasonryLayout from './MasonryLayout';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import Spinner from './Spinner';

const Search = () => {
  const [pins, setPins] = useState(); //show pins
  const [loading, setLoading] = useState(false);//show spinner

  return (
    <div>
      {loading && <Spinner message="Searching pins" />}
      {pins?.length !== 0 && <MasonryLayout pins={pins} />}
      {
        pins?.length === 0 && searchTerm !== '' && !loading && 
        (
          <div className="mt-10 text-center text-xl ">No Pins Found!</div>
        )
      }
    </div>
  )
}

export default Search
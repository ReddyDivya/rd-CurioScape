import React, { useEffect, useState } from 'react';
import MasonryLayout from './MasonryLayout';
import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import Spinner from './Spinner';

const Search = () => {
  const [pins, setPins] = useState(); //show pins
  const [loading, setLoading] = useState(false);//show spinner

  useEffect(() => {

    //if searchitem is not empty
    if(searchTerm !== '')
    {
      setLoading(true);//set loading
      const query = searchQuery(searchTerm.toLowerCase());
      client.fetch(query).then((data) => {
        setPins(data);//shows pins as per search term
        setLoading(false);//hide spinner
      });
    }//if
    else{
      client.fetch(feedQuery).then((data) => {
        setPins(data);//show all pins
        setLoading(false);//hide spinner
      });
    }//else
  }, []);

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
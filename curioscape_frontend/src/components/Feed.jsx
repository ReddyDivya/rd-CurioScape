import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {feedQuery, searchQuery} from "../utils/data";//fetching queries
import {client} from "../client";
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  /*
  useParams() - hook provided by React Router. 
  - It allows us to access the parameters from the URL in our component. 
  - This hook returns an object containing the parameters.
  - The syntax {categoryId} on the left side of the assignment is called object destructuring.
  - it is extracting the categoryId property from the object returned by useParams().
  ---------------------------------------------------------------------------------------------

  */
  const [pins, setPins] = useState();//pins
  const [loading, setLoading] = useState(true);//to display spinner
  const {categoryId} = useParams();//object destructuring

  useEffect(() => {

    //only if category exists
    if(categoryId)
    {
      setLoading(true);//show spinner
      
      //searching the pins data through categoryId
      const query = searchQuery(categoryId);

      //fetching pins data from the searched category
      client.fetch(query).then((data) => {
        setPins(data);//setting the fetched pins data from the searched category.
        setLoading(false);//hiding the spinner
      });
    }//if
    else{
      setLoading(true);//show spinner

      //fetching feed data
      client.fetch(feedQuery).then((data) => {
        setPins(data);//setting the fetched pins data from the searched category.
        setLoading(false);//hide spinner
      });
    }//else
  }, [categoryId]);

  const ideaName = categoryId || 'new'; //new category is created, if categoryId doesn't exists.

  if(loading)
    return <Spinner message={`We are adding new ideas to your feed!`} />

  return (
    <div>
          
    </div>
  )
}

export default Feed

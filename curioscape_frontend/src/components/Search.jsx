import React from 'react'

const Search = () => {
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
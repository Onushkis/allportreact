import React from 'react'
import { BsSearch } from 'react-icons/bs';


const SearchBar = () => {
  return (
    <div className='SearchBar flex items-center border w-32'>
    <span className='searchText'>Search</span>
      <BsSearch />
    </div>
  )
}

export default SearchBar

import React from 'react'
import { BsSearch } from 'react-icons/bs';


const SearchBar = () => {
  return (
    <div className='SearchBar flex items-center border justify-around w-40'>
    <span className='searchText '>Search</span>
      <BsSearch className='bg-indigo-500 justify-around '/>
    </div>
  )
}

export default SearchBar

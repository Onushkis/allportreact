import React from 'react'
import { BsSearch } from 'react-icons/bs';


const SearchBar = () => {
  return (
    <div className='SearchBar flex items-center justify-between border  w-40'>
    <span className='searchText ml-4'>Search</span>
      <BsSearch className='bg-indigo-500 flex justify-end w-8 h-8 p-2 text-[#FFF]'/>
    </div>
  )
}

export default SearchBar

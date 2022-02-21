import React from 'react'
import DepartmentServices from './DepartmentServices'
import NavBarMain from './NavBarMain'
import NavbarTop from './NavbarTop'
import News from './News'

const Header = () => {
  return (
    <div className='bg-indigo-500 w-1366 ' >
        <NavbarTop />
        <NavBarMain />
        
    </div>
  )
}

export default Header

import React from 'react'
import logo from '../images/logo.png'
import News from './News'
import DepartmentServices from './DepartmentServices'
import JobTools from './JobTools'
import SearchBar from './SearchBar'
import WhoWeAre from './WhoWeAre'
import CovidInfo from './CovidInfo'


const NavBarMain = () => {
  return (
    <div className='flex justify-between p-4'>
        <img src={logo} width="102px" height="35px" />
     

        <News />
        <DepartmentServices />
        <JobTools />
        <WhoWeAre />
        <CovidInfo />
        <SearchBar />

    </div>
  )
}

export default NavBarMain

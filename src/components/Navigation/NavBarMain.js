import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from './images/logo.png'
import News from '../Navigation/News'
import DepartmentServices from '..Navigation/DepartmentServices'
import JobTools from '..Navigation/JobTools'
import SearchBar from '..Navigation/SearchBar'
import WhoWeAre from '..Navigation/WhoWeAre'
import CovidInfo from '..Navigation/CovidInfo'


const NavBarMain = () => {
  return (
    <div className='flex justify-between p-4'>
        <img src={logo} width="102px" height="35px" />
     <Link to='/' >News</Link>
     <Link to='DepartmentServices' >DepartmentServices</Link>
     <Link to='JobTools' >JobTools</Link>
     <Link to='WhoWeAre' >WhoWeAre</Link>
  <Link to='CovidInfo' >CovidInfo</Link>


      
        <SearchBar />

    </div>
  )
}

export default NavBarMain

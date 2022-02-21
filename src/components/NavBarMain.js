import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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

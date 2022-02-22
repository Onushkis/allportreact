import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactUs from './ContactUs'
import CorporateWebsite from './CorporateWebsite'
import FAQs from './FAQs'




const Footer = () => {
  return (
    <div className='bg-indigo-500 w-1366 '>
        <div><Link to='/'> allblabla</Link></div>
        
        <div className='flex justify-around '>
            
            <Link to='/'> </Link>
            <Link to='FAQs'>FAQs </Link>
            <Link to='AccessibilityHelp'>AccessibilityHelp</Link>
            <Link to='CorporateWebsite'>CorporateWebsite</Link>
            <Link to='ContactUs'>ContactUs</Link>
        </div>
     
    </div>
  )
}

export default Footer

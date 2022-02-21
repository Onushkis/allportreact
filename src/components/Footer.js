import React from 'react'
import AccessibilityHelp from './AccessibilityHelp'
import ContactUs from './ContactUs'
import CorporateWebsite from './CorporateWebsite'
import FAQs from './FAQs'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='bg-indigo-500 w-1366 '>
        <div><Link to='/'> allblabla</Link></div>
        
        <div className='flex justify-around '>
            
    <Link to='/'> </Link>
            <FAQs />
            <AccessibilityHelp />
            <CorporateWebsite />
            <ContactUs />
        </div>
     
    </div>
  )
}

export default Footer

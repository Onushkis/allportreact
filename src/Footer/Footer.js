import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactUs from '../Footer/ContactUs'
import CorporateWebsite from '../Footer/CorporateWebsite'
import FAQs from '../Footer/FAQs'
import AccessibilityHelp from '../Footer/AccessibilityHelp'




const Footer = () => {
  return (
    <div className='bg-indigo-500 w-1366 '>
        
        
        <div className='flex justify-between text-[#FFFF] font-bold p-4 '>
        <Link to='/'> allPort</Link>
            
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

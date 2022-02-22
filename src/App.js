import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import NavbarTop from './components/NavbarTop';
import News from './components/News'
import DepartmentServices from './components/DepartmentServices'
import JobTools from './components/JobTools'
import WhoWeAre from './components/WhoWeAre'
import CovidInfo from './components/CovidInfo'
import Foooter from './components/Footer'
import AccessibilityHelp from './components/AccessibilityHelp';
import CorporateWebsite from './components/CorporateWebsite';
import ContactUs from './components/ContactUs';
import FAQs from './components/FAQs';
import NotFound from './components/NotFound'





function App() {
  return (
    <div className="App">


      <Router >
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<News />} />

          <Route path="DepartmentServices" element={<DepartmentServices />} />
          <Route path="JobTools" element={<JobTools />} />


            <Route path="FAQs" element={<FAQs />} />  
            <Route path="AccessibilityHelp" element={<AccessibilityHelp />} />  
            <Route path="CorporateWebsite" element={<CorporateWebsite />} />  
            <Route path="ContactUs" element={<ContactUs />} />  



          <Route path="/*" element={<NotFound />} />



        </Routes>
        <Foooter />
      </Router>
    </div>
  );
}

export default App;










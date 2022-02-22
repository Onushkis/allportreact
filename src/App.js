import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './Headercomponents/Navigation/Header';
import NavbarTop from './components/Navigation/NavbarTop';
import News from './components/Navigation/News'
import DepartmentServices from './components/Navigation/DepartmentServices'
import JobTools from './components/Navigation/JobTools'
import WhoWeAre from './components/Navigation/WhoWeAre'
import CovidInfo from './components/Navigation/CovidInfo'
import Foooter from './components/Footer/Footer'
import AccessibilityHelp from './components/Footer/AccessibilityHelp';
import CorporateWebsite from './components/Footer/CorporateWebsite';
import ContactUs from './components/Footer/ContactUs';
import FAQs from './components/Footer/FAQs';
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
          <Route path="WhoWeAre" element={<WhoWeAre />} />
          <Route path="CovidInfo" element={<CovidInfo />} />




            <Route path="FAQs" element={<FAQs />} />  
            <Route path="AccessibilityHelp" element={<AccessibilityHelp />} />  
            <Route path="CorporateWebsite" element={<CorporateWebsite />} />  
            <Route path="ContactUs" element={<ContactUs />} />  
            <Route path="CovidInfo" element={<CovidInfo />} />  




          <Route path="/*" element={<NotFound />} />



        </Routes>
        <Foooter />
      </Router>
    </div>
  );
}

export default App;










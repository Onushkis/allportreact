import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header'
import NavbarTop from './components/NavbarTop'
import News from './components/News'
import DepartmentServices from './components/DepartmentServices'
import JobTools from './components/JobTools'
import WhoWeAre from './components/WhoWeAre'
import CovidInfo from './components/CovidInfo'
import Footer from './Footer/Footer'
import AccessibilityHelp from './Footer/AccessibilityHelp'
import CorporateWebsite from './Footer/CorporateWebsite'
import ContactUs from './Footer/ContactUs'
import FAQs from './Footer/FAQs'
import FeaturedNews from './Main/FeaturedNews';
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

              <Route path='FeaturedNews' element={FeaturedNews} />


          <Route path="/*" element={<NotFound />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

















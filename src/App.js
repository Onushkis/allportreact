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





function App() {
  return (
    <div className="App">


      <Router >
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<News />} />

          <Route path="/" element={<DepartmentServices />} />
          <Route path="/" element={<JobTools />} />

        </Routes>
        <Foooter />
      </Router>
    </div>
  );
}

export default App;










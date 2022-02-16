import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import NavbarTop from './components/NavbarTop';


function App() {
  return (
    <div className="App">
    

      <Router >
          <Header />
        <Routes>

        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
  
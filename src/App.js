
import './App.css';
import Navbar from './components/navbar/Navbar';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Hero from './components/hero/Hero';




function App() {
  return (
    <div >
      <Router>
        <Navbar/>
      <Routes>
            <Route exact path="/" element={<Hero/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
      </Router>
    
    </div>
  );
}

export default App;

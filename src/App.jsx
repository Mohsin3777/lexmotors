import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contactus/Contact';
import About from './pages/About'
import Inventory from './pages/inventory/Invertory'
import Service from './pages/service/Services'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Jab baqi pages banayein toh unhein yahan uncomment kar dein */}
                <Route path="/about" element={<About />} />
                <Route path="/inventory" element={<Inventory />} />


                <Route path="/service" element={<Service />} />

        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/car/:id" element={<CarDetail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
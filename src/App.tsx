import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './screens/Main/Main';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Vecaid } from './pages/Vecaid';
import { Contact } from './pages/Contact';
import { ServicesOffered } from './pages/ServicesOffered';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/vecaid" element={<Vecaid />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<ServicesOffered />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 
import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Vecaid } from "./pages/Vecaid";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { ServicesOffered } from "./pages/ServicesOffered";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vecaid" element={<Vecaid />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/servicesoffered" element={<ServicesOffered />} />
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
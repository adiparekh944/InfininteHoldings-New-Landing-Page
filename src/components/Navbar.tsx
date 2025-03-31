import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../index.css";

export const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white text-xl font-medium" style={{ fontFamily: 'Furore' }}>
            Infinite Holdings Group
          </Link>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`text-sm ${
                isActive('/') ? 'text-white' : 'text-neutral-400'
              } hover:text-white transition-colors`}
              style={{ fontFamily: 'Furore' }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm ${
                isActive('/about') ? 'text-white' : 'text-neutral-400'
              } hover:text-white transition-colors`}
              style={{ fontFamily: 'Furore' }}
            >
              About Us
            </Link>
            <Link
              to="/vecaid"
              className={`text-sm ${
                isActive('/vecaid') ? 'text-white' : 'text-neutral-400'
              } hover:text-white transition-colors`}
              style={{ fontFamily: 'Furore' }}
            >
              Vecaid
            </Link>
            <Link
              to="/team"
              className={`text-sm ${
                isActive('/team') ? 'text-white' : 'text-neutral-400'
              } hover:text-white transition-colors`}
              style={{ fontFamily: 'Furore' }}
            >
              Meet the Team
            </Link>
            <Link
              to="/servicesoffered"
              className={`text-sm ${
                isActive('/servicesoffered') ? 'text-white' : 'text-neutral-400'
              } hover:text-white transition-colors`}
              style={{ fontFamily: 'Furore' }}
            >
              Services Offered
            </Link>
            <Link
              to="/contact"
              className={`text-sm ${
                isActive('/contact') ? 'text-white' : 'text-neutral-400'
              } hover:text-white transition-colors`}
              style={{ fontFamily: 'Furore' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
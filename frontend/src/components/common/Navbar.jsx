import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-gray-800">TravelExplorer</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
              Home
            </Link>
            <Link to="/destination/1" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
              Destinations
            </Link>
            <Link to="/blog/1" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
              Tours
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/destination/1" className="block text-gray-700 hover:text-blue-600 font-medium">
              Destinations
            </Link>
            <Link to="/blog/1" className="block text-gray-700 hover:text-blue-600 font-medium">
              Tours
            </Link>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              TailorMade
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-dark hover:text-secondary font-medium">
              Home
            </Link>
            <Link to="/#features" className="text-dark hover:text-secondary font-medium">
              Features
            </Link>
            <Link to="/#how-it-works" className="text-dark hover:text-secondary font-medium">
              How It Works
            </Link>
            <Link to="/customer-portal" className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary/90 transition-all">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white">
          <div className="container-custom py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-dark hover:text-secondary font-medium py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/#features" 
              className="text-dark hover:text-secondary font-medium py-2"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link 
              to="/#how-it-works" 
              className="text-dark hover:text-secondary font-medium py-2"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link 
              to="/customer-portal" 
              className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary/90 transition-all inline-block w-fit"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

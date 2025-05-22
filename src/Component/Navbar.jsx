// src/components/Navbar.js
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <div className="w-full bg-blue-300 shadow-sm sticky top-0 z-50">
        <div className="w-[95%] max-w-7xl mx-auto py-3 px-4">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-lg font-semibold">Culinary Express</h1>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-row gap-6">
              <Link to="/" className="hover:text-blue-700 font-medium transition-colors">Home</Link>
              <Link to="/viewcart" className="hover:text-blue-700 font-medium transition-colors">View Cart</Link>
              <Link to="/Favourite" className="hover:text-blue-700 font-medium transition-colors">Favourites</Link>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col gap-3 py-3">
              <Link 
                to="/" 
                className="hover:bg-blue-400 py-2 px-3 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/viewcart" 
                className="hover:bg-blue-400 py-2 px-3 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                View Cart
              </Link>
              <Link 
                to="/Favourite" 
                className="hover:bg-blue-400 py-2 px-3 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Favourites
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

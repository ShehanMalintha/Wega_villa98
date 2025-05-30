import React, { useState } from "react";
import { FaChevronDown, FaGlobe } from "react-icons/fa";

const Navbar = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-12 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        Wega Villa <span className="text-amber-500">98</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-800 hover:text-amber-500">Home</a>
        <a href="#" className="text-gray-800 hover:text-amber-500">About us</a>
        <a href="#" className="text-gray-800 hover:text-amber-500">Travel</a>
        
        {/* Booking Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsBookingOpen(!isBookingOpen)}
            className="flex items-center text-gray-800 hover:text-amber-500"
          >
            Booking <FaChevronDown className="ml-1 text-xs" />
          </button>
          {isBookingOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 border border-gray-100">
              <a href="#" className="block px-4 py-2 hover:bg-amber-50">Rooms Booking</a>
              <a href="#" className="block px-4 py-2 hover:bg-amber-50">Events booking</a>
            </div>
          )}
        </div>

        <a href="#" className="text-gray-800 hover:text-amber-500">Facilities</a>
        <a href="#" className="text-gray-800 hover:text-amber-500">Contact Us</a>
      </div>

     
        {/* Login Button */}
        <button className="bg-white hover:bg-amber-600 text-amber-950/50 border-2 border-amber-950/40 px-4 py-2 rounded-md transition">
          Login / Join
        </button>
      

      {/* Mobile Menu Button (hidden on desktop) */}
      <button className="md:hidden text-gray-800">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
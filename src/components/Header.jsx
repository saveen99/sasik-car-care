// src/components/Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-white text-xl font-bold">Sasik Car Care</span>
        </div>

        {/* Navigation Options */}
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-gray-300 hover:text-white">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white">About</a>
          <a href="#services" className="text-gray-300 hover:text-white">Services</a>
          <a href="#blog" className="text-gray-300 hover:text-white">Blog</a>
        </div>

        {/* Contact Us Button */}
        <a
          href="#contact"
          className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

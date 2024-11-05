// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Company Name</h3>
            <p className="text-gray-400">Your trusted partner for quality services.</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <a href="#" className="text-gray-400 hover:text-white">Home</a>
            <a href="#" className="text-gray-400 hover:text-white">About Us</a>
            <a href="#" className="text-gray-400 hover:text-white">Services</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@company.com</p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-sm">© 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

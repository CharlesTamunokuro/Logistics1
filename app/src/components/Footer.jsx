import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Copyright */}
          <div className="md:col-span-1">
            <p className="text-lg font-semibold">© 2024 GIG Logistics</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Service Portfolio</a></li>
              <li><a href="#" className="hover:text-white">About us</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Other Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Get a Quote</a></li>
              <li><a href="#" className="hover:text-white">Schedule a Pickup</a></li>
              <li><a href="#" className="hover:text-white">GIG Alpha</a></li>
              <li><a href="#" className="hover:text-white">Overseas Shipping</a></li>
              <li><a href="#" className="hover:text-white">Report Issues</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

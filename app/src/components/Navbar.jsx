import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <span className="dropdown-title">
              Service Portfolio <FaChevronDown className="chevron-icon" />
            </span>
            {dropdown && (
              <div className="dropdown-content">
                <Link to="/domestic-logistics">Domestic Logistics</Link>
                <Link to="/corporate-logistics">Corporate Logistics</Link>
                <Link to="/overseas-shipping">Overseas Shipping</Link>
                <Link to="/ecommerce-logistics">Ecommerce Logistics</Link>
                <Link to="/wallet-services">Wallet and Added Services</Link>
              </div>
            )}
          </div>
        </li>
        <li><Link to="/offices">Our Offices</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link to="/signin" className="signin-btn">Sign In/Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;

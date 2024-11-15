import React from 'react';
import './App.css';
import { FaBox, FaGlobe, FaCalculator, FaShoppingCart } from 'react-icons/fa';

const Services = () => (
  <div className="services">
    <h2>Seamless delivery services</h2>
    <div className="service-cards">
      <div className="service-card">
        <FaBox className="icon" />
        <h3>Ship Now</h3>
        <p>Request Pick Up, Delivery or Xpress Drop Off</p>
      </div>

      <div className="service-card featured">
        <FaGlobe className="icon" />
        <h3>Overseas Shipping</h3>
        <p>Ship from UK, USA, Canada or China to Nigeria and Export to 230 locations worldwide</p>
      </div>

      <div className="service-card">
        <FaCalculator className="icon" />
        <h3>Get a Quick Quote</h3>
        <p>Calculate cost estimate for local & international shipments</p>
      </div>

      <div className="service-card">
        <FaShoppingCart className="icon" />
        <h3>Personal Shopper</h3>
        <p>We shop quality products for you & ship to your doorstep</p>
        <div className="new-badge">New</div>
      </div>
    </div>
  </div>
);

export default Services;

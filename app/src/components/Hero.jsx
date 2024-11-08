// Import React
import React from 'react';

// Hero Component
const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: 'url("/Banner.jpeg")' }}
    >
      
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      
      <div className="relative z-10 text-center max-w-2xl px-4 sm:px-6 lg:px-8">
        
        
        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
          Welcome to GIG Logistics
        </h1>
        
        
        <p className="text-lg text-gray-200 mb-8">
          GIGL Toronto Canada and GIGL China are now live! Ship and pay seamlessly in Naira.
        </p>
        
      <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2">
          <input
            type="text"
            placeholder="Input tracking ID / Alphacode"
           className="px-4 py-2 w-64 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button className="bg-red-600 text-white mx-20 px-4 py-2 rounded-r-md font-semibold hover:bg-red-700 transition duration-200">
            Search
          </button>
      </div>
      </div>
    </section>
  );
};

export default Hero;

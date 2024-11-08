import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa';


const AppPage = () => {
  return (
    <>
    
    <div className="flex justify-between items-center py-24 px-20 bg-black text-white">
      
        {/* Text Section */}
        {/* max-w-screen-lg mx-auto p-6 md:flex md:items-center md:justify-between */}
        <div className="">
          <h1 className="text-4xl font-bold">
            GIGGo, the app for local<br/> and international <br/>shipping
          </h1>
          <div className="flex space-x-4 mt-4">
            {/* App Store Buttons */}
            <a
              href="#"
              className="flex items-center bg-red-600 px-4 py-2 rounded-lg space-x-2 hover:bg-red-700 transition-colors"
            >
              <FaApple className="text-2xl" />
              <span>Download on the <br/> App Store</span>
            </a>
            <a
              href="#"
              className="flex items-center bg-gray-900 px-9 py-2 rounded-lg space-x-2 hover:bg-gray-800 transition-colors"
            >
              <FaGooglePlay className="text-2xl" />
              <span>Get it on <br/> Google Play</span>
            </a>
          </div>
          </div>
    

        {/* Image Section */}
        
          <div className="">
            <img
              src="/app-screen.png" 
              alt="Phone Mockup"
              className=""
            />
          
        </div>
    </div>
    
    </>
  )
}

export default AppPage
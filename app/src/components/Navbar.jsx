import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='bg-white shadow-lg flex justify-between items-center px-16 py-7'>
       <div className='flex justify-between items-center text-center'>
            <div>
                <a href="">
                <img className='w-16' src="./public/logo.png" alt="" />
                </a>
            </div>

            <div className='space-x-6 mx-40 text-sm text-gray-800'>
                <a href="" className='navbar-link text-gray-800'>Service Portfolio</a>
                <a href="" className='text-gray-800'>Our Services</a>
                <a href="" className='text-gray-800'>Blog</a>
                <a href="" className='text-gray-800'>FAQs</a>
                <a href="" className='text-gray-800'>About Us</a>
            </div>
       </div>

       <div>
            <button className='bg-red-600 text-white px-2 py-2 rounded'>
                Sign in/Sign up
            </button>
       </div>
    </div>
    
    
    
    </>
  )
}

export default Navbar
"use client";

import logo from '/src/assets/react.svg';
import React from 'react';

const Nav = () => {
  return (
    <div className='mt-2 w-full h-auto sm:h-[50px] flex justify-center items-center'>
      <nav className='w-full px-4 sm:w-[90vw] h-auto sm:h-[30px] flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <img src={logo} alt="Brand Logo" className="h-8 sm:h-auto" />
        </div>
        <div className='text-[13px] flex flex-wrap justify-center gap-3 uppercase font-semibold'>
           <h3 className="hover:text-red-500 cursor-pointer">Khadim Ali</h3>
        </div>
        <div className='flex gap-4  ' >
          <a href='https://www.linkedin.com/in/khadim-ali12/' className='rounded  text-[15px] bg-red-500 px-3 py-2 text-[13px] rounded-sm text-white hover:bg-transparent hover:text-black hover:border hover:border-black  transition-colors duration-500'>
          Linkedin </a>
          <a href='https://khadim-portfolio.vercel.app/' className=' rounded text-[15px] bg-red-500 px-3 py-2 text-[13px] rounded-sm text-white hover:bg-transparent hover:text-black hover:border hover:border-black  transition-colors duration-500'>
          Portfolio
        </a>
        <a href='https://github.com/developer-khadim' className='rounded text-[15px] bg-red-500 px-3 py-2 text-[13px] rounded-sm text-white hover:bg-transparent hover:text-black hover:border hover:border-black  transition-colors duration-500'>
          GitHub
        </a>
        </div>
      </nav>
    </div>
  )
}

export default Nav;
import React from 'react';
import heroimg from "/src/assets/hero.png";

const StartGame = () => {
  return (
    <main className='w-full min-h-screen flex justify-center items-center p-4'>
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        <div className='flex justify-center items-center w-full md:w-1/2'>
          <img src={heroimg} alt="Hero" className="max-w-full h-auto" />
        </div>
        <div className='flex flex-col justify-center w-full md:w-1/2'>
          <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-bold text-black text-center md:text-right mb-6'>
            Dice Game
          </h1>
          <div className="w-full flex justify-center md:justify-end">
            <button className='text-white bg-black px-8 sm:px-12 md:px-16 lg:px-20 py-2 sm:py-3 md:py-4 rounded-md font-bold hover:text-black hover:border hover:border-black hover:bg-transparent transition-colors duration-300'>
              Play Now
            </button>
          </div>
        </div>
      </div> 
    </main>
  )
}

export default StartGame;
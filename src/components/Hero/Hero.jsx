import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Hero.css'
import heart from '../../assets/images/heart.png'

function Hero() {

  const [quote, setQuote] = useState('');

  return (
    <>
      <section className="image-bg bg-neutral-600 flex justify-center items-center py-72 lg:h-screen mt-20">

          <div className="myContainer flex flex-col justify-center items-center -translate-y-36 z-2">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-400 font-semibold">
              <h1>AirDian</h1>
            </div>
            <div className="-mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              <h3>Explore. Create. Inspire.</h3>
            </div>
            <div className="customStyles p-2 sm:p-3 mt-4 md:m-6 text-amber-800 text-sm sm:text-base md:text-xl lg:p-4 bg-white hover:bg-gray-300 hover:cursor-pointer">
              <a href="http://" target="_blank" rel="noopener noreferrer">Watch Video</a>
            </div>
            <div>Made With <img id='heart' src={heart} /> in India</div>
          </div>
      </section>
    </>
  )
}

export default Hero
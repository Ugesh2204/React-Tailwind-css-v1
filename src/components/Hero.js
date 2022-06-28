//https://www.youtube.com/watch?v=gOQ31Kc8H5E&t=785s

import React from 'react'
import {Link} from 'react-router-dom'
  

function Hero() {
  return (
    <div className="bg-white  flex justify-center items-center h-screen flex-col">
        <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
            EGGCELLENT
        </h1>
      <Link to='/' className='flex items-center bg-yellow-500 py-6 px-10 rounded-full
      text-3xl text-white hover:bg-violet-500 
      transition duration-300 ease-in-out animate-bounce md:text-2xl'
      >
      Order Now
      <svg className="w-8 h-8 ml-2"
       fill="none"
        stroke="currentColor"
         viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      </Link>
    </div>
  )
}

export default Hero


// .flex-col {
//     flex-direction: column;
// }

// .h-screen {
//     height: 100vh;
// }

// @media (min-width: 1024px)
// .lg\:text-9xl {
//     font-size: 8rem;
//     line-height: 1;
// }

// .font-black {
//     font-weight: 900;
// }
// custom color
// <p class="text-[#50d71e]">
// <!-- ... -->
// </p>
import React from 'react'
import styled from 'styled-components'
import herohomembile from '../assets/home/HomeHeroMobile_bg.png';
import herohomeDeskstop from '../assets/home/HomeHeroDesktop.png';
import heroarrowleft  from '../assets/home/Heroarrow_left.png';
import heroarrowright  from '../assets/home/Heroarrow_right.png';
import herocircles  from '../assets/home/Herocircles.png';
import {Link} from 'react-router-dom';
import {BREAKPOINTS} from '../Responsive';
import Hero from './Hero';

const Homeherobg = styled.section`
  background-image:url(${herohomembile});
  height:650px;
  background-repeat: no-repeat;

  @media ${BREAKPOINTS.laptop} {
    background-image:url(${herohomeDeskstop});
  }
`;


function HeroHome() {
  return (
<>
    <Homeherobg>
      <div className=" w-100 flex flex-col  px-6 md:px-0">
        <div className="md:w-100 md:px-165px xl:mt-45px">
        <h1 className="text-2xl text-white text-center mt-28  leading-12
        md:text-left md:pr-300px md:text-h1xl
        xl:pr-400px
        2xL:pr-500px">
        Scooter sharing made simple</h1>
        </div>
        <div className="hero__contentwrapper md:flex">
          <div className="hero__arrowleft hidden md:block xl:mt-64px">
            <img src={heroarrowleft}  alt="arrowleft" />
          </div>
          <div className="hero__contenttxt xl:w-502 xl:py-52px;">
            <p className=" text-white text-center font-body mt-6 text-pxl xl:text-left xl:px-37px">Scoot takes the hassle out of urban mobility.10
              Our bikes are placed in convenient locations in 
              each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!
            </p>
            <div className='text-center mt-8 xl:text-left xl:px-37px xl:mt-45px'>
            <Link to='/' className='bg-yellow-500   font-body
                text-2xl text-white text-center font-body px-8 xl:text-pxl '>
              Get Scootin
            </Link>
            </div>
          </div>
         
          <div className="hero__arrowright hidden md:block xl:mt-64px ">
            <img src={heroarrowright}  alt="arrowright" />
          </div>
          <div className="hero__arrowright hidden md:block xl:mt-137px xl:pl-2">
            <img src={herocircles}  alt="circles" />
          </div>
        </div>      
      </div>
    
    </Homeherobg>

    </>
  )
}

export default HeroHome
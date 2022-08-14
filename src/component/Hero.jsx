import React from 'react'
import Products from './Products'
import Support from './Support'
import Herobanner from '../img/home-banner.png';

const Hero = () => {
  return (
    <div className='hero'>
      <img className='img-fluid' src={Herobanner} />
      <Products />
      <Support />
    </div>  
  )
}

export default Hero;
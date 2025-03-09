import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Welcome to Huating Wang's Laboratory</h1>
        <p>Some descriptory information about Professor and her Lab.</p>
        <button className='btn'>Explore More<img src={dark_arrow} alt=""/></button>
      </div>
    </div>
  )
}

export default Hero

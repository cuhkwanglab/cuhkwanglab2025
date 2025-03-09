import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className='about-right'>
            <h3>ABOUT OUR RESEARCH</h3>
            <h2>Regenerative properties of MuSC & Muscle Aging</h2>
            <p>Skeletal muscle allows voluntary movement and plays a key role in regulating metabolism and homeostasis in the organism. Adult muscle stem cells, MuSCs, are responsible for muscle growth and regeneration.</p>
            <p>Responding to muscle injury, MuSCs are indispensable for the ensued regeneration by quickly activating to enter cell cycle, proliferate, and differentiate to form myofibers de novo. Both intrinsic factors in MuSCs and extrinsic signaling from the niche microenvironment regulate MuSC activities.</p>
            <p>Our group is interested in dissecting the mechanisms underlying the intrinsic and extrinsic regulations and also to elucidate how the deregulated MuSC activities contribute to muscle diseases such as age-inflicted sarcopenia and muscular dystrophy.</p>
        </div>
      
    </div>
  )
}

export default About

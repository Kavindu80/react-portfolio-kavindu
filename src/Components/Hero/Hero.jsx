import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';



const Hero = () => {
  return (
    <div id='home'  className='hero'>
      <img src={profile_img} alt=""style={{ width: '320px', height: '320px', objectFit: 'contain' }}  />
      <h1><span>I'm Kavindu Liyanage,</span> Fullstack Developer based in Sri Lanka.</h1>
      <p>Motivated engineering undergraduate with a strong IT background. Eager to learn, adapt, and apply my skills in practical, challenging opportunities that promote growth and innovation.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>

    </div>
  )
}

export default Hero

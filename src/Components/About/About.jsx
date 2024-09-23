import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about from'../../assets/about.svg'

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={about} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Passionate about cloud computing and software engineering, I am excited by the potential of cloud technologies to transform industries. I continuously develop my skills to create scalable, efficient solutions that shape the future of tech.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"40%"}}/></div>
            </div>
        </div>
         
      </div>
    </div>
  );
}

export default About
import React from 'react'
import './About.css'
import aboutImg from '../../assets/about.png'
import playIcon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutImg} alt='' className='about-Img'/>
            <img src={playIcon} alt='' className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>About WorthIT</h3>
            <h2>Take your Business Online</h2>
            <p>Welcome to WorthIT, where innovation meets excellence 
                in software development. At WorthIT, we are passionate 
                about creating cutting-edge solutions that drive business 
                success and enhance user experiences. Our dedicated team 
                of experts specializes in UI/UX design, web development, 
                and custom software solutions tailored to meet the unique 
                needs of our clients. With a commitment to quality and a 
                focus on delivering value, we strive to exceed expectations 
                and empower businesses to thrive in the digital age. Partner 
                with WorthIT and experience the difference that dedication 
                and expertise can make.</p>
        </div>
    </div>
  )
}

export default About
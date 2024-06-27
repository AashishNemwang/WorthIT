import React from 'react'
import './Services.css'
import service1 from '../../assets/service1.png'
import service2 from '../../assets/service2.png'

const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={service1} alt='' />
            <div className="caption">
              <p>UI/UX Designs</p>
            </div>
        </div>
        <div className="service">
            <img src={service2} alt='' />
            <div className="caption">
              <p>Web Development</p>
            </div>
        </div>
    </div>
  )
}

export default Services
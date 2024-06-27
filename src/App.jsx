import React from 'react'
import Navbar from'./Components/Nav Bar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import { Title } from './Components/Title/Title'
import About from './Components/About/About'
import Workspace from './Components/Workspace/Workspace'
import Testimonial from './Components/Testy/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our SERVICES' title='What we Offer'/>
        <Services/>
        <About/>
        <Title subTitle='WORKSPACE' title='Employees and Work Environment'/>
        <Workspace/>
        <Title subTitle='Testimonials' title='Testimonies from our Clients'/>
        <Testimonial/>
        <Title subTitle='Contact Us' title='Send Us a Message'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
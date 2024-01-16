import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Product from '../Components/Product'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Product heading="ABOUT" text="I'm a Frontend and Backend developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
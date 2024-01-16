import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import Product from '../Components/Product';
import PricingCard from '../Components/PricingCard';
import Work from '../Components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Product heading="PROJECTS" text="some of my best recent projects"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project
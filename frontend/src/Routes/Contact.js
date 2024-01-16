import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Product from '../Components/Product'
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Product heading="CONTACTS" text="Let's have a live chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
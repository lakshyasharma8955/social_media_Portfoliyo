import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
     <form>
        <label>Your Name</label>
        <input type="text" placeholder="Enter Name"></input>
        <label>Email</label>
        <input type="email" placeholder="Enter Email"/>
        <label>Subject</label>
        <input type="text" placeholder="Enter Subject"/>
      <label>Contact</label>
      <input type="text" placeholder="Phone Number"/>
        <label>Message</label>
        <textarea name="6" placeholder="type your message here"></textarea>
        <button className="btn">Submit</button>
     </form>
    </div>
  )
}

export default Form
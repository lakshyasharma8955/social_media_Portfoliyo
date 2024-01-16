import "./MiddleImg.css"
import React from 'react'
import PersonIm from "../assets/Person-Img.jpg";
import { Link } from "react-router-dom";

const MiddleImg = () => {
  return (
    <div className="middle">
      <div className="mask">
        <img className="into-img" src={PersonIm} alt="PersonIm" />
      </div>
      <div className="content">
        <p>HI, I'M A DEVELOPER</p>
        <h1>Node Developer</h1>
        <div>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contacts</Link>
      </div>
      </div>
    </div>
  )
}

export default MiddleImg
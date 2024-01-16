import "./AboutContent.css";
import React from 'react';
import { Link } from "react-router-dom";
import Pro5 from "../assets/Pro5.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a react frontend and backend node developer. I create a responsive website </p>
       <Link to="/contact">
        <button className="btn">Contact</button>
       </Link>
        </div>
        <div className="right">
        <div className="img-container">
            <div className="img-stack top bottom">
                <img src={Pro5} className="img" alt="true" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutContent
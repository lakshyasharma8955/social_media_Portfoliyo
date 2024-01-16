import {
  FaFacebook,
  FaFacebookMessenger,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
              <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
              <p>116, Jhotwara</p>
              <p>India, Rajasthan</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              8955195995
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              lakshya.sharma9928@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About For Me</h4>
          <p>
            this is me lakshya sharma. employee of hawkscode software. i work on
            backend framework like node.js frontend framework like react.js and
            database like used to mongodb{" "}
          </p>
          <div className="social">
            <Link to="https://www.instagram.com/"><FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }}
            /></Link>
            <Link to="https://www.facebook.com/"><FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
            </Link>
            <Link to="https://www.linkedin.com/"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </Link>
            <Link to="https://www.twitter.com/"><FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
            </Link>
            <Link to="https://www.messenger.com/"><FaFacebookMessenger size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

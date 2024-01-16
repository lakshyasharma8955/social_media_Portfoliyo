import "./SkillsData.css";

import React from 'react'

const SkillsData = () => {
  return (
    <section className="experience-section" id="about">
     <div className="container">
        <div className="section_title center">
            {/* <p>Skills Rating</p> */}
        </div>
        <div className="experience-items">
            <div className="experience-item">
                <div className="experience-info">
                    <p>Html</p>
                    <p>90%</p>
                </div>
                <div className="progress-line" data-percent="90%">
                <span style={{width:"90%"}}></span>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-info">
                    <p>CSS</p>
                    <p>50%</p>
                </div>
                <div className="progress-line" data-percent="50%">
                <span style={{width:"50%"}}></span>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-info">
                    <p>JavaScipt</p>
                    <p>65%</p>
                </div>
                <div className="progress-line" data-percent="65%">
                <span style={{width:"65%"}}></span>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-info">
                    <p>React.js</p>
                    <p>85%</p>
                </div>
                <div className="progress-line" data-percent="85%">
                <span style={{width:"85%"}}></span>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-info">
                    <p>Node.js</p>
                    <p>70%</p>
                </div>
                <div className="progress-line" data-percent="70%">
                <span style={{width:"70%"}}></span>
                </div>
            </div>
          
            <div className="experience-item">
                <div className="experience-info">
                    <p>Express.js</p>
                    <p>93%</p>
                </div>
                <div className="progress-line" data-percent="93%">
                <span style={{width:"93%"}}></span>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-info">
                    <p>Mongoose</p>
                    <p>98%</p>
                </div>
                <div className="progress-line" data-percent="98%">
                <span style={{width:"98%"}}></span>
                </div>
            </div>

            <div className="experience-item">
                <div className="experience-info">
                    <p>Data structure</p>
                    <p>63%</p>
                </div>
                <div className="progress-line" data-percent="63%">
                <span style={{width:"63%"}}></span>
                </div>
            </div>
    </div>
     </div>
    </section>
  )
}

export default SkillsData
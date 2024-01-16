import "./WorkCard.css";
import React from 'react'
import { NavLink } from "react-router-dom";
import WorkCard from "./WorkCard";
import WorkCardData from "../Components/WorkCardData"

const Work = () => {
  return (
    <div className="work-container">
   <h1 className="project-heading">Projects</h1>
    <div className="project-container"> 
    {WorkCardData.map((val,ind)=>
    {
        return (<WorkCard
        key={ind}
        imgsrc={val.imgsrc}
        title={val.title}
        text={val.text}
        view={val.view}/>)
    })}
    </div>
    </div>
  )
}

export default Work
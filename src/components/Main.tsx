import React from 'react';
import Project from "./Project";
import projectsObj from "../API/projectsObj";
import projectType from "../tsHooks/projectType";
import { Tooltip } from "@mui/material";

const Main = (): React.JSX.Element => {

  const handleEmailClick = async () => {
    const myEmail = "atnicais@gmail.com";

    try{
      await navigator.clipboard.writeText(myEmail);
      alert("Copied Email!")
    } catch (err) {
      alert(`Email could not be coppied: ${err}`)
    }
  }

  return (
    <main>
        <div id="intro">
          <img/>
          <h2>Hello, My name is Alex.</h2>
          <p>I'm an aspiring Front End Developer from Queens, who enjoys the challenges of coding and loves to learn.</p>
        </div>
        <div id="projects">
          <h1>Projects</h1>
          {
            projectsObj.map((project: projectType, index: number) => {
              return <Project
              key={index}
              imgUrl={project.imgUrl}
              demoUrl={project.demoUrl}
              srcCodeUrl={project.srcCodeUrl}/>
            })
          }
        </div>
        <div id="contact">
          <h1>Contact Me</h1>
          <Tooltip title="Copy Email" placement="top" arrow>
            <p onClick={handleEmailClick}>
              Feel free to email me here!
            </p>
          </Tooltip>
        </div>
    </main>
  )

}

export default Main;
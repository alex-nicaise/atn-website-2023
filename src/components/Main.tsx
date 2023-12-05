import myIllo  from "/nicaise-desk-splash-v3.png"
import Project from "./Project";
import projectsObj from "../API/projectsObj";
import projectType from "../tsHooks/projectType";
import Tools from "./Tools";

const Main = (): React.JSX.Element => {

  return (
    <main>
        <div id="intro">
          <img id="main-illo" src={myIllo}/>
          <h2>Hello, My name is Alex.</h2>
          <p>I'm an aspiring Front End Developer from Queens, who enjoys the challenges of coding and loves to learn.</p>
        </div>
        <div id="projects">
          <h1>Projects</h1>
          <div id="projects-container">
          {
            projectsObj.map((project: projectType, index: number):React.JSX.Element => {
              return <Project
              key={index}
              title={project.title}
              imgUrl={project.imgUrl}
              demoUrl={project.demoUrl}
              srcCodeUrl={project.srcCodeUrl}
              notes={project.notes}/>
            })
          }
          </div>
        </div>
        <div id="contact">
          <Tools/>
        </div>
    </main>
  )

}

export default Main;
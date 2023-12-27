import myIllo  from "/nicaise-desk-splash-v3.png"
import Project from "./Project";
import projectsObj from "../API/projectsObj";
import projectType from "../tsHooks/projectType";
import Tools from "./Tools";

const Main = (): React.JSX.Element => {

  return (
    <main>
        <article id="intro">
          <img id="main-illo" src={myIllo}/>
          <h1>Hello, My name is Alex.</h1>
          <p>I'm an aspiring Front End Developer from New York who enjoys the challenges of coding and loves to learn.</p>
        </article>
        <article id="projects">
          <h1>Projects</h1>
          <section id="projects-container">
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
          </section>
        </article>
        <article id="tools">
          <Tools/>
        </article>
    </main>
  )

}

export default Main;
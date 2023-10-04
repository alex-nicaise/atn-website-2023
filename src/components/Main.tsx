import Project from "./Project";
import projectsObj from "../API/projectsObj";
import ContactForm from "./ContactForm";

const Main = () => {

  interface ProjectType {
    imgUrl: string;
    demoUrl: string;
    srcCodeUrl: string;
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
            projectsObj.map((project: ProjectType, index: number) => {
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
          <ContactForm/>
        </div>
    </main>
  )

}

export default Main;
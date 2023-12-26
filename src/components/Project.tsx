import projectType from '../tsHooks/projectType';

const Project = (props: projectType): React.JSX.Element => {
  return (
    <section className="project">

        <div className="project-img" style={{backgroundImage: `url(${props.imgUrl})`}}></div>

        <h4>{props.title}</h4>
        <p className="italicized">{props.notes}</p>

        <div className="project-btn-group">
            <a href={props.demoUrl} target="_blank"><button>Demo</button></a>
            <a href={props.srcCodeUrl} target="_blank"><button>Source Code</button></a>
        </div>
    </section>
  )
}

export default Project;